import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';

function Dashboard() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setUser({ name: 'John Doe' }));
  };

  return (
    <div>
      <h2>Welcome {user ? user.name : 'Guest'}</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Dashboard;
