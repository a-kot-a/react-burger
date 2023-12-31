import React from 'react';
import { useDispatch } from 'Services/store';
import { profileAuthCheckedFetch } from 'Services/Profile/Profile.fetch';

function AuthChecked() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(profileAuthCheckedFetch())
  }, [dispatch]);

  return null;
}

export default AuthChecked;
