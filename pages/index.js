import Head from 'next/head';
import About from './components/About';
import Intro from './components/Intro'
import Portfolio from './components/Portfolio';
import moduleName from '../public/portimg/1.png';
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