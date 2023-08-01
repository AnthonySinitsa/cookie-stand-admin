import Head from 'next/head';
import { replies } from '@/data';
import { useState } from "react";
// import { Html } from 'next/document';

export default function Home() {
  const [question, setQuestion] = useState('Ask me anything...');
  const [reply, setReply] = useState("Report Table Coming Soon...");
  function questionAskedHandler(event) {
    event.preventDefault();
    setQuestion(event.target.question.value);
    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    // alert(event.target.question.value);
    // alert(randomReply);
    setReply(randomReply);
  }
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <h1 className="text-4xl">Cookie Stand Admin</h1>
      </header>
      <main className="main">
        {/* <form className="flex w-1/2 p-2 mx-auto my-4 bg-gray-200" onSubmit={questionAskedHandler}>
          <input name="question" className="flex-auto pl-1" />
          <button className="px-1 py-1 bg-gray-400 text-gray-50">Ask</button>
        </form> */}
        {/* Eight Ball */}
        <div className="bigBox">
          <h2 className='createCookie'>Create Cookie Stand</h2>
          <form className='form'>
            <label className='firstLabel' for='location'>Location</label>
            <input className='firstInput' type="text" />
          </form>
          <div className='threeFormButton'>
            <form className='form'>
              <label for='minimum-customer-per-hour'>Minimum Customers per Hour</label>
              <input className='input' type="number" />
            </form>
            <form className='form'>
              <label for='maximum-customer-per-hour'>Maximum Customer per Hour</label>
              <input className='input' type="number" />
            </form>
            <form className='form'>
              <label for='average-cookies-per-sale'>Average Cookies per Sale</label>
              <input className='input' type="number" />
            </form>
            <buton className='button' type='submit'>Create</buton>
          </div>
        </div>
        <p className="p">{reply}</p>
      </main>
      <footer className="footer">
        <p>&copy;{new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}