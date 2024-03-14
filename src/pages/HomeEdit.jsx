
import React, { useState, useEffect, useCallback } from 'react';
import { registerUser, loginUser, getUserData, updateUserData, deleteUserData } from '../axios/index';


const HomeEdit = ({ userId }) => {
//backend 
 const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await getUserData(userId);
                setUser(userData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [userId]);

    const handleRegisterUser = useCallback(async (userData) => {
        try {
            const newUser = await registerUser(userData);
            setUser(newUser);
        } catch (error) {
            setError(error);
        }
    }, []);

    const handleLoginUser = useCallback(async (userData) => {
        try {
            const loggedInUser = await loginUser(userData);
            setUser(loggedInUser);
        } catch (error) {
            setError(error);
        }
    }, []);

    const handleUpdateUserData = useCallback(async (updatedData) => {
        try {
            const updatedUserData = await updateUserData(userId, updatedData);
            setUser(updatedUserData);
        } catch (error) {
            setError(error);
        }
    }, [userId]);

    const handleDeleteUserData = useCallback(async () => {
        try {
            await deleteUserData(userId);
            setUser(null);
        } catch (error) {
            setError(error);
        }
    }, [userId]);



	const [showInputs, setShowInputs] = useState(false);
	const [showNameInputs, setShowNameInputs] = useState(false);
	const [showEmailInputs, setShowEmailInputs] = useState(false);

	const [showDOBInputs, setShowDOBInputs] = useState(false);
	const [input1Value, setInput1Value] = useState("");
	const [input2Value, setInput2Value] = useState("");
	const [input3Value, setInput3Value] = useState("");
	const [inputPasswordValue, setInputPasswordValue] = useState("");
	
	const [savedValue1, setSavedValue1] = useState("");
	const [savedValue2, setSavedValue2] = useState("");
	const [savedValue3, setSavedValue3] = useState("");

	const [savedValue5, setSavedValue5] = useState("");
	const [savedPasswordValue, setSavedPasswordValue] = useState("");


    

	const [day, setDay] = useState("");
	const [month, setMonth] = useState("");
	const [year, setYear] = useState("");


	const handleEditClick = (field) => {
		switch (field) {
			case "name":
				setShowNameInputs(true);
				setInput1Value(savedValue1);
				setInput2Value(savedValue2);
				break;
			case "email":
				setShowEmailInputs(true);
				setInput3Value(savedValue3);
				break;
		
			case "dob":
				setShowDOBInputs(true);
				setSavedValue5(savedValue5);
				break;
			default:
				break;
		}
	};

	const handleInputChange1 = (e) => {
		setInput1Value(e.target.value);
	};

	const handleInputChange2 = (e) => {
		setInput2Value(e.target.value);
	};

	const handleInputChange3 = (e) => {
		setInput3Value(e.target.value);
	};



	const handleInputPasswordChange = (e) => {
		setInputPasswordValue(e.target.value);
	};

	const handleSaveClick = async (field) => {
		switch (field) {
			case "name":
				setShowNameInputs(!showNameInputs);
				setSavedValue1(input1Value);
				setSavedValue2(input2Value);
				await handleUpdateUserData({ firstName: input1Value, lastName: input2Value });
				break;
			case "email":
				setShowEmailInputs(!showEmailInputs);
				setSavedValue3(input3Value);
				await handleUpdateUserData({ email: input3Value });
				break;
			case "password":
				setSavedPasswordValue(inputPasswordValue);
				break;
			case "dob":
				setShowDOBInputs(!showDOBInputs);
				setSavedValue5(`${day}/${month}/${year}`);
				await handleUpdateUserData({ dob: `${day}/${month}/${year}` });
				break;
			default:
				break;
		}
		setShowInputs(false);
	};
	
	const handleDeleteClick = async (field) => {
		switch (field) {
			case "name":
				setInput1Value("");
				setInput2Value("");
				setSavedValue1("");
				setSavedValue2("");
				break;
			case "email":
				setInput3Value("");
				setSavedValue3("");
				break;
			case "password":
				setInputPasswordValue("");
				setSavedPasswordValue("");
				break;
			case "dob":
				setDay("");
				setMonth("");
				setYear("");
				setSavedValue5("");
				break;
			default:
				break;
		}
		setShowInputs(false);
		await handleDeleteUserData();
	};
	

	const days = Array.from({ length: 31 }, (_, index) => index + 1);
	const months = Array.from({ length: 12 }, (_, index) => index + 1);
	const years = Array.from({ length: 80 }, (_, index) => 2022 - index);

	return (
		<div className="container mx-auto ">
			<h1 className="flex m-4 text-4xl font-bold justify-normal">
				Personal details
			</h1>
			<p className="ml-4 text-xl">
				Update your information and find out how it&apos;s used.
			</p>
			<table className="m-5 table-auto">
				<tbody className="w-full">
					<tr>
						<td>
							<p className="inline text-xl">Name</p>
						</td>
						{showNameInputs ? (
							<>
								<td>
									<label
										htmlFor=""
										className="m-2 text-lg font-bold "
									>
										First Name:
									</label>
									<input
										type="text"
										className="inline ml-2 border border-blue-600 rounded h-9"
										value={input1Value}
										onChange={handleInputChange1}
									/>

									<label
										htmlFor=""
										className="m-2 text-lg font-bold "
									>
										Last Name:
									</label>
									<input
										type="text"
										className="inline ml-2 border border-blue-600 rounded h-9"
										value={input2Value}
										onChange={handleInputChange2}
									/>
								</td>
								<td>
									<button
										className="w-20 bg-blue-500 rounded-md h-9 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-violet-300 ml-80"
										onClick={() => handleSaveClick("name")}
									>
										Save
									</button>
								</td>
							</>
						) : (
							<>
								<td>
									<p className="inline">{savedValue1}</p>
									<p className="inline">{savedValue2}</p>
								</td>
								<td>
									<button
										className="w-20 bg-blue-500 rounded-md h-9 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-violet-300 ml-80"
										onClick={() => handleEditClick("name")}
									>
										Edit
									</button>

									{savedValue1 && savedValue2 && (
										<button
											className="w-20 bg-blue-500 rounded-md h-9 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-violet-300 ml-80"
											onClick={() =>
												handleDeleteClick("name")
											}
										>
											Delete
										</button>
									)}
								</td>
							</>
						)}
					</tr>
					<div className="w-full h-1 m-7 "></div>
			
					<tr>
						<td>
							<p className="inline mr-2 text-xl">Email Address</p>
						</td>
						{showEmailInputs ? (
							<>
								<td className="flex flex-col">
									<label
										htmlFor=""
										className="m-2 text-lg font-bold "
									>
										Email
									</label>
									<input
										type="email"
										className="inline ml-2 border border-blue-600 rounded h-9 w-72"
										value={input3Value}
										onChange={handleInputChange3}
									/>
								</td>
								<td>
									<button
										className="w-20 bg-blue-500 rounded-md h-9 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-violet-300 ml-80"
										onClick={() =>
											handleSaveClick("email")
										}
									>
										Save
									</button>
								</td>
							</>
						) : (
							<>
								<td>
									<p className="inline">{savedValue3}</p>
								</td>
								<td>
									<button
										className="w-20 bg-blue-500 rounded-md h-9 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-violet-300 ml-80"
										onClick={() =>
											handleEditClick("email")
										}
									>
										Edit
									</button>
									{savedValue3 && (
										<button
											className="w-20 bg-blue-500 rounded-md h-9 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-violet-300 ml-80"
											onClick={() =>
												handleDeleteClick("email")
											}
										>
											Delete
										</button>
									)}
								</td>
							</>
						)}
					</tr>
					<div className="w-full h-1 m-7 "></div>
                    
                    <tr>
    <td>
        <p className="inline text-xl">Password</p>
    </td>
    {showInputs ? (
    <>
        <td className="flex flex-col">
            <label htmlFor="" className="m-2 text-lg font-bold ">
                Password
            </label>
            <input
                type="password"
                className="inline ml-2 border border-blue-600 rounded h-9 w-72"
                value={inputPasswordValue}
                onChange={handleInputPasswordChange}
            />
        </td>
        <td>
            <button
                className="w-20 bg-blue-500 rounded-md h-9 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-violet-300 ml-80"
                onClick={() => handleSaveClick("password")}
            >
                Save
            </button>
        </td>
    </>
) : (
    <>
        <td>
            <p className="inline">{savedPasswordValue}</p>
        </td>
        <td>
        <button
    className="w-20 bg-blue-500 rounded-md h-9 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-violet-300 ml-80"
    onClick={() => {
        handleEditClick("password");
        setShowInputs(true);
    }}
>
    Edit
</button>
            {savedPasswordValue && (
                <button
                    className="w-20 bg-blue-500 rounded-md h-9 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-violet-300 ml-80"
                    onClick={() => handleDeleteClick("password")}
                >
                    Delete
                </button>
            )}
        </td>
    </>
)}


</tr>
<div className="w-full h-1 m-7"></div>


					<tr>
						<td>
							<p className="inline text-xl">Date of birth</p>
						</td>
						{showDOBInputs ? (
							<>
								<td className="flex flex-row">
									<select
										className="h-8"
										value={day}
										onChange={(e) => setDay(e.target.value)}
									>
										<option value="">Day</option>
										{days.map((day) => (
											<option key={day} value={day}>
												{day}
											</option>
										))}
									</select>
									<select
										value={month}
										onChange={(e) =>
											setMonth(e.target.value)
										}
									>
										<option value="">Month</option>
										{months.map((month) => (
											<option key={month} value={month}>
												{month}
											</option>
										))}
									</select>
									<select
										value={year}
										onChange={(e) =>
											setYear(e.target.value)
										}
									>
										<option value="">Year</option>
										{years.map((year) => (
											<option key={year} value={year}>
												{year}
											</option>
										))}
									</select>
								</td>
								<td>
									<button
										className="w-20 bg-blue-500 rounded-md h-9 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-violet-300 ml-80"
										onClick={() => handleSaveClick("dob")}
									>
										Save
									</button>
								</td>
							</>
						) : (
							<>
								<td>
									<p className="inline">{savedValue5}</p>
								</td>
								<td>
									<button
										className="w-20 bg-blue-500 rounded-md h-9 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-violet-300 ml-80"
										onClick={() => handleEditClick("dob")}
									>
										Edit
									</button>
									{savedValue5 && (
										<button
											className="w-20 bg-blue-500 rounded-md h-9 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-violet-300 ml-80"
											onClick={() =>
												handleDeleteClick("dob")
											}
										>
											Delete
										</button>
									)}
								</td>
							</>
						)}
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default HomeEdit;
