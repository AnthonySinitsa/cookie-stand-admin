import Head from '@/components/Head';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';

export default function CookieStandAdmin({ locations = 5 }) {
  return (
    <div>
      <Head />
      <Header />
      <Main  />
      <Footer locations={locations} />
    </div>
  );
}