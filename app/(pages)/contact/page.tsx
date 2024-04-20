"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const page = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data: any) => console.log(data);

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				duration: 1,
			}}
			className="mt-10 bg-[#faedeb] py-20"
		>
			<div className="text-center">
				<h1 className="font-bold text-4xl uppercase ">Contact</h1>
			</div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className=" bg-white flex flex-col mx-auto items-center p-12 max-w-[800px] mt-10 "
			>
				<div className="flex flex-col md:flex-row w-full gap-0 md:gap-4 items-baseline">
					{errors.firstName && errors.firstName.type === "required" && (
						<div className="text-red-700 font-bold">Required</div>
					)}
					<input
						type="text"
						placeholder="First Name"
						className=" w-full md:w-1/2 outline-none p-2 mb-8 border-[#dddddd] border-[1px]"
						{...register("firstName", {
							required: true,
						})}
					/>
					{errors.lastName && errors.lastName.type === "required" && (
						<div className="text-red-700 font-bold">Required</div>
					)}
					<input
						type="text"
						placeholder="Last Name"
						className=" w-full md:w-1/2 outline-none p-2 mb-8 border-[#dddddd] border-[1px]"
						{...register("lastName", {
							required: true,
						})}
					/>
				</div>
				{errors.email && errors.email.type === "required" && (
					<p className="text-red-700 font-bold w-full">Email is required.</p>
				)}
				{errors.email && errors.email.type === "pattern" && (
					<p className="text-red-700 font-bold w-full">Email is not valid.</p>
				)}
				<input
					type="text"
					placeholder="Email"
					className=" w-full outline-none p-2 mb-8 border-[#dddddd] border-[1px]"
					{...register("email", {
						required: true,
						pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
					})}
				/>
				{errors.message && errors.message.type === "required" && (
					<p className="text-red-700 font-bold w-full">Required.</p>
				)}
				<textarea
					placeholder="Message..."
					className="w-full border-[#dddddd] border-[1px] mb-8 p-2 h-40 outline-none "
					{...register("message", {
						required: true,
					})}
				></textarea>
				<button className="w-full bg-black text-white text-2xl font-[600] p-2">
					Send
				</button>
			</form>
		</motion.section>
	);
};

export default page;
