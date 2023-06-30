type InputPhoneNumberProps = {
	nameId: string;
	onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
	phoneValue: string;
	labelValue: string;
  placeHolderValue: string
};

function formatPhoneNumber(phoneNumber: string) {
	// Remove all non-digit characters from the phone number
	const cleaned = phoneNumber.replace(/\D/g, "");

	// Apply the desired phone number format
	const formatted = cleaned.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");

	return formatted;
}

const phoneNumber = "1234567890";
const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
console.log(formattedPhoneNumber); // Output: (123) 456-7890

function InputPhoneNumber({
	nameId,
	onChangeValue,
	phoneValue,
	labelValue,
  placeHolderValue
}: InputPhoneNumberProps) {
	return (
		<label
			htmlFor={nameId}
			className="border-b-2 border-primary stroke-primary flex gap-4 px-1 py-2 items-center focus-within:border-primary duration-150 focus-within:stroke-primary placeholder-shown:border-gray-400"
		>
			{labelValue}
			<svg
				width="22"
				height="18"
				viewBox="0 0 18 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1 17C1 14 5 14 7 12C8 11 5 11 5 6C5 2.667 6.333 1 9 1C11.667 1 13 2.667 13 6C13 11 10 11 11 12C13 14 17 14 17 17"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>

			<input
				id={nameId}
				name={nameId}
				type="tel"
				className="peer focus:outline-none w-full font-medium placeholder:font-normal capitalize"
				onChange={onChangeValue}
				value={phoneValue}
				placeholder={placeHolderValue}
				required
			></input>
		</label>
	);
}

export default InputPhoneNumber