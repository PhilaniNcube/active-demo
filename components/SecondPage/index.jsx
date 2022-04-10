import { Fragment, useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '../../lib/gsap';

const SecondPage = () => {
  const secondRef = useRef(null);
  const highlightRefs = useRef([]);

  highlightRefs.current = [];

  const addToRefs = (el) => {
    if (el && !highlightRefs.current.includes(el)) {
      highlightRefs.current.push(el);
    }
  };

  useEffect(() => {
    const secondPage = secondRef.current;

    const tlH = gsap.timeline({
      scrollTrigger: {
        trigger: secondPage,

        start: '-40%',
        end: '40%',
        scrub: true,
      },
    });

    highlightRefs.current.map((ref) => {
      tlH.fromTo(ref, { opacity: 0.4 }, { opacity: 1 });
    });

    const tlHRemove = gsap.timeline({
      scrollTrigger: {
        trigger: secondPage,

        start: '10%',
        end: '40%',
        scrub: true,
      },
    });

    highlightRefs.current.map((ref) => {
      tlHRemove.to(ref, { opacity: 0.4 });
    });
  }, []);

  return (
    <section
      ref={secondRef}
      id="second-page"
      className="min-h-[125vh] flex flex-col justify-center relative"
    >
      <video
        className="absolute h-[100%] w-[100vw] object-cover z-10"
        id="smoke-video"
        src="/images/smoke-video.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div id="second-text " className="z-20 relative px-[30%] py-[10%]">
        <p
          id="text-container"
          className="text-gray-100 text-4xl leading-relaxed font-bold max-w-[30ch]"
        >
          <span id="highlight" ref={addToRefs}>
            A dramatically more powerfull camera system.
          </span>
          <span id="highlight" ref={addToRefs}>
            A display so responsive every interaction feels new again.
          </span>
          <span id="highlight" ref={addToRefs}>
            The worlds fastest smartphone chip.
          </span>
          <span id="highlight" ref={addToRefs}>
            Exceptional durability.
          </span>
          <span id="highlight" ref={addToRefs}>
            And a huge leap in battery life.
          </span>
          <br />
          <br />
          <span id="highlight" ref={addToRefs}>
            Lets Pro.
          </span>
        </p>
      </div>
    </section>
  );
};

export default SecondPage;
