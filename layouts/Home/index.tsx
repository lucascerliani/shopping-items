import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectValue } from '../../slices/counterSlice';

const HomeLayout = () => {
  const count = useSelector(selectValue);

  const dispatch = useDispatch();

  return (
    <>
      <h1>The value of count is {count}</h1>
      <button
        className="w-full h-10 bg-green-400/50"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="w-full h-10 bg-red-400/50"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </>
  );
};

export default HomeLayout;
