import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { refreshUser } from './redux/auth/operators';
import { selectIsRefreshing } from './redux/auth/selectors';
import AppRouter from './router';

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? <p>Refreshing user ...</p> : <AppRouter />;
}
