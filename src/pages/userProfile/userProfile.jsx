
import React, { useState, useEffect, useCallback } from 'react';
import { deleteUserData, getUserData, updateUserData } from '../../services/user';


const UserProfile = () => {
 	const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

	const [showInputs, setShowInputs] = useState(false);
	const [showNameInputs, setShowNameInputs] = useState(false);
	const [showEmailInputs, setShowEmailInputs] = useState(false);
	const [showDOBInputs, setShowDOBInputs] = useState(false);

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [inputPasswordValue, setInputPasswordValue] = useState("");
	
	const [newFirstName, setnewFirstName] = useState("");
	const [newLastName, setNewLastName] = useState("");
	const [newEmail, setNewEmail] = useState("");

	const [birthDate, setBirthDate] = useState("");
	const [savedPasswordValue, setSavedPasswordValue] = useState("");

	const [day, setDay] = useState("");
	const [month, setMonth] = useState("");
	const [year, setYear] = useState("");

	const userId = localStorage.getItem('userId')

	const fetchUserData = async () => {
		try {
			const userData = await getUserData();
			setUser(userData);
			userData.firstName ? setFirstName(userData.firstName) : setFirstName("")
			userData.lastName ? setLastName(userData.lastName) : setLastName("")
			userData.dob ?setBirthDate(userData.dob) : setBirthDate("")
			userData.email ?setEmail(userData.email) : setEmail("")
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};
	
    useEffect(() => {
        fetchUserData();
    },[]);


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


	const handleEditClick = (field) => {
		switch (field) {
			case "name":
				setShowNameInputs(true);
				setFirstName(newFirstName);
				setLastName(newLastName);
				break;
			case "email":
				setShowEmailInputs(true);
				setEmail(newEmail);
				break;
		
			case "dob":
				setShowDOBInputs(true);
				setBirthDate(birthDate);
				break;
			default:
				break;
		}
	};

	const handleFirstNameInput = (e) => {
		setFirstName(e.target.value);
	};

	const handleLastNameInput = (e) => {
		setLastName(e.target.value);
	};

	const handleEmailInput = (e) => {
		setEmail(e.target.value);
	};

	const handleInputPasswordChange = (e) => {
		setInputPasswordValue(e.target.value);
	};

	const handleSaveClick = async (field) => {
		switch (field) {
			case "name":
				setShowNameInputs(!showNameInputs);
				setnewFirstName(firstName);
				setNewLastName(lastName);
				await handleUpdateUserData({ firstName: firstName, lastName: lastName });
				break;
			case "email":
				setShowEmailInputs(!showEmailInputs);
				setNewEmail(email);
				await handleUpdateUserData({ email: email });
				break;
			case "password":
				setSavedPasswordValue(inputPasswordValue);
				break;
			case "dob":
				setShowDOBInputs(!showDOBInputs);
				setBirthDate(`${day}/${month}/${year}`);
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
				setFirstName("");
				setLastName("");
				setnewFirstName("");
				setNewLastName("");
				break;
			case "email":
				setEmail("");
				setNewEmail("");
				break;
			case "password":
				setInputPasswordValue("");
				setSavedPasswordValue("");
				break;
			case "dob":
				setDay("");
				setMonth("");
				setYear("");
				setBirthDate("");
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
										value={firstName}
										onChange={handleFirstNameInput}
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
										value={lastName}
										onChange={handleLastNameInput}
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
									<p>{`${firstName} ${lastName}`}</p>
								</td>
								<td>
									<button
										className="w-20 bg-blue-500 rounded-md h-9 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-violet-300 ml-80"
										onClick={() => handleEditClick("name")}
									>
										Edit
									</button>

									{newFirstName && newLastName && (
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
										value={email}
										onChange={handleEmailInput}
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
									<p className="inline">{email}</p>
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
									{newEmail && (
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
									<p className="inline">{birthDate}</p>
								</td>
								<td>
									<button
										className="w-20 bg-blue-500 rounded-md h-9 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-violet-300 ml-80"
										onClick={() => handleEditClick("dob")}
									>
										Edit
									</button>
									{birthDate && (
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

export default UserProfile;
