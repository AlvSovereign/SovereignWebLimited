import Head from 'next/head';
import { Features, Header, Hero, Testimonial } from '../src/components';

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
      <Features />
      <Testimonial />
    </div>
  );
}
