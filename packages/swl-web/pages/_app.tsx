import '../styles/globals.css';

function App({ Component, pageProps }: any) {
  return (
    <>
      <main className='relative'>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
