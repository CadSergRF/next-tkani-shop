"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import styles from "./Login.module.css";
import { REGEX_EMAIL } from "@/lib/constants/constants";

type FormValues = {
	loginEmail: string;
	loginPassword: string;
};

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		clearErrors,
		reset,
	} = useForm<FormValues>({
		mode: "onBlur",
	});
	const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

	return (
		<section className={styles.login}>
			<form
				className={styles.login_form}
				onSubmit={handleSubmit(onSubmit)}
			>
				<h2 className={styles.login_title}>Войти</h2>
				<div className={styles.login_input__wrapper}>
					<label
						htmlFor="email"
						className={styles.login_label}
					>
						e-mail
					</label>
					<input
						id="email"
						type="email"
						onClick={() => clearErrors("loginEmail")}
						className={styles.login_input}
						{...register("loginEmail", {
							required: "Поле должно быть заполнено.",
							pattern: {
								value: REGEX_EMAIL,
								message: "Не верный формат.",
							},
						})}
					/>
					{errors.loginEmail && (
						<span className={styles.login_error}>
							{errors.loginEmail.message}
						</span>
					)}
				</div>
				<div className={styles.login_input__wrapper}>
					<label
						htmlFor="loginPassword"
						className={styles.login_label}
					>
						Пароль
					</label>
					<input
						id="loginPassword"
						className={styles.login_input}
						type="password"
						onClick={() => clearErrors("loginPassword")}
						{...register("loginPassword", {
							required: "Поле должно быть заполнено.",
						})}
					/>
					{errors.loginPassword && (
						<span className={styles.login_error}>
							{errors.loginPassword.message}
						</span>
					)}
				</div>
				<button
					className={styles.login__button}
					disabled={!isValid}
				>
					Войти
				</button>
			</form>
		</section>
	);
};

export { Login };
