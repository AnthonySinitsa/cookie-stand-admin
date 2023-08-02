import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <h1 className="text-4xl">Cookie Stand Admin</h1>
      <Link href="/overview">OverView</Link>
    </header>
  );
}