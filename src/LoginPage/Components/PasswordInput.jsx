import React, { memo, useState } from 'react';
import Input from './Input';
import {
	HiOutlineLockClosed,
	HiOutlineEye,
	HiOutlineEyeOff
} from 'react-icons/hi';
import FormikHOC from './FormikHOC';

function PasswordInput({ icon, name, value, onBlur, onChange, error, touched, ...rest }) {

	const [showPossword, setShowPossword] = useState(false);

	const onPossword = () => {
		setShowPossword(!showPossword);
	};

	
	let typePossword = 'password';

	if (showPossword === false) {
		typePossword = 'password';
	} else if (showPossword === true) {
		typePossword = 'text';
	};

	let errorClassPassword;

	if (touched && error) {
		errorClassPassword = 'border-red-500';
	}


	return (
		<div>
			<div
				className={
					`border-b-2  py-2 px-1 border-gray-500 ` + errorClassPassword
				}
			>

				<div className="relative flex items-center space-x-4">
					<HiOutlineLockClosed className="w-6 h-6" />
					<Input
						value={value}
						onBlur={onBlur}
						onChange={onChange}
						name={name}
						type={typePossword}
						{...rest}
					/>
					{icon && <button type="button" onClick={onPossword}>
						{!showPossword ? (
							<HiOutlineEyeOff className="w-6 h-6" />
						) : (
							<HiOutlineEye className="w-6 h-6" />
						)}
					</button>}
				</div>
			</div>
			{touched &&
				error && (
					<div className="text-red-500">{error}</div>
				)}
		</div>
	);
}

export const FormikPasswordInput = FormikHOC(PasswordInput);

export default memo(PasswordInput)