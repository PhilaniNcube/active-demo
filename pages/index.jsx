import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { Fragment } from 'react';
import { Navbar } from '../components/Navbar';
import FirstPage from '../components/FirstPage';
import SecondPage from '../components/SecondPage';
import ThirdPage from '../components/ThirdPage';
import FourthPage from '../components/FourthPage';
import FifthPage from '../components/FifthPage';
import SixthPage from '../components/SixthPage';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Active Cellular</title>
        <meta name="description" content="Place your cellphone order today" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
    </Fragment>
  );
}
