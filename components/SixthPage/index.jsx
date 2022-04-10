/* eslint-disable @next/next/no-img-element */
import { Fragment, useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '../../lib/gsap';

const SixthPage = () => {
  const sixthPageRef = useRef(null);
  const photoDescriptionRef = useRef(null);
  const potraitContainerRef = useRef(null);
  const phoneVideoRef = useRef(null);

  useEffect(() => {
    const sixthPage = sixthPageRef.current;
    const photoDescription = photoDescriptionRef.current;
    const portraitContainer = potraitContainerRef.current;
    const phoneVideo = phoneVideoRef.current;

    const tlParallax = gsap.timeline({
      scrollTrigger: {
        trigger: sixthPage,
        start: '-60%',
        end: '60%',
        scrub: true,
      },
    });

    tlParallax.fromTo(photoDescription, { y: 0 }, { y: '-20%' });
    tlParallax.fromTo(portraitContainer, { y: 0 }, { y: '-10%' }, '<');
    tlParallax.fromTo(phoneVideo, { y: 120 }, { y: '-15%' }, '<');
  }, []);

  return (
    <section
      ref={sixthPageRef}
      id="sixth-page"
      className="min-h-[100vh] max-w-7xl mx-auto py-12 justify-around relative mb-10 flex"
    >
      <div
        id="photo-description"
        className="mt-12 z-20"
        ref={photoDescriptionRef}
      >
        <h3 id="photo-title" className="text-3xl">
          Customize <br /> your camera to
        </h3>
        <h3 id="photo-subtitle" className="text-5xl font-bold">
          lock in your look.
        </h3>
      </div>
      <div id="portrait-container" ref={potraitContainerRef}>
        <img
          src="/images/portrait.jpg"
          alt=""
          id="portrait"
          className="h-[70vh]"
        />
      </div>
      <div
        ref={phoneVideoRef}
        id="phone-video"
        className="absolute flex bottom-[-15%] right-[49%] z-20 translate-x-[40%] "
      >
        <img
          src="/images/iphone-frame.png"
          alt=""
          className="absolute overflow-hidden z-20 scale-75"
        />
        <video
          src="/images/iphone-camera-video.mp4"
          loop
          muted
          autoPlay
          className="z-10 scale-[0.68] -translate-y-5 rounded-[30px]"
        ></video>
      </div>
    </section>
  );
};

export default SixthPage;
