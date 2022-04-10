import { Fragment, useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '../../lib/gsap';
import Link from 'next/link';

const FirstPage = () => {
  const firstRef = useRef(null);

  useEffect(() => {
    const fisrtPage = firstRef.current;

    const tlIntro = gsap.timeline({
      scrollTrigger: {
        trigger: fisrtPage,
        start: '0%',
        end: '100%',
        pin: true,
        pinSpacing: false,
      },
    });
  }, []);

  return (
    <section
      ref={firstRef}
      id="first-page"
      className="min-h-[100vh] max-w-7xl mx-auto flex flex-col items-center justify-center"
    >
      <div
        id="first-page-text"
        className="z-10 text-center pb-4 font-bold text-gray-800"
      >
        <h1 id="first-page-title" className="text-2xl">
          iPhone 13 Pro
        </h1>
        <h2 id="first-page-subtitle" className="text-[3rem]">
          Oh. So. Pro.
        </h2>
      </div>

      {/**Add front page video */}
      <video
        className="absolute"
        src="/images/intro-animation.mov"
        id="intro-video"
        autoPlay={true}
        muted
      ></video>
    </section>
  );
};

export default FirstPage;
