/* eslint-disable @next/next/no-img-element */
import { Fragment, useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '../../lib/gsap';

const ThirdPage = () => {
  const thirdRef = useRef(null);
  const largePhoneRef = useRef(null);
  const smallPhoneRef = useRef(null);
  const productLeftRef = useRef(null);
  const productRightRef = useRef(null);

  useEffect(() => {
    const thirdPage = thirdRef.current;
    const largePhone = largePhoneRef.current;
    const smallPhone = smallPhoneRef.current;
    const productLeft = productLeftRef.current;
    const productRight = productRightRef.current;

    const tlSplit = gsap.timeline({
      scrollTrigger: {
        trigger: thirdPage,
        start: '-25%',
        end: '20%',
        scrub: true,
      },
    });

    tlSplit.fromTo(largePhone, { x: '40%' }, { x: '20%' });
    tlSplit.fromTo(smallPhone, { x: '-40%' }, { x: '-20%' }, '<');
    tlSplit.fromTo(
      productLeft,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1 },
      '<',
    );
    tlSplit.fromTo(
      productRight,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1 },
      '<',
    );

    const tlSplitPin = gsap.timeline({
      scrollTrigger: {
        trigger: thirdPage,
        pin: true,
        pinSpacing: false,
        start: '0%',
        end: '100%',
      },
    });
  }, []);

  return (
    <section
      id="third-page"
      className="relative max-w-7xl mx-auto"
      ref={thirdRef}
    >
      <div
        id="product-text-container"
        className="flex justify-around items-center min-h-[100vh] bg-white"
      >
        <div id="product-text-left" ref={productLeftRef}>
          <p id="phone-title">iPhone 13 Pro Max</p>
          <p id="phone-size pro-size" className="text-2xl font-bold text-right">
            6.7
          </p>
        </div>
        <div id="product-text-right" ref={productRightRef}>
          <p id="phone-title">iPhone 13 Max</p>
          <p id="phone-size max-size" className="text-2xl font-bold text-left">
            6.1
          </p>
        </div>
      </div>

      <div
        id="product-images"
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-end "
      >
        <img
          src="/images/large-phone.png"
          alt="large phone"
          id="large-phone"
          ref={largePhoneRef}
          className="relative z-10 translate-x-[40%] object-contain scale-75"
        />
        <img
          src="/images/small-phone.png"
          alt="small phone"
          id="small-phone"
          ref={smallPhoneRef}
          className="relative z-20 object-contain translate-x-[-40%] scale-75"
        />
      </div>
      <p
        id="retina-line"
        className="absolute bottom-[10%] left-[50%] translate-y-[-10%] translate-x-[-50%] text-xs font-bold"
      >
        Super Retina XDR display with ProMotion
      </p>
    </section>
  );
};

export default ThirdPage;
