// export default function Footer({ locations }) {
//   return (
//     <footer className="footer">
//       <p>{locations} Locations World Wide</p>
//     </footer>
//   );
// }

export default function Footer({ locations, cookieStands }) {
  // const numLocations = locations ? locations.length : 0; // Get the number of locations from the 'locations' prop
  console.log(cookieStands)
  console.log(locations)
  return (
    <footer className="footer">
      <p>{locations.length} Locations World Wide</p>
    </footer>
  );
}

