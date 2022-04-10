import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  duration: 2,
});

export * from 'gsap/dist/gsap';
export * from 'gsap/dist/ScrollTrigger';
