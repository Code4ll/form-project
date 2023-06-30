type InputTextProps = {
	nameId: string;
	onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
	inputValue: string;
	placeholderValue: string;
	labelValue: string;
};

function InputText({
	nameId,
	onChangeValue,
	inputValue,
	placeholderValue,
	labelValue,
}: InputTextProps) {
	return (
		<div>
			<label
				htmlFor={nameId}
				className="border-b-2 border-primary stroke-primary flex gap-4 px-1 py-2 items-center focus-within:border-primary duration-150 focus-within:stroke-primary placeholder-shown:border-gray-400"
			>
				{labelValue}
				<input
					id={nameId}
					name={nameId}
					type="text"
					onChange={onChangeValue}
					value={inputValue}
					placeholder={placeholderValue}
					required
				/>

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
			</label>
		</div>
	);
}

export default InputText;
