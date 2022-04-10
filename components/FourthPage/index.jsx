/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../../lib/gsap';

const FourthPage = () => {
  const swatchesRefs = useRef([]);
  const galleryRef = useRef(null);
  const sliderRefs = useRef([]);

  swatchesRefs.current = [];
  const swatches = swatchesRefs.current;
  sliderRefs.current = [];
  const slides = sliderRefs.current;

  const addToSwatchRefs = (el) => {
    if (el && !swatchesRefs.current.includes(el)) {
      swatchesRefs.current.push(el);
    }
  };

  const addToSliderRefs = (el) => {
    if (el && !sliderRefs.current.includes(el)) {
      sliderRefs.current.push(el);
    }
  };

  useEffect(() => {
    let currentSwatch = 'blue';
    let topIndex = 2;

    const gallery = galleryRef.current;

    swatches.forEach((swatch, i) => {
      const coord = slides[i].getBoundingClientRect().left;
      console.log(coord);

      console.log(slides[i].id);

      swatch.addEventListener('click', (e) => {
        let swatchName = e.target.getAttribute('swatch');

        console.log(i);

        let closeUp = slides[i];

        console.log(closeUp);

        if (currentSwatch === swatchName) return;

        gsap.set(closeUp, { zIndex: topIndex });
        gsap.fromTo(closeUp, { opacity: 0 }, { duration: 1, opacity: 1 });

        gsap.to(gallery, {
          x: -coord * i,
          duration: 1,
          ease: 'back.out(1.15)',
        });

        topIndex++;
        currentSwatch = swatchName;
      });
    });
  }, []);

  return (
    <section id="fourth-page" className="min-h-[90vh] flex relative bg-white">
      <div
        id="purchase-left justify-center flex-1"
        className="flex flex-col overflow-hidden items-center justify-center"
      >
        <div
          id="phone-gallery"
          className="flex flex-1 self-start"
          ref={galleryRef}
        >
          <div
            id="phone-gallery-container blue-cont"
            className="min-w-[50vw] flex items-center justify-center"
          >
            <img
              src="/images/blue-iphone-back.png"
              id="blue-back"
              alt=""
              className="object-contain scale-[0.60]"
            />
          </div>
          <div
            id="phone-gallery-container silver-cont"
            className="min-w-[50vw] flex items-center justify-center"
          >
            <img
              src="/images/silver-iphone-back.png"
              id="silver-back"
              alt=""
              className="object-contain scale-[0.60]"
            />
          </div>
          <div
            className="min-w-[50vw] flex items-center justify-center"
            id="phone-gallery-container gold-cont"
          >
            <img
              src="/images/gold-iphone-back.png"
              id="gold-back"
              alt=""
              className="object-contain scale-[0.60]"
            />
          </div>
          <div
            className="min-w-[50vw] flex items-center justify-center"
            id="phone-gallery-container graphite-cont"
          >
            <img
              src="/images/graphite-iphone-back.png"
              id="graphite-back"
              alt=""
              className="object-contain scale-[0.60]"
            />
          </div>
        </div>
        <div id="swatch-container" className="px-6 text-xs text-center py-2">
          <div id="swatches" className="flex space-x-9 text-center ">
            <img
              ref={addToSwatchRefs}
              swatch="blue"
              src="/images/swatch-blue.svg"
              alt=""
              className="cursor-pointer"
            />
            <img
              ref={addToSwatchRefs}
              swatch="silver"
              src="/images/swatch-silver.svg"
              alt=""
              className="cursor-pointer"
            />
            <img
              ref={addToSwatchRefs}
              swatch="gold"
              src="/images/swatch-gold.svg"
              alt=""
              className="cursor-pointer"
            />
            <img
              ref={addToSwatchRefs}
              swatch="graphite"
              src="/images/swatch-graphite.svg"
              alt=""
              className="cursor-pointer"
            />
          </div>
          <p className="flex space-x-3">
            <span>Sierra Blue</span> <span>Silver</span> <span>Gold</span>
            <span>Graphite</span>
          </p>
        </div>
      </div>
      <div
        id="purchase-right"
        className="flex-1 min-w-[50vw] relative bg-black"
      >
        <img
          ref={addToSliderRefs}
          id="blue phone"
          alt=""
          src="/images/blue-closeup.png"
          className="absolute bottom-0 left-[50%] translate-x-[-50%]  scale-90 origin-bottom z-[1]"
        />
        <img
          ref={addToSliderRefs}
          id="silver phone"
          alt=""
          src="/images/silver-closeup.png"
          className="absolute bottom-0 left-[50%] translate-x-[-50%]  scale-90 origin-bottom"
        />
        <img
          ref={addToSliderRefs}
          id="gold phone"
          alt=""
          src="/images/gold-closeup.png"
          className="absolute bottom-0 left-[50%] translate-x-[-50%]  scale-90 origin-bottom"
        />
        <img
          ref={addToSliderRefs}
          id="graphite phone"
          alt=""
          src="/images/graphite-closeup.png"
          className="absolute bottom-0 left-[50%] translate-x-[-50%]  scale-90 origin-bottom"
        />
      </div>
    </section>
  );
};

export default FourthPage;
