import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from 'study/redux/store';

export const Layout = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.myValue);
  return (
    <div>
      <button onClick={() => dispatch(decrement(100))}>decrement</button>
      {value}
      <button onClick={() => dispatch(increment(100))}>increment</button>
    </div>
  );
};
