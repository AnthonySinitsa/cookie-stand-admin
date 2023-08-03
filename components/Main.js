import React, { useState } from 'react';

import CreateForm from '@/components/CreateForm';
import ReportTable from '@/components/ReportTable';


export default function Main({ locations }) {
  const [cookieStands, setCookieStands] = useState([]);

  const handleLocationCreate = (newLocation) => {
    setCookieStands([...cookieStands, newLocation]);
    locations = cookieStands.length + 1;
  };

  return (
    <div className="main">
      <CreateForm onLocationCreate={handleLocationCreate} />
      {cookieStands.length > 0 ? (
        <ReportTable cookieStands={cookieStands} />
      ) : (
        <p>No Cookie Stands Available</p>
      )}
    </div>
  );
}
