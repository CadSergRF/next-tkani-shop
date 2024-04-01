"use client";

import { useRouter } from "next/navigation";

import clsx from "clsx";
import { SubmitHandler, useForm } from "react-hook-form";

import { userLoginFetch } from "@/utils/fetch.utils";

import { REGEX_EMAIL } from "@/lib/constants/constants";

import { TFormValuesLogin } from "@/Types/TForms";

import styles from "./Login.module.css";
import { Loader } from "@/components/ui-kit/Loader/Loader";
import { Success } from "@/components/ui-kit/Success/Success";
import Link from "next/link";

const Login = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
		setError,
		clearErrors,
		reset,
	} = useForm<TFormValuesLogin>({
		mode: "onBlur",
	});

	const onSubmit: SubmitHandler<TFormValuesLogin> = async (data) => {
		try {
			const loginFetch = await userLoginFetch(data);
			// Если ошибка устанавливаем свой error
			if (!loginFetch) {
				setError("loginSubmit", {
					message: "Ошибка данных LoginFetch",
				});
			}
			reset();
			setTimeout(() => {
				router.push("/");
			}, 3000);
		} catch (err) {
			setError("loginSubmit", {
				message: `${err}`,
			});
		}
	};

	return (
		<section className={styles.login}>
			<div className={styles.login__form_wrapper}>
				{/* Форма авторизации */}
				<form
					className={styles.login_form}
					onSubmit={handleSubmit(onSubmit)}
				>
					<h2 className={styles.login_title}>Войти</h2>
					{/* E-mail */}
					<div className={styles.login_input__wrapper}>
						<label
							htmlFor="email"
							className={styles.login_label}
						>
							E-mail
						</label>
						<input
							id="email"
							type="email"
							className={styles.login_input}
							disabled={isSubmitting}
							onClick={() => clearErrors(["loginEmail", "loginSubmit"])}
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
					{/* Пароль */}
					<div className={styles.login_input__wrapper}>
						<label
							htmlFor="loginPassword"
							className={styles.login_label}
						>
							Пароль
						</label>
						<input
							id="loginPassword"
							type="password"
							className={styles.login_input}
							disabled={isSubmitting}
							onClick={() => clearErrors(["loginPassword", "loginSubmit"])}
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
					{/* Кнопка submit */}
					<div className={styles.login_submit_wrapper}>
						<input
							type="submit"
							value="Войти"
							className={styles.login__submit}
							disabled={!isValid || isSubmitting}
							{...register("loginSubmit")}
						/>
						{errors.loginSubmit && (
							<div
								className={clsx(styles.login_error, styles.login_error__submit)}
							>
								<span className={styles.login_error__text}>
									{errors.loginSubmit.message}
								</span>
							</div>
						)}
					</div>
					<p className={styles.login__info_registration}>
						Или
						<Link
							href="/registration"
							className={styles.login__info_registration_text}
						>
							Зарегистрируйтесь
						</Link>
					</p>
				</form>
				{/* Модальное окно для отображения preloader запроса и картинки успешной авторизации */}
				<div
					className={clsx([styles.login__modal], {
						[styles.login__modal_submit]: isSubmitting,
						[styles.login__modal_success]: isSubmitSuccessful,
					})}
				>
					{isSubmitting && <Loader />}
					{isSubmitSuccessful && <Success />}
				</div>
			</div>
		</section>
	);
};

export { Login };
