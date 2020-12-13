import Head from 'next/head';
import { Header, Hero } from '../src/components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Sovereign Web Limited | We help you realise your digital experiences
        </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Hero />
    </div>
  );
}
