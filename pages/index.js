import React, { useState } from 'react';
import CookieStandAdmin from '@/components/CookieStandAdmin';
import LoginForm from '@/components/LoginForm';
import { useAuth } from '@/context/auth';

export default function Home() {
  const { user, login, logout } = useAuth();
  const [cookieStands, setCookieStands] = useState([
    { locationLength: 0 },
  ]);
  const handleLocationCreate = (newLocation) => {
    setCookieStands([...cookieStands, newLocation]);
    // locations = cookieStands.length + 1;
    locationLength = cookieStands.length + 1;
  };
  return (
    <div>
      <LoginForm />
      <CookieStandAdmin locations={cookieStands} onLocationCreate={handleLocationCreate} />
    </div>
  );
}
