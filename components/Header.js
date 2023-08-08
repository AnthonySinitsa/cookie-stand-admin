import React from 'react';

export default function Header() {
  return (
    <header className="relative flex items-center justify-between bg-green-500 p-7 text-black-80">
      <h1 className="text-5xl">Cookie Stand Admin</h1>
      <div className="absolute top-0 left-0 w-full h-2 bg-black"></div>
    </header>
  );
}