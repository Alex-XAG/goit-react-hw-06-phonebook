import { useDispatch } from 'react-redux';
import { logIn } from 'study/redux/userSlice/userSlice';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(logIn(form.elements.login.value));

    form.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="login" />
      <button type="submit">Log in</button>
    </form>
  );
};
