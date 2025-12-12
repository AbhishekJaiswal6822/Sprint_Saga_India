// src/Hero.jsx
import React, { useEffect, useRef, useState } from "react";

import earlyDesktop from "./assets/early-bird-desktop.jpeg";
import lokDesktop from "./assets/lokraja-marathon-2026-desktop.jpeg";
import regDesktop from "./assets/registration-website-desktop.jpeg";

import earlyMobile from "./assets/early-bird-mobile.jpeg";
import lokMobile from "./assets/lokraja-marathon-2026-mobile.jpeg";
import regMobile from "./assets/registration-website-mobile.jpeg";

export default function Hero() {
  const slides = [
    { desktop: lokDesktop, mobile: lokMobile },
    { desktop: regDesktop, mobile: regMobile },
     { desktop: earlyDesktop, mobile: earlyMobile },
  ];

  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  // dragging refs
  const dragging = useRef(false);
  const startX = useRef(0);
  const current = useRef(0);
  const prev = useRef(0);
  const raf = useRef(null);

  // autoplay refs so interval doesn't leak or recreate poorly
  const autoplayInterval = useRef(null);
  const autoplayDelay = 4000; // ms

  // -------------------------------
  // AUTOPLAY (start once)
  // -------------------------------
  // use a ref-based next to avoid stale closure issues
  const nextRef = useRef();
  nextRef.current = () => {
    setIndex((i) => (i + 1) % slides.length);
  };

  useEffect(() => {
    // start autoplay once on mount
    autoplayInterval.current = setInterval(() => {
      nextRef.current();
    }, autoplayDelay);

    return () => {
      clearInterval(autoplayInterval.current);
      autoplayInterval.current = null;
    };
  }, []); // empty deps: run once

  // -------------------------------
  // POSITIONING
  // -------------------------------
  function getWidth() {
    return containerRef.current?.clientWidth || 0;
  }

  function updatePosition(animate = true) {
    const x = -index * getWidth();
    prev.current = x;
    current.current = x;
    if (!trackRef.current) return;
    trackRef.current.style.transition = animate ? "transform 400ms ease" : "none";
    trackRef.current.style.transform = `translateX(${x}px)`;
  }

  useEffect(() => {
    // animate slide when index changes
    updatePosition(true);
  }, [index]);

  useEffect(() => {
    function onResize() {
      updatePosition(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // -------------------------------
  // NEXT & PREV (looping)
  // -------------------------------
  function next() {
    setIndex((i) => (i + 1) % slides.length);
  }

  function prevSlide() {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }

  // -------------------------------
  // DRAG / SWIPE
  // -------------------------------
  function animate() {
    if (!trackRef.current) return;
    trackRef.current.style.transition = "none";
    trackRef.current.style.transform = `translateX(${current.current}px)`;
    if (dragging.current) raf.current = requestAnimationFrame(animate);
  }

  function dragStart(clientX) {
    // NOTE: we keep autoplay running; if you want to pause while dragging, clearInterval here.
    dragging.current = true;
    startX.current = clientX;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(animate);
    // disable transition for immediate drag feedback
    if (trackRef.current) trackRef.current.style.transition = "none";
  }

  function dragMove(clientX) {
    if (!dragging.current) return;
    const delta = clientX - startX.current;
    current.current = prev.current + delta;
  }

  function dragEnd() {
    if (!dragging.current) return;
    dragging.current = false;
    if (raf.current) cancelAnimationFrame(raf.current);

    const delta = current.current - prev.current;
    const threshold = getWidth() * 0.25;

    if (delta < -threshold) {
      next();
    } else if (delta > threshold) {
      prevSlide();
    } else {
      // snap back
      updatePosition(true);
    }
  }

  // -------------------------------
  // JSX
  // -------------------------------
  return (
    <section className="w-full overflow-hidden relative py-2">
      {/* Slider window (py-4 gives vertical padding) */}
      <div
        ref={containerRef}
        className="w-full h-auto sm:h-[50vh] md:h-[60vh] lg:h-[90vh] overflow-hidden"
      >
        {/* Slide track */}
        <div
          ref={trackRef}
          className="flex h-full"
          onMouseDown={(e) => dragStart(e.clientX)}
          onMouseMove={(e) => dragMove(e.clientX)}
          onMouseUp={dragEnd}
          onMouseLeave={dragEnd}
          onTouchStart={(e) => dragStart(e.touches[0].clientX)}
          onTouchMove={(e) => dragMove(e.touches[0].clientX)}
          onTouchEnd={dragEnd}
          style={{ touchAction: "pan-y" }}
        >
          {slides.map((s, i) => (
            <div key={i} className="shrink-0 w-full flex items-center justify-center">
              <picture className="block w-full">
                <source media="(max-width: 768px)" srcSet={s.mobile} />
                <img
                  src={s.desktop}
                  draggable={false}
                  className="w-full h-auto sm:h-[50vh] md:h-[60vh] lg:h-[90vh] object-contain py-2"
                  alt={`Slide ${i + 1}`}
                />
              </picture>
            </div>
          ))}
        </div>
      </div>

      {/* Prev Button: BIG and CLOSE (left-6 means close to center) */}
      <button
        onClick={prevSlide}
        aria-label="Previous"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white shadow-lg p-4 rounded-full flex items-center justify-center text-2xl"
        style={{ transformOrigin: "center" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M15 6L9 12L15 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Next Button: BIG and CLOSE (right-6 means close to center) */}
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white shadow-lg p-4 rounded-full flex items-center justify-center text-2xl"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M9 6L15 12L9 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/40"} shadow`}
          />
        ))}
      </div>
    </section>
  );
}
