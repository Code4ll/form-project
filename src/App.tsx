import React, { ChangeEvent, useState } from "react";
import InputText from "./components/InputText";
import InputDate from "./components/InputDate";
import Country from "./components/Country";
import InputPhoneNumber from "./components/InputPhoneNumber";
import Password from "./components/Password";

function App() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [stateCode, setStateCode] = useState("");
	const [dob, setDob] = useState("");
	const [country, setCountry] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [postalCode, setPostalCode] = useState("");
	const [password, setPassword] = useState("");


	function UpdateFirstName(event: ChangeEvent<HTMLInputElement>) {
		const newFirstName = event.target.value;
		setFirstName(newFirstName);
		return newFirstName;
	}

	function UpdateLastName(event: ChangeEvent<HTMLInputElement>) {
		const newLastName = event.target.value;
		setLastName(newLastName);
		return newLastName;
	}

	function UpdateDOB(event: ChangeEvent<HTMLInputElement>) {
		const newDOB = event.target.value;
		setDob(newDOB);
		return newDOB;
	}

	function UpdateAddress(event: ChangeEvent<HTMLInputElement>) {
		const newAddress = event.target.value;
		setAddress(newAddress);
		return newAddress;
	}

	function UpdateCity(event: ChangeEvent<HTMLInputElement>) {
		const newCity = event.target.value;
		setCity(newCity);
		return newCity;
	}

	function UpdateStateCode(event: ChangeEvent<HTMLInputElement>) {
		const newStateCode = event.target.value;
		setStateCode(newStateCode);
		return newStateCode;
	}

	function UpdateCountry(event: React.ChangeEvent<HTMLSelectElement>) {
		const newCountry = event.target.value;
		setCountry(newCountry);
		return newCountry;
	}

	function UpdatePhoneNumber(event: React.ChangeEvent<HTMLInputElement>) {
		const newPhoneNumber = event.target.value;
		setPhoneNumber(newPhoneNumber);
		return newPhoneNumber;
	}

	function UpdateEmail(event: ChangeEvent<HTMLInputElement>) {
		const newEmail = event.target.value;
		setEmail(newEmail);
		return newEmail;
	}

	function UpdatePostalCode(event: ChangeEvent<HTMLInputElement>) {
		const newPostalCode = event.target.value;
		setPostalCode(newPostalCode);
		return newPostalCode;
	}

	function UpdatePassword(event: ChangeEvent<HTMLInputElement>) {
		const newPassword = event.target.value;
		setPassword(newPassword);
		return newPassword;
	}

	function handleButtonClick(event: { preventDefault: () => void }) {
		event.preventDefault();
		alert(
			"Hello " +
				firstName +
				" " +
				lastName +
				", You're " +
				"scammed! LOL!"
		);
	}

	const submitHandler = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
	};

  const jsonBody: string = JSON.stringify({
    firstName: firstName,
    lastName: lastName,
    dob: dob,
    address: address,
    city: city,
    stateCode: stateCode,
    postalCode: postalCode,
    country: country,
    cellNumber: phoneNumber,
    email: email,
    password: password,
  });

	return (
		<form onSubmit={submitHandler} className="text-dark space-y-4 bg-white">
			<InputText
				nameId={"firstName"}
				onChangeValue={UpdateFirstName}
				inputValue={firstName}
				placeholderValue={"Enter your first name"}
				labelValue={""}
			/>
			<InputText
				nameId={"lastName"}
				onChangeValue={UpdateLastName}
				inputValue={lastName}
				placeholderValue={"Enter your last name"}
				labelValue={""}
			/>
			<InputDate
				nameId={"dob"}
				onChangeValue={UpdateDOB}
				inputDateValue={dob}
				placeholderValue={"Enter your date of birth"}
				labelValue={""}
			/>
			<InputText
				nameId={"address"}
				onChangeValue={UpdateAddress}
				inputValue={address}
				placeholderValue={"Enter your address"}
				labelValue={""}
			/>
			<InputText
				nameId={"city"}
				onChangeValue={UpdateCity}
				inputValue={city}
				placeholderValue={"Enter your city"}
				labelValue={""}
			/>
			<InputText
				nameId={"stateCode"}
				onChangeValue={UpdateStateCode}
				inputValue={stateCode}
				placeholderValue={"Enter your state code"}
				labelValue={""}
			/>
			<InputText
				nameId={"postalCode"}
				onChangeValue={UpdatePostalCode}
				inputValue={postalCode}
				placeholderValue={"Enter your postal code"}
				labelValue={""}
			/>
			<Country
				nameId={"country"}
				onChangeValue={UpdateCountry}
				CountryValue={country}
				placeholderValue={"Select your country"}
				labelValue={""}
			/>
			<InputPhoneNumber
				nameId={"phoneNumber"}
				onChangeValue={UpdatePhoneNumber}
				phoneValue={phoneNumber}
				placeHolderValue={"Enter your number"}
				labelValue={""}
			/>
			<InputText
				nameId={"email"}
				onChangeValue={UpdateEmail}
				inputValue={email}
				placeholderValue={"Enter your email"}
				labelValue={""}
			/>
			<Password
				nameId={"password"}
				onChangeValue={UpdatePassword}
				PasswordValue={password}
				placeholderValue={"Enter your email"}
				labelValue={""}
			/>
			<button onClick={handleButtonClick}>
				Click Here to Get Scammed
			</button>
		</form>
	);
}

export default App;
