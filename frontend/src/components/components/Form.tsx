import { SubmitHandler, useForm } from 'react-hook-form';
import styles from "../../assets/css/module.module.css";

interface IFormInput {
  name: string;
  email: string;
}

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.formFrame}>
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <label htmlFor="name" className={styles.label}>名前:</label>
        <input
          id="name"
          className={styles.input}
          {...register('name', { required: '名前は必須です' })}
        />
        {errors.name && <p className={styles.errorMessage}>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className={styles.label}>メール:</label>
        <input
          id="email"
          className={styles.input}
          {...register('email', { 
            required: 'メールは必須です', 
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: '無効なメールアドレスです'
            }
          })}
        />
        {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
      </div>

      <button type="submit" className={styles.button}>送信</button>
    </form>
    </div>
  );
}

export default Form;
