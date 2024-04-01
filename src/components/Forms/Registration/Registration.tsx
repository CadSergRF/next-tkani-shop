"use client";

import { useRouter } from "next/navigation";

import clsx from "clsx";
import { SubmitHandler, useForm } from "react-hook-form";

import { userRegistrationFetch } from "@/utils/fetch.utils";

import { REGEX_EMAIL, REGEX_PHONE } from "@/lib/constants/constants";

import { TFormValuesRegistration } from "@/Types/TForms";

import styles from "./Registration.module.css";
import { Loader } from "@/components/ui-kit/Loader/Loader";
import { Success } from "@/components/ui-kit/Success/Success";
import Link from "next/link";

const Registration = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
		setError,
		clearErrors,
		reset,
	} = useForm<TFormValuesRegistration>({
		mode: "onBlur",
	});

	const onSubmit: SubmitHandler<TFormValuesRegistration> = async (data) => {
		try {
			const registrationFetch = await userRegistrationFetch(data);
			// Если ошибка устанавливаем свой error
			if (!registrationFetch) {
				setError("registrationSubmit", {
					message: "Ошибка данных registrationFetch",
				});
			}
			reset();
			setTimeout(() => {
				router.push("/");
			}, 3000);
		} catch (err) {
			setError("registrationSubmit", {
				message: `${err}`,
			});
		}
	};

	return (
		<section className={styles.registration}>
			<div className={styles.registration__form_wrapper}>
				{/* Форма авторизации */}
				<form
					className={styles.registration_form}
					onSubmit={handleSubmit(onSubmit)}
				>
					<h2 className={styles.registration_title}>Зарегистрироваться</h2>
					{/* Имя */}
					<div className={styles.registration_input__wrapper}>
						<label
							htmlFor="userName"
							className={styles.registration_label}
						>
							Имя
						</label>
						<input
							id="userName"
							type="text"
							className={styles.registration_input}
							disabled={isSubmitting}
							onClick={() =>
								clearErrors(["registrationName", "registrationSubmit"])
							}
							{...register("registrationName", {
								required: "Поле должно быть заполнено.",
								minLength: 3,
								maxLength: 30,
							})}
						/>
						{errors.registrationName && (
							<div className={styles.registration_error}>
								<span className={styles.registration_error__text}>
									{errors.registrationName.message}
								</span>
							</div>
						)}
					</div>
					{/* Фамилия */}
					<div className={styles.registration_input__wrapper}>
						<label
							htmlFor="userSurname"
							className={styles.registration_label}
						>
							Фамилия
						</label>
						<input
							id="userSurname"
							type="text"
							className={styles.registration_input}
							disabled={isSubmitting}
							onClick={() =>
								clearErrors(["registrationSurname", "registrationSubmit"])
							}
							{...register("registrationSurname", {
								required: "Поле должно быть заполнено.",
								minLength: 3,
								maxLength: 30,
							})}
						/>
						{errors.registrationSurname && (
							<div className={styles.registration_error}>
								<span className={styles.registration_error__text}>
									{errors.registrationSurname.message}
								</span>
							</div>
						)}
					</div>
					{/* Телефон */}
					<div className={styles.registration_input__wrapper}>
						<label
							htmlFor="userPhonenumber"
							className={styles.registration_label}
						>
							Телефон
						</label>
						<input
							id="userPhonenumber"
							type="text"
							className={styles.registration_input}
							disabled={isSubmitting}
							onClick={() =>
								clearErrors(["registrationPhonenumber", "registrationSubmit"])
							}
							{...register("registrationPhonenumber", {
								required: "Поле должно быть заполнено.",
								pattern: {
									value: REGEX_PHONE,
									message: "Не верный формат.",
								},
							})}
						/>
						{errors.registrationPhonenumber && (
							<div className={styles.registration_error}>
								<span className={styles.registration_error__text}>
									{errors.registrationPhonenumber.message}
								</span>
							</div>
						)}
					</div>
					{/* E-mail */}
					<div className={styles.registration_input__wrapper}>
						<label
							htmlFor="email"
							className={styles.registration_label}
						>
							E-mail
						</label>
						<input
							id="email"
							type="email"
							className={styles.registration_input}
							disabled={isSubmitting}
							onClick={() =>
								clearErrors(["registrationEmail", "registrationSubmit"])
							}
							{...register("registrationEmail", {
								required: "Поле должно быть заполнено.",
								pattern: {
									value: REGEX_EMAIL,
									message: "Не верный формат.",
								},
							})}
						/>
						{errors.registrationEmail && (
							<div className={styles.registration_error}>
								<span className={styles.registration_error__text}>
									{errors.registrationEmail.message}
								</span>
							</div>
						)}
					</div>
					{/* Пароль */}
					<div className={styles.registration_input__wrapper}>
						<label
							htmlFor="registrationPassword"
							className={styles.registration_label}
						>
							Пароль
						</label>
						<input
							id="registrationPassword"
							type="password"
							className={styles.registration_input}
							disabled={isSubmitting}
							onClick={() =>
								clearErrors(["registrationPassword", "registrationSubmit"])
							}
							{...register("registrationPassword", {
								required: "Поле должно быть заполнено.",
							})}
						/>
						{errors.registrationPassword && (
							<div className={styles.registration_error}>
								<span className={styles.registration_error__text}>
									{errors.registrationPassword.message}
								</span>
							</div>
						)}
					</div>
					{/* Кнопка submit */}
					<div className={styles.registration_submit_wrapper}>
						<input
							type="submit"
							value="Зарегистрироваться"
							className={styles.registration__submit}
							disabled={!isValid || isSubmitting}
							{...register("registrationSubmit")}
						/>
						{errors.registrationSubmit && (
							<div
								className={clsx(
									styles.registration_error,
									styles.registration_error__submit,
								)}
							>
								<span className={styles.registration_error__text}>
									{errors.registrationSubmit.message}
								</span>
							</div>
						)}
					</div>
					<p className={styles.registration__info_registration}>
						или
						<Link
							href="/login"
							className={styles.registration__info_registration_text}
						>
							Войти
						</Link>
					</p>
				</form>
				{/* Модальное окно для отображения preloader запроса и картинки успешной авторизации */}
				<div
					className={clsx([styles.registration__modal], {
						[styles.registration__modal_submit]: isSubmitting,
						[styles.registration__modal_success]: isSubmitSuccessful,
					})}
				>
					{isSubmitting && <Loader />}
					{isSubmitSuccessful && <Success />}
				</div>
			</div>
		</section>
	);
};

export { Registration };
