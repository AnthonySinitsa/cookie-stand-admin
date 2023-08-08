import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <h1 className="text-3xl" style={{ fontFamily: 'Arial' }}>Cookie Stand Admin</h1>
      <a href="/overview"><button className="overviewButton" type="button">Overview</button></a>
    </header>
  );
}