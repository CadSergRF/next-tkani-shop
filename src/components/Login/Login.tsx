"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import styles from "./Login.module.css";
import { REGEX_EMAIL } from "@/lib/constants/constants";
import { userLoginFetch } from "@/utils/fetch.utils";
import { TFormValuesLogin } from "@/Types/TForms";
import { redirect } from "next/navigation";
import clsx from "clsx";

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		setError,
		clearErrors,
		reset,
	} = useForm<TFormValuesLogin>({
		mode: "onBlur",
	});

	const handleClearErrors = (err: string) => {
		if (err == "loginEmail" || err == "loginPassword") {
			if (errors?.root?.serverError) {
				clearErrors([err, "serverError"]);
			}
			clearErrors(err);
		}
	};

	const onSubmit: SubmitHandler<TFormValuesLogin> = async (data) => {
		try {
			const loginFetch = await userLoginFetch(data);
			// Если ошибка устанавливаем свой error
			if (!loginFetch) {
				setError("root.serverError", {
					message: "Ошибка данных LoginFetch",
				});
			}

			reset();
			redirect("/");
		} catch (err) {
			console.log(err);
			setError("root.serverError", {
				message: `${err}`,
			});
		}
	};

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
						// onClick={() => clearErrors("loginEmail")}
						onClick={() => handleClearErrors("loginEmail")}
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
						<div className={styles.login_error}>
							<span className={styles.login_error__text}>
								{errors.loginEmail.message}
							</span>
						</div>
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
						// onClick={() => clearErrors("loginPassword")}
						onClick={() => handleClearErrors("loginEmail")}
						{...register("loginPassword", {
							required: "Поле должно быть заполнено.",
						})}
					/>
					{errors.loginPassword && (
						<div className={styles.login_error}>
							<span className={styles.login_error__text}>
								{errors.loginPassword.message}
							</span>
						</div>
					)}
				</div>
				<button
					className={styles.login__button}
					disabled={!isValid}
				>
					Войти
					{errors?.root?.serverError?.message && (
						<div className={clsx(styles.login_error, styles.login_error__btn)}>
							<span className={styles.login_error__text}>
								{errors.root.serverError.message}
							</span>
						</div>
					)}
				</button>
			</form>
		</section>
	);
};

export { Login };
