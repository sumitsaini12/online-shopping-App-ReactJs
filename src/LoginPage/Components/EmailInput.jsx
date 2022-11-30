import React, { memo } from 'react';
import Input from './Input';
import { HiOutlineMail } from 'react-icons/hi';

function EmailInput({ name, value, onBlur, onChange, error, touched, ...rest }) {

	let errorClassEmail;

	if (touched && error) {
		errorClassEmail = 'border-red-500';
	};


	return (
		<div>
			<div
				className={
					`border-b-2  py-2 px-1 border-gray-500 ` + errorClassEmail
				}
			>
				<div className="relative flex items-center space-x-4">
					<HiOutlineMail className="w-6 h-6" />
					<Input
						value={value}
						onBlur={onBlur}
						onChange={onChange}
						name={name}
						touched={touched}
						{...rest}
					/>
				</div>
			</div>
			{touched &&
				error && <div className="text-red-500">{error}</div>}
		</div>
	);
}

export default memo(EmailInput)
