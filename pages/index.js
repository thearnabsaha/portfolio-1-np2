import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Intro from '../components/Intro'
import Portfolio from '../components/Portfolio';
import {products}  from "../data";

const index = ({users}) => {
  return (
    <>
      <Head>
        <title>TAS Portfolio-1</title>
      </Head>
      <Intro/>
      <About/>
      <Portfolio users={users}/>
      <Contact/>
    </>
  );
}

export default index;

export async function getStaticProps() {
  return {
      props: {
          users:products,
      },
  }
}