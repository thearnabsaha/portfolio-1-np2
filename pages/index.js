import Head from 'next/head';
import About from './components/About';
import Intro from './components/Intro'
import Portfolio from './components/Portfolio';
const index = () => {
  return (
    <>
      <Head>
        <title>TAS Portfolio-1</title>
      </Head>
      <Intro/>
      <About/>
      <Portfolio/>
    </>
  );
}

export default index;