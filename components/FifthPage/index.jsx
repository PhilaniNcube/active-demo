import { Fragment, useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '../../lib/gsap';

const FifthPage = () => {
  const fifthPageRef = useRef(null);
  const videoRef = useRef(null);

  const productInfoRef1 = useRef(null);
  const productInfoRef2 = useRef(null);
  const productInfoRef3 = useRef(null);
  const productInfoRef4 = useRef(null);

  useEffect(() => {
    const fifthPage = fifthPageRef.current;
    const video = videoRef.current;
    const productInfo1 = productInfoRef1.current;
    const productInfo2 = productInfoRef2.current;
    const productInfo3 = productInfoRef3.current;
    const productInfo4 = productInfoRef4.current;

    console.log(fifthPage);

    const tlVideo = gsap.timeline({
      scrollTrigger: {
        trigger: fifthPage,
        start: '0%',
        end: '160%',
        scrub: true,
        pin: true,
      },
    });

    tlVideo.fromTo(video, { currentTime: 0 }, { currentTime: 3 });

    tlVideo.fromTo(productInfo1, { opacity: 0 }, { opacity: 1 }, '<');
    tlVideo.fromTo(productInfo2, { opacity: 0 }, { opacity: 1 }, '+1');
    tlVideo.fromTo(productInfo3, { opacity: 0 }, { opacity: 1 }, '+2');
    tlVideo.fromTo(productInfo4, { opacity: 0 }, { opacity: 1 }, '+3');
  }, []);

  return (
    <section id="fifth-page" className="min-h-[100vh]" ref={fifthPageRef}>
      <video
        ref={videoRef}
        id="product-video"
        src="/images/output-2.mp4"
        muted
        className="absolute h-full w-[100%] object-cover z-10"
      ></video>
      <div
        id="product-info-container"
        className="relative z-20 text-white flex items-center min-h-[100vh] justify-between max-w-6xl mx-auto"
      >
        <div id="left-info" className="w-2/5">
          <h3 className="px-6 py-6 text-gray-200" ref={productInfoRef1}>
            up to <br />
            <span className="text-xl font-medium">25% brighter outdoors</span>
            <br />
            for content that looks even more vivid in sunlight
          </h3>
          <h3 className="px-6 py-6 text-gray-200" ref={productInfoRef2}>
            <span className="text-xl font-medium">Even more display area</span>{' '}
            <br />
            thanks to a smaller camera system
          </h3>
        </div>
        <div id="right-info" className="w-1/5">
          <h3 className="px-6 py-6 text-gray-200" ref={productInfoRef3}>
            <span className="text-xl font-medium">Custom OLED technology</span>
            <br /> pushes the displays incredible resolution and color right to
            the edge
          </h3>
          <h3 className="px-6 py-6 text-gray-200" ref={productInfoRef4}>
            Up to <span className="text-xl font-medium">1200 nits</span> peak
            brightness for your HDR photos and videos
          </h3>
        </div>
      </div>
    </section>
  );
};

export default FifthPage;
