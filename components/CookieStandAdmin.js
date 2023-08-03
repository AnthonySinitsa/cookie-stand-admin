import Head from '@/components/Head';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';

export default function CookieStandAdmin({ locations }) {
  console.log(locations)
  return (
    <div>
      <Head />
      <Header />
      <Main locations={locations} />
      <Footer locations={locations} cookieStands={locations.length} />
    </div>
  );
}

// import React, { useState } from 'react'; // Import useState from 'react'

// import Head from '@/components/Head';
// import Header from '@/components/Header';
// import Main from '@/components/Main';
// import Footer from '@/components/Footer';

// export default function CookieStandAdmin() {
//   // Keep track of the cookie stands using state
//   const [cookieStands, setCookieStands] = useState([]);

//   // Add this function to update the locations (cookie stands) count
//   const updateLocationsCount = (newLocationCount) => {
//     setCookieStands([...cookieStands, newLocationCount]);
//   };

//   return (
//     <div>
//       <Head />
//       <Header />
//       {/* Pass the state and function as props */}
//       <Main cookieStands={cookieStands} onLocationCreate={updateLocationsCount} />
//       <Footer locations={cookieStands.length} />
//     </div>
//   );
// }
