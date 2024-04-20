import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "./../../axios/index";
import { useTranslation } from "react-i18next";

export default function AddProperty() {
	const userId = localStorage.getItem("userId");
	const { t, i18n } = useTranslation();
	const {
		register: registerHotel,
		handleSubmit: handleSubmitHotel,
		formState: { errors: errorsHotel },
	} = useForm();
	const {
		register: registerRoom,
		handleSubmit: handleSubmitRoom,
		formState: { errors: errorsRoom },
	} = useForm();
	const [hidden, setHidden] = useState(true);
	const isOwner = localStorage.getItem("owner");
	const makeOwner = async () => {
		const userId = localStorage.getItem("userId");
		const token = localStorage.getItem("token");
		try {
			await axiosInstance.patch(
				`/user/${userId}`,
				{ owner: true },
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			localStorage.setItem("owner", "true");
			window.location.reload();
		} catch (error) {
			console.error("Error making owner:", error);
		}
	};
	const submitHotel = (data) => {
		const {
			distanceFromCenter,
			hotelAddress,
			hotelAddress_ar,
			hotelCity,
			hotelCity_ar,
			hotelDescription,
			hotelDescription_ar,
			hotelMainImage,
			hotelName,
			hotelName_ar,
			hotelSubDescription,
			hotelSubDescription_ar,
			hotelType,
		} = data;

		const hotelsNewData = {
			owner: userId,
			distanceFromCenter: distanceFromCenter,
			hotelAddress: hotelAddress,
			hotelAddress_ar: hotelAddress_ar,
			hotelCity: hotelCity,
			hotelCity_ar: hotelCity_ar,
			hotelDescription: hotelDescription,
			hotelDescription_ar: hotelDescription_ar,
			hotelMainImage: hotelMainImage,
			hotelName: hotelName,
			hotelName_ar: hotelName_ar,
			hotelSubDescription: hotelSubDescription,
			hotelSubDescription_ar: hotelSubDescription_ar,
			hotelType: hotelType,
			approved: false,
		};
		axiosInstance
			.post("/hotels/owners", hotelsNewData)
			.then((response) => {
				console.log(response);
				window.location.reload();
			})
			.catch((err) => {
				console.log("error", err);
			});
	};

	const showHide = () => {
		setHidden(!hidden);
	};

	const submitRooms = (data) => {
		const { hotelId, roomType, bedType, guestNumber, price } = data;
		const roomsNewData = {
			hotelId: hotelId,
			roomType: roomType,
			bedType: bedType,
			guestNumber: guestNumber,
			price: price,
			approved: false,
		};
		axiosInstance
			.post(`/rooms/owners/${hotelId}`, roomsNewData)
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const [hotelsData, setHotelsData] = useState([]);
	useEffect(() => {
		axiosInstance
			.get(`/hotels/owners/${userId}`)
			.then((res) => {
				setHotelsData(res.data.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [userId]);
	return (
		<>
			<section className="container pt-5">
				{/* Add Hotels */}
				<div className="my-2">
					{isOwner === "true" ? (
						<>
							<h4>{t("addYourProperty")}</h4>
							<form
								className="my-2"
								onSubmit={handleSubmitHotel(submitHotel)}
							>
								<div className="flex items-center gap-2">
									<label
										className=""
										htmlFor="hotelMainImage"
									>
										{t("propertyImg")}
									</label>
									<input
										{...registerHotel("hotelMainImage", {
											required: "true",
										})}
										type="text"
										id="hotelMainImage"
										className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
									/>
								</div>
								{errorsHotel.hotelMainImage && (
									<p className="text-danger">
										{t("imageLink")} {t("required")}
									</p>
								)}
								<div className="flex items-center gap-2">
									<label className="" htmlFor="hotelName">
										{t("propertyName")}
									</label>
									<input
										{...registerHotel("hotelName", {
											required: true,
										})}
										type="text"
										id="hotelName"
										className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
									/>
									<label className="" htmlFor="hotelName_ar">
										{t("propertyNameAR")}
									</label>
									<input
										{...registerHotel("hotelName_ar", {
											required: true,
										})}
										type="text"
										id="hotelName_ar"
										className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
									/>
								</div>
								{(errorsHotel.hotelName ||
									errorsHotel.hotelName_ar) && (
									<p className="text-danger">
										{i18n.language === "ar"
											? `${t("propertyNameAR")}`
											: `${t("propertName")}`}{" "}
										{t("required")}
									</p>
								)}
								<div className="flex items-center gap-2">
									<label className="" htmlFor="hotelType">
										{t("propertyType")}
									</label>
									<select
										{...registerHotel("hotelType", {
											required: true,
										})}
										id="hotelType"
										className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
									>
										<option value="">
											-- Select a type --
										</option>
										<option>hotel</option>
										<option>apartment</option>
										<option>resort</option>
										<option>villa</option>
									</select>
								</div>
								{errorsHotel.hotelType && (
									<p className="text-danger">
										{t("propertyType")} {t("required")}
									</p>
								)}
								<div className="flex items-center gap-2">
									<label
										className=""
										htmlFor="hotelDescription"
									>
										{t("propertyDescription")}
									</label>
									<textarea
										{...registerHotel("hotelDescription", {
											required: true,
										})}
										type="text"
										id="hotelDescription"
										className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
									/>
									<label
										className=""
										htmlFor="hotelDescription_ar"
									>
										{t("propertyDescriptionAR")}
									</label>
									<textarea
										{...registerHotel(
											"hotelDescription_ar",
											{
												required: true,
											}
										)}
										type="text"
										id="hotelDescription_ar"
										className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
									/>
								</div>
								{(errorsHotel.hotelDescription ||
									errorsHotel.hotelDescription_ar) && (
									<p className="text-danger">
										{i18n.language === "ar"
											? `${t("propertyDescriptionAR")}`
											: `${t(
													"propertyDescription"
											  )}`}{" "}
										{t("required")}
									</p>
								)}
								<div className="flex items-center gap-2">
									<label
										className=""
										htmlFor="hotelSubDescription"
									>
										{t("propertySubDescription")}
									</label>
									<textarea
										{...registerHotel(
											"hotelSubDescription",
											{
												required: true,
											}
										)}
										type="text"
										id="hotelSubDescription"
										className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
									/>
									<label
										className=""
										htmlFor="hotelSubDescription_ar"
									>
										{t("propertySubDescriptionAR")}
									</label>
									<textarea
										{...registerHotel(
											"hotelSubDescription_ar",
											{
												required: true,
											}
										)}
										type="text"
										id="hotelSubDescription_ar"
										className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
									/>
								</div>
								{(errorsHotel.hotelSubDescription ||
									errorsHotel.hotelSubDescription_ar) && (
									<p className="text-danger">
										{i18n.language === "ar"
											? `${t("propertySubDescriptionAR")}`
											: `${t(
													"propertySubDescription"
											  )}`}{" "}
										{t("required")}
									</p>
								)}
								<div className="flex items-center gap-2">
									<label className="" htmlFor="hotelCity">
										{t("propertyCity")}
									</label>
									<select
										{...registerHotel("hotelCity", {
											required: true,
										})}
										id="hotelCity"
										className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
									>
										<option value="">
											-- {t("selectCity")} --
										</option>
										<option>cairo</option>
										<option>hurghada</option>
										<option>alexandria</option>
										<option>sharmelsheikh</option>
										<option>dahab</option>
									</select>
									<label className="" htmlFor="hotelCity_ar">
										{t("propertyCityAR")}
									</label>
									<select
										{...registerHotel("hotelCity_ar", {
											required: true,
										})}
										id="hotelCity_ar"
										className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
									>
										<option value="">
											-- {t("selectCity")} --
										</option>
										<option>القاهره</option>
										<option>الغردقه</option>
										<option>الاسكندريه</option>
										<option>شرم الشيخ</option>
										<option>دهب</option>
									</select>
								</div>
								{(errorsHotel.hotelCity ||
									errorsHotel.hotelCity_ar) && (
									<p className="text-danger">
										{i18n.language === "ar"
											? `${t("propertyCityAR")}`
											: `${t("propertyCity")}`}{" "}
										{t("required")}
									</p>
								)}
								<div className="flex items-center gap-2">
									<label className="" htmlFor="hotelAddress">
										{t("propertyAddress")}
									</label>
									<input
										{...registerHotel("hotelAddress", {
											required: true,
										})}
										type="text"
										id="hotelAddress"
										className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
									/>
									<label
										className=""
										htmlFor="hotelAddress_ar"
									>
										{t("propertyAddressAR")}
									</label>
									<input
										{...registerHotel("hotelAddress_ar", {
											required: true,
										})}
										type="text"
										id="hotelAddress_ar"
										className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
									/>
								</div>
								{(errorsHotel.hotelAddress ||
									errorsHotel.hotelAddress_ar) && (
									<p className="text-danger">
										{i18n.language === "ar"
											? `${t("propertyAddressAR")}`
											: `${t("propertyAddress")}`}{" "}
										{t("required")}
									</p>
								)}
								<div className="flex items-center gap-2">
									<label
										className=""
										htmlFor="distanceFromCenter"
									>
										{t("propertyDistance")}
									</label>
									<input
										{...registerHotel(
											"distanceFromCenter",
											{
												required: true,
											}
										)}
										type="number"
										id="distanceFromCenter"
										className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
									/>
								</div>
								{errorsHotel.distanceFromCenter && (
									<p className="text-danger">
										{t("propertyDistance")} {t("required")}
									</p>
								)}
								<button
									type="submit"
									className="btn btn-primary"
								>
									{t("submit")}
								</button>
							</form>
							{/* Add rooms */}
							<div
								className="mt-5 mb-2"
								style={{ display: hidden ? "none" : "block" }}
							>
								<h4>{t("addYourRoom")}</h4>
								<form onSubmit={handleSubmitRoom(submitRooms)}>
									<div className="flex items-center gap-2">
										<label className="" htmlFor="hotelId">
											{i18n.language === "ar"
												? `${t("propertyNameAR")}`
												: `${t("propertyName")}`}
										</label>
										<select
											{...registerRoom("hotelId", {
												required: true,
											})}
											id="hotelId"
											className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
											placeholder="-- Select a hotel --"
										>
											<option value="">
												-- {t("selectHotel")} --
											</option>
											{hotelsData.map((hotel) => (
												<option
													key={hotel._id}
													value={hotel._id}
												>
													{hotel.hotelName}
												</option>
											))}
										</select>
									</div>
									{errorsRoom.hotelId && (
										<p className="text-danger">
											{i18n.language === "ar"
												? `${t("propertyNameAR")}`
												: `${t("propertyName")}`}{" "}
											{t("required")}
										</p>
									)}
									<div className="flex items-center gap-2">
										<label className="" htmlFor="roomType">
											{t("roomType")}
										</label>
										<select
											{...registerRoom("roomType", {
												required: true,
											})}
											type="text"
											id="roomType"
											className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
										>
											<option value="">
												-- {t("selectRoom")} --
											</option>
											<option>Single Room</option>
											<option>Double Room</option>
											<option>Triple Room</option>
										</select>
									</div>
									{errorsRoom.roomType && (
										<p className="text-danger">
											{t("roomType")} {t("required")}
										</p>
									)}
									<div className="flex items-center gap-2">
										<label className="" htmlFor="bedType">
											{t("bedType")}
										</label>
										<select
											{...registerRoom("bedType", {
												required: true,
											})}
											type="text"
											id="bedType"
											className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
										>
											<option value="">
												-- {t("selectBed")} --
											</option>
											<option>Single Bed</option>
											<option>Double Beds</option>
										</select>
									</div>
									{errorsRoom.bedType && (
										<p className="text-danger">
											{t("bedType")} {t("required")}
										</p>
									)}
									<div className="flex items-center gap-2">
										<label
											className=""
											htmlFor="guestNumber"
										>
											{t("guestNumber")}
										</label>
										<input
											{...registerRoom("guestNumber", {
												required: true,
											})}
											type="number"
											id="guestNumber"
											className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
										/>
									</div>
									{errorsRoom.guestNumber && (
										<p className="text-danger">
											{t("guestNumber")} {t("required")}
										</p>
									)}
									<div className="flex items-center gap-2">
										<label className="" htmlFor="price">
											{t("roomPrice")}
										</label>
										<input
											{...registerRoom("price", {
												required: true,
											})}
											type="number"
											id="price"
											className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
										/>
									</div>
									{errorsRoom.price && (
										<p className="text-danger">
											{t("roomPrice")} {t("required")}
										</p>
									)}
									<button
										type="submit"
										className="btn btn-primary"
									>
										{t("submit")}
									</button>
								</form>
							</div>
							<button
								className="btn btn-primary"
								onClick={() => showHide()}
							>
								{hidden
									? `${t("showRoom")}`
									: `${t("hideRoom")}`}
							</button>
						</>
					) : (
						<>
							<h4>{t("wantOwnership")}</h4>
							<button
								onClick={() => makeOwner()}
								className="btn btn-primary"
							>
								{t("clickHere")}
							</button>
						</>
					)}
				</div>
			</section>
		</>
	);
}
