import { SubmitHandler, useForm } from 'react-hook-form';
import styles from "../../assets/css/module.module.css";
import { mockUsers } from '../../mocks/user';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface IFormInput {
  email: string;
  password: string;
}

const Form: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const [loginUser, setLoginUser] = useState<string | null>(null);
  const [loginError, setLoginError] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const foundUser = mockUsers.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (foundUser) {
      const dummyToken = Math.random().toString(36).substring(2);
      localStorage.setItem('authToken', dummyToken);
      setLoginUser(foundUser.name);
      setLoginError("");
    } else {
      setLoginUser(null);
      setLoginError("メールアドレスまたはパスワードが間違っています。");
    }
  };

  const { login } = useAuth();

  const handleLogin = () => {
    login();
  };

  if (loginUser) {
    navigate("/");
  }

  return (
    <div className={styles.formFrame}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <p>ログインしてください。</p>
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

        <div>
          <label htmlFor="password" className={styles.label}>パスワード:</label>
          <input
            id="password"
            type="password"
            className={styles.input}
            {...register('password', { required: 'パスワードは必須です' })}
          />
          {errors.password && <p className={styles.errorMessage}>{errors.password.message}</p>}
        </div>

        <button type="submit" className={styles.button} onClick={handleLogin}>ログイン</button>
        {loginError && <p className={styles.errorMessage}>{loginError}</p>}
      </form>
    </div>
  );
};

export default Form;
