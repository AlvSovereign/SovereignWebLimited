import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <>
      <main className='relative'>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
