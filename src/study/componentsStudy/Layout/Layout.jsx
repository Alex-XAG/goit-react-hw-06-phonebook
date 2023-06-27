// import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
// import { increment, decrement } from 'study/redux/myValueSlice/myValueSlice';

export const Layout = () => {
  // const dispatch = useDispatch();
  // const value = useSelector(state => state.myValue);
  return (
    <div>
      <nav>
        <Link to="login">Log in</Link>
      </nav>
      <Outlet />
      {/* <button onClick={() => dispatch(decrement(100))}>decrement</button>
      {value}
      <button onClick={() => dispatch(increment(100))}>increment</button> */}
    </div>
  );
};
