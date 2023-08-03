export default function Footer({ locations }) {
  return (
    <footer className="footer">
      <p>{locations} Locations World Wide</p>
    </footer>
  );
}

// export default function Footer({ cookieStands }) {
//   const numberOfLocations = cookieStands ? cookieStands.length : 0;

//   return (
//     <footer className="footer">
//       <p>{numberOfLocations} Locations World Wide</p>
//     </footer>
//   );
// }
