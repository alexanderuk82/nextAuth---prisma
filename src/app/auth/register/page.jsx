"use client";

import { useForm } from "react-hook-form";

const RegisterPage = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = handleSubmit((data) => {
		console.log(data);
	});
	return (
		<div className="h-[calc(100vh-7rem)] flex justify-center items-center">
			<form onSubmit={onSubmit} className="w-1/3">
				<h1 className="font-medium text-4xl text-cyan-100 text-center mb-9">
					Sign user
				</h1>
				<label className="text-slate-200 pb-2 block text-sm" htmlFor="name">
					Username
				</label>
				<input
					id="name"
					className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
					type="text"
					{...register("name", {
						required: true,
						maxLength: 20,
					})}
				/>
				{errors.name && (
					<div className="text-red-500 text-sm mb-2">
						{errors.name.type === "required" && "Username is required"}
						{errors.name.type === "maxLength" && "Max length is 20 characters"}
					</div>
				)}
				<label className="text-slate-200 pb-2 block text-sm" htmlFor="email">
					Email address
				</label>
				<input
					id="email"
					className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
					type="text"
					{...register("email", {
						required: true,
					})}
				/>
				{errors.email && (
					<div className="text-red-500 text-sm mb-2">
						{errors.email.type === "required" && "Email is required"}
					</div>
				)}

				<label className="text-slate-200 pb-2 block text-sm" htmlFor="password">
					Password
				</label>
				<input
					id="password"
					className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
					type="password"
					{...register("password", {
						required: true,
					})}
				/>
				{errors.password && (
					<div className="text-red-500 text-sm mb-2">
						{errors.password.type === "required" && "Password is required"}
					</div>
				)}
				<label
					className="text-slate-200 pb-2 block text-sm"
					htmlFor="confirmation"
				>
					Password Confirmation
				</label>
				<input
					id="confirmation"
					className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
					type="password"
					{...register("password_confirmation", {
						required: true,

						validate: (value) => {
							return value === watch("password");
						},
					})}
				/>
				{errors.password_confirmation && (
					<div className="text-red-500 text-sm mb-2">
						{errors.password_confirmation.type === "required" &&
							"Password confirmation is required"}
						{errors.password_confirmation.type === "validate" &&
							"Password confirmation must match password"}
					</div>
				)}
				<input
					className="p-3 rounded block mb-2 bg-teal-500 text-slate-900 font-semibold w-full hover:opacity-95 mt-5 transition-all cursor-pointer"
					type="submit"
					value="Submit"
				/>
			</form>
		</div>
	);
};

export default RegisterPage;
