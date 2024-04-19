import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "./../../axios/index";

export default function AddProperty() {
	const userId = localStorage.getItem("userId");
	const { register, handleSubmit } = useForm();
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

	const roomsRef = useRef(null);
	const showHide = () => {
		setHidden(!hidden);
	};
	useEffect(() => {
		if (!hidden) {
			roomsRef.current.style.display = "block";
		} else {
			roomsRef.current.style.display = "none";
		}
	}, [hidden]);

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
							<h4>Add your Property</h4>
							<form onSubmit={handleSubmit(submitHotel)}>
								<div className="flex items-center gap-2">
									<label
										className=""
										htmlFor="hotelMainImage"
									>
										Hotel Img
									</label>
									<input
										{...register("hotelMainImage")}
										type="text"
										id="hotelMainImage"
										className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
									/>
								</div>
								<div className="flex items-center gap-2">
									<label className="" htmlFor="hotelName">
										Hotel Name
									</label>
									<input
										{...register("hotelName")}
										type="text"
										id="hotelName"
										className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
									/>
									<label className="" htmlFor="hotelName_ar">
										Hotel Name AR
									</label>
									<input
										{...register("hotelName_ar")}
										type="text"
										id="hotelName_ar"
										className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
									/>
								</div>
								<div className="flex items-center gap-2">
									<label className="" htmlFor="hotelType">
										Hotel Type
									</label>
									<select
										{...register("hotelType")}
										id="hotelType"
										className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
									>
										<option>hotel</option>
										<option>apartment</option>
										<option>resort</option>
										<option>villa</option>
									</select>
								</div>
								<div className="flex items-center gap-2">
									<label
										className=""
										htmlFor="hotelDescription"
									>
										Hotel Description
									</label>
									<textarea
										{...register("hotelDescription")}
										type="text"
										id="hotelDescription"
										className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
									/>
									<label
										className=""
										htmlFor="hotelDescription_ar"
									>
										Hotel Description AR
									</label>
									<textarea
										{...register("hotelDescription_ar")}
										type="text"
										id="hotelDescription_ar"
										className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
									/>
								</div>
								<div className="flex items-center gap-2">
									<label
										className=""
										htmlFor="hotelSubDescription"
									>
										Hotel Sub Description
									</label>
									<textarea
										{...register("hotelSubDescription")}
										type="text"
										id="hotelSubDescription"
										className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
									/>
									<label
										className=""
										htmlFor="hotelSubDescription_ar"
									>
										Hotel Sub Description AR
									</label>
									<textarea
										{...register("hotelSubDescription_ar")}
										type="text"
										id="hotelSubDescription_ar"
										className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
									/>
								</div>
								<div className="flex items-center gap-2">
									<label className="" htmlFor="hotelCity">
										Hotel City
									</label>
									<select
										{...register("hotelCity")}
										id="hotelCity"
										className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
									>
										<option>cairo</option>
										<option>hurghada</option>
										<option>alexandria</option>
										<option>sharmelsheikh</option>
										<option>dahab</option>
									</select>
									<label className="" htmlFor="hotelCity_ar">
										Hotel City AR
									</label>
									<select
										{...register("hotelCity_ar")}
										id="hotelCity"
										className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
									>
										<option>القاهره</option>
										<option>الغردقه</option>
										<option>الاسكندريه</option>
										<option>شرم الشيخ</option>
										<option>دهب</option>
									</select>
								</div>
								<div className="flex items-center gap-2">
									<label className="" htmlFor="hotelAddress">
										Hotel Address
									</label>
									<input
										{...register("hotelAddress")}
										type="text"
										id="hotelAddress"
										className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
									/>
									<label
										className=""
										htmlFor="hotelAddress_ar"
									>
										Hotel Address AR
									</label>
									<input
										{...register("hotelAddress_ar")}
										type="text"
										id="hotelAddress_ar"
										className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
									/>
								</div>
								<div className="flex items-center gap-2">
									<label
										className=""
										htmlFor="distanceFromCenter"
									>
										Distance From Center
									</label>
									<input
										{...register("distanceFromCenter")}
										type="number"
										id="distanceFromCenter"
										className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
									/>
								</div>
								<button
									type="submit"
									className="btn btn-primary"
								>
									Submit
								</button>
							</form>
						</>
					) : (
						<>
							<h4>Want to be an owner?</h4>
							<button
								onClick={() => makeOwner()}
								className="btn btn-primary"
							>
								Click here
							</button>
						</>
					)}
				</div>

				{/* Add rooms */}
				<div
					className="mt-5 mb-2"
					ref={roomsRef}
					style={{ display: "none" }}
				>
					<form
						onSubmit={handleSubmit(submitRooms)}
						className="grid grid-cols-2 gap-2"
					>
						<div className="flex items-center gap-2">
							<label className="" htmlFor="hotelId">
								Hotel Name
							</label>
							<select
								{...register("hotelId")}
								id="hotelId"
								className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
								placeholder="-- Select a hotel --"
							>
								<option value="">-- Select a hotel --</option>
								{hotelsData.map((hotel) => (
									<option key={hotel._id} value={hotel._id}>
										{hotel.hotelName}
									</option>
								))}
							</select>
						</div>
						<div className="flex items-center gap-2">
							<label className="" htmlFor="roomType">
								Room Type
							</label>
							<select
								{...register("roomType")}
								type="text"
								id="roomType"
								className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
							>
								<option>Single Room</option>
								<option>Double Room</option>
								<option>Triple Room</option>
							</select>
						</div>
						<div className="flex items-center gap-2">
							<label className="" htmlFor="bedType">
								Bed Type
							</label>
							<select
								{...register("bedType")}
								type="text"
								id="bedType"
								className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
							>
								<option>Single Bed</option>
								<option>Double Beds</option>
							</select>
						</div>
						<div className="flex items-center gap-2">
							<label className="" htmlFor="guestNumber">
								Guest Number
							</label>
							<input
								{...register("guestNumber")}
								type="number"
								id="guestNumber"
								className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
							/>
						</div>
						<div className="flex items-center gap-2">
							<label className="" htmlFor="price">
								Room Price
							</label>
							<input
								{...register("price")}
								type="number"
								id="price"
								className="flex-grow-1 px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
							/>
						</div>
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
				</div>
				<button className="btn btn-primary" onClick={() => showHide()}>
					Add room
				</button>
			</section>
		</>
	);
}
