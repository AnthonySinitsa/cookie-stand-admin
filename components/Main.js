//USE ME
import CreateForm from '@/components/CreateForm';
import ReportTable from '@/components/ReportTable';
import { useState } from 'react';

export default function Main({ locations }) {
  const [cookieStands, setCookieStands] = useState([]); // State to store the list of cookie stands

  const handleLocationCreate = (newLocation) => {
    setCookieStands([...cookieStands, newLocation]); // Add the new location to the list of cookie stands
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

