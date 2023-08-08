export default function Footer({ cookieStands }) {
  const numberOfLocations = cookieStands ? cookieStands.length : 4;
  return (
    <footer className="footer" style={{ fontFamily: 'Arial'}}>
      <p>{numberOfLocations} Locations World Wide</p>
    </footer>
  );
}