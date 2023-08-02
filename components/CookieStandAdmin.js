import Head from '@/components/Head';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';

export default function CookieStandAdmin({ locations = 8 }) {
  return (
    <div>

      <Head />

      <Header />

      <Main locations={locations} />

      <Footer locations={locations} />

    </div>
  );
}
