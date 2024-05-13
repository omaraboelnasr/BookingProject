import React from "react";
import { useLocation } from "react-router";
import axiosInstance from "../../axios";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const BookingCard = () => {
	const initialOptions = {
		"client-id":
			"AdapdEY6ebdY0xF1ndyqv_xZLIqAoKRdUyDjfMTjsFbb5o15rXKKdcC-odnUAqw7uVBToTvx9T-UxfZ3",
		"enable-funding": "paypal",
		"disable-funding": "paylater,venmo,card",
		"data-sdk-integration-source": "integrationbuilder_sc",
	};
	const navigate = useNavigate();
	const [booking, setBooking] = useState(false);
	const location = useLocation();
	const { rooms, date, img } = location.state;
	const totalPrice = location.state.rooms.reduce((total, room) => {
		return total + room.quantity * room.room.price;
	}, 0);

	const user = localStorage.getItem("userId");
	const room = rooms.map((room) => room.room._id);
	const checkIn = date?.[0]?.startDate;
	const checkOut = date?.[0]?.endDate;
	const guests = 4;
	const bookingData = {
		user,
		room,
		guests,
		checkIn,
		checkOut,
		totalPrice,
	};

	const createOrder = async (data, actions) => {
		return actions.order.create({
			intent: "CAPTURE",
			purchase_units: [
				{
					amount: {
						currency_code: "USD",
						value: totalPrice,
					},
				},
			],
		});
	};

	const onApprove = (data, actions) => {
		return actions.order.capture().then((orderData) => {
			const transaction =
				orderData.purchase_units[0].payments.captures[0];
			console.log("Transaction result: ", orderData);
			axiosInstance
				.post("/booking", bookingData)
				.then((response) => {
					console.log(
						"Booking created successfully",
						response.data.message
					);
					if (
						response.data.message === "booking added successfully"
					) {
						setBooking(true);
					}
				})
				.catch((error) => {
					console.error(
						"Error creating booking",
						error.response.data
					);
				});
			setMessage(
				`Transaction ${transaction.status} with ID: ${transaction.id}`
			);
		});
	};

	useEffect(() => {
		if (booking === true) {
			navigate("/");
			window.alert("Transaction added successfully");
		}
	}, [booking]);

	return (
		<main className="container mt-10">
			<div className="grid sm:px-10 lg:grid-cols-2">
				<div className="px-4 pt-8">
					<p className="text-xl font-medium">Booking Summary</p>

					<div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
						{rooms.map((room) => (
							<div
								key={room.room._id}
								className="flex flex-col rounded-lg bg-white sm:flex-row"
							>
								<img
									className="m-2 h-24 w-28 rounded-md border object-cover object-center"
									src={img}
									alt=""
								/>
								<div className="flex w-full flex-col px-4 py-4">
									<span className="font-semibold uppercase">
										{room.room.roomType}
									</span>
									<span className="capitalize">
										{room.room.bedType}
									</span>
									<span className=" text-gray-400">
										{room.quantity}
									</span>
									<p className="text-lg font-bold">
										{room.room.price}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
					{/* <p className="text-xl font-medium">Payment Details</p>
					<p className="text-gray-400">
						Complete your order by providing your payment details.
					</p> */}
					<div>
						{/* <label
							htmlFor="email"
							className="mt-4 mb-2 block text-sm font-medium"
						>
							Email
						</label>
						<div className="relative">
							<input
								type="text"
								id="email"
								name="email"
								className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
								placeholder="your.email@gmail.com"
							/>
						</div> */}
						{/* <label
							htmlFor="card-holder"
							className="mt-4 mb-2 block text-sm font-medium"
						>
							Card Holder
						</label>
						<div className="relative">
							<input
								type="text"
								id="card-holder"
								name="card-holder"
								className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
								placeholder="Your full name here"
							/>
						</div> */}
						{/* <label
							htmlFor="card-no"
							className="mt-4 mb-2 block text-sm font-medium"
						>
							Card Details
						</label>
						<div className="flex">
							<div className="relative w-7/12 flex-shrink-0">
								<input
									type="text"
									id="card-no"
									name="card-no"
									className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
									placeholder="xxxx-xxxx-xxxx-xxxx"
								/>
							</div>
							<input
								type="text"
								name="credit-expiry"
								className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
								placeholder="MM/YY"
							/>
							<input
								type="text"
								name="credit-cvc"
								className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
								placeholder="CVC"
							/>
						</div> */}
						{/* <label
							htmlFor="billing-address"
							className="mt-4 mb-2 block text-sm font-medium"
						>
							Billing Address
						</label>
						<div className="flex flex-col sm:flex-row">
							<div className="relative flex-shrink-0 sm:w-7/12">
								<input
									type="text"
									id="billing-address"
									name="billing-address"
									className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
									placeholder="Street Address"
								/>
							</div>
							<select
								type="text"
								name="billing-state"
								className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
							>
								<option value="State">State</option>
							</select>
							<input
								type="text"
								name="billing-zip"
								className="flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
								placeholder="ZIP"
							/>
						</div> */}
						{/* Total */}
						<div className="mt-6 flex items-center justify-between border-t border-b py-2">
							<p className="text-lg font-medium text-gray-900">
								Total
							</p>
							<p className="text-2xl font-semibold text-gray-900">
								${totalPrice}
							</p>
						</div>
					</div>
					{/* <button
						className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
						onClick={() => {
							submitBooking();
						}}
					>
						Place Booking
					</button> */}
					<PayPalScriptProvider options={initialOptions}>
						<PayPalButtons
							style={{
								shape: "pill",
								layout: "horizontal",
							}}
							createOrder={createOrder}
							onApprove={onApprove}
						></PayPalButtons>
					</PayPalScriptProvider>
				</div>
			</div>
		</main>
	);
};

export default BookingCard;
