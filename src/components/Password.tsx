import { useState } from "react";

type PasswordProps = {
	nameId: string;
	onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
	PasswordValue: string;
	placeholderValue: string;
	labelValue: string;
};

function Password({
	nameId,
	onChangeValue,
	PasswordValue,
	placeholderValue,
	labelValue,
}: PasswordProps) {
	const [passwordShown, setPasswordShown] = useState(false);

	const togglePass = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setPasswordShown(!passwordShown);
	};

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
				type={passwordShown ? "text" : "password"}
				className="peer focus:outline-none w-full font-medium placeholder:font-normal capitalize"
				onChange={onChangeValue}
				value={PasswordValue}
				placeholder={placeholderValue}
				required
			/>
			<button type="button" onClick={togglePass}>
				<svg
					width="22"
					height="19"
					viewBox="0 0 22 19"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="stroke-gray-400"
				>
					<path
						d="M21 9C21 9 18 15 11 15C4 15 1 9 1 9C1 9 4 3 11 3C18 3 21 9 21 9Z"
						strokeOpacity="0.6"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M11 12C12.6569 12 14 10.6569 14 9C14 7.34315 12.6569 6 11 6C9.34315 6 8 7.34315 8 9C8 10.6569 9.34315 12 11 12Z"
						strokeOpacity="0.6"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					{passwordShown ? (
						<path
							d="M2 18L19 1"
							strokeOpacity="0.6"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					) : (
						""
					)}
				</svg>
			</button>
		</label>
	);
}

export default Password;
