import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import {
	MdOutlineAirportShuttle,
	MdOutlineRoomService,
	MdBalcony,
	MdOutlineCoffeeMaker,
	MdOutlineFreeBreakfast,
} from "react-icons/md";
import { LiaSmokingBanSolid } from "react-icons/lia";
import { RiRestaurantLine } from "react-icons/ri";
import { GrWifi } from "react-icons/gr";
import { BiDrink } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import Badge from "react-bootstrap/Badge";

import SearchInRoom from "../../components/searchInRoom/searchInRoom";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getHotel } from "../../services/hotels";
import { useEffect } from "react";
import { listRooms } from "../../services/rooms";
import { useTranslation } from "react-i18next";
import Rating from "../rating";

const Rooms = () => {
	const [hotel, setHotel] = useState([]);
	const [rooms, setRooms] = useState([]);
	const [selectedValues, setSelectedValues] = useState([]);
	const { id } = useParams();
	const navigate = useNavigate();
	const { t, i18n } = useTranslation();

	const location = useLocation();
	const getTheHotel = async () => {
		try {
			var hotelData = await getHotel(id);

			setHotel(hotelData);
		} catch (err) {
			console.log(err);
		}
	};
	const getRooms = async () => {
		try {
			var roomsData = await listRooms(id);
			setRooms(roomsData);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getTheHotel();
		getRooms();
	}, []);

	const handleChange = (index, value) => {
		const newSelectedValues = [...selectedValues];
		newSelectedValues[index] = value;
		setSelectedValues(newSelectedValues);
	};
	const handleBook = () => {
		const selectedRooms = selectedValues.reduce((acc, value, index) => {
			if (value > 0) {
				acc.push({
					room: rooms[index],
					quantity: value,
				});
			}
			return acc;
		}, []);
		if (selectedRooms.length > 0) {
			navigate("/booking", {
				state: {
					rooms: selectedRooms,
					date: location.date,
					img: hotel.hotelMainImage,
				},
			});
		}
	};
	return (
		<>
			<Container className="pt-20 flex flex-col justify-around">
				<Container>
					<Row>
						<Col>
							<div className="flex flex-col flex-md-row justify-between">
								<div className="flex">
									<h2>
										{i18n.language === "ar"
											? hotel.hotelName_ar
											: hotel.hotelName}
									</h2>
									<Rating stars={hotel.hotelRating} />
								</div>
								<div className="flex gap-x-2 items-center">
									<div>
										<p className="p-0 m-0">
											{hotel.review} {t("reviews")}
										</p>
									</div>
									<div>
										<Badge
											bg="primary"
											className="p-3 fs-6 mt-1"
										>
											{hotel.hotelRating}
										</Badge>
									</div>
								</div>
							</div>
							<div className="flex mt-2">
								<MdLocationPin className="fs-3 text-blue-900" />
								<p>
									{i18n.language === "ar"
										? hotel.hotelAddress_ar
										: hotel.hotelAddress}
								</p>
							</div>
						</Col>
					</Row>
					<Row>
						<Col className="pt-3">
							<img
								className="d-block w-100"
								src={hotel.hotelMainImage}
								alt="Third slide"
								style={{
									width: "800px",
									height: "500px",
								}}
							/>
						</Col>
					</Row>
					<Row>
						<Col>
							<div className="pt-4">
								<h5>{t("description")}</h5>
								<p>
									{i18n.language === "ar"
										? hotel.hotelDescription_ar
										: hotel.hotelDescription}
								</p>
							</div>
						</Col>
					</Row>
					<Row>
						<Col>
							<div className="pt-4">
								<h5>{t("Most popular facilities")}</h5>
								<div className="flex flex-wrap">
									<p className="me-3">
										{" "}
										<MdOutlineAirportShuttle className="inline-block me-1 text-green-500 fs-4" />
										{t("Airport shuttle (free)")}
									</p>
									<p className="me-3">
										<LiaSmokingBanSolid className="inline-block me-1 text-green-500 fs-4" />
										{t("Non-smoking rooms")}
									</p>
									<p className="me-3">
										<MdOutlineRoomService className="inline-block me-1 text-green-500 fs-4" />
										{t("Room service")}
									</p>
									<p className="me-3">
										{" "}
										<RiRestaurantLine className="inline-block me-1 text-green-500 fs-4" />
										{t("Restaurant")}
									</p>
									<p className="me-3">
										<GrWifi className="inline-block me-1 text-green-500 fs-4" />
										{t("Free WiFi")}
									</p>
									<p className="me-3">
										<BiDrink className="inline-block me-1 text-green-500 fs-4" />
										{t("Bar")}
									</p>
									<p className="me-3">
										<MdBalcony className="inline-block me-1 text-green-500 fs-4" />
										{t("Terrace")}
									</p>
									<p className="me-3">
										<MdOutlineCoffeeMaker className="inline-block me-1 text-green-500 fs-4" />
										{t("Tea/coffee maker in all rooms")}
									</p>
									<p className="me-3">
										<MdOutlineFreeBreakfast className="inline-block me-1 text-green-500 fs-4" />
										{t("Breakfast")}
									</p>
								</div>
							</div>
						</Col>
					</Row>
					<Row>
						<Col className="mt-4">
							<h5>Availability</h5>
							<SearchInRoom searchHistory={location} />
						</Col>
					</Row>
					<Row>
						<Col className="mt-4">
							<h5>Rooms</h5>
							<Table bordered>
								<thead>
									<tr>
										<th>Room type </th>
										<th>Number of guests</th>
										<th>Today price</th>
										<th>Your choices</th>
										<th>Select rooms</th>
									</tr>
								</thead>
								<tbody>
									{rooms.map((room, index) => (
										<tr key={room._id}>
											<td>
												{room.roomType} with{" "}
												{room.bedType}
											</td>
											<td className="flex">
												{room.guestNumber === 1 ? (
													<IoPersonSharp />
												) : room.guestNumber === 2 ? (
													<>
														<IoPersonSharp />
														<IoPersonSharp />
													</>
												) : room.guestNumber === 3 ? (
													<>
														<IoPersonSharp />
														<IoPersonSharp />
														<IoPersonSharp />
													</>
												) : (
													<>
														<IoPersonSharp />
														<IoPersonSharp />
														<IoPersonSharp />
														<IoPersonSharp />
													</>
												)}
											</td>
											<td>EGP {room.price}</td>
											<td>
												<p
													style={{
														color: "green",
														fontWeight: "bold",
													}}
													className="p-0 m-0"
												>
													Breakfast included
												</p>
												<p
													style={{ color: "green" }}
													className="p-0 m-0"
												>
													<span>
														<TiTick className="inline" />
													</span>
													Free cancellation
												</p>
												<p
													style={{ color: "green" }}
													className="p-0 m-0"
												>
													<span>
														<TiTick className="inline" />
													</span>
													No prepayment needed -{" "}
													<span
														style={{
															fontSize: "15px",
														}}
													>
														pay at the property
													</span>
												</p>
											</td>
											<td>
												<Form.Select
													aria-label="Default select example"
													value={
														selectedValues[index]
													}
													onChange={(e) => {
														handleChange(
															index,
															e.target.value
														);
													}}
												>
													<option value="0">0</option>
													<option value="1">1</option>
													<option value="2">2</option>
													<option value="3">3</option>
												</Form.Select>
											</td>
										</tr>
									))}
								</tbody>
							</Table>
							<div className="mt-10 flex justify-end">
								<button
									type="button"
									className="block w-25 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									onClick={() => {
										handleBook();
									}}
								>
									Book
								</button>
							</div>
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	);
};

export default Rooms;
