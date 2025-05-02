import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "../../assets/css/module.module.css";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("送信データ:", data);
    alert("お問い合わせを受け付けました。");
  };

  return (
    <form className={styles.contactFormContainer} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.heading}>お問い合わせ</h2>

      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>名前</label>
        <input
          id="name"
          {...register("name", { required: "名前は必須です。" })}
          className={styles.input}
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>メールアドレス</label>
        <input
          id="email"
          {...register("email", {
            required: "メールアドレスは必須です。",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "メールアドレスの形式が正しくありません。",
            },
          })}
          className={styles.input}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>お問い合わせ内容</label>
        <textarea
          id="message"
          rows={5}
          {...register("message", { required: "お問い合わせ内容は必須です。" })}
          className={styles.textarea}
        />
        {errors.message && <p className={styles.error}>{errors.message.message}</p>}
      </div>

      <button type="submit" className={styles.submitButton}>送信</button>
    </form>
  );
};

export default ContactForm;