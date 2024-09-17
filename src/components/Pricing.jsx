import { useRef } from "react";

import Section from "./Section";

const Pricing = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="contactus"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">Contact</h1>
          <p className="font-semibold mb-6 text-n-2 lg:mb-8 text-justify text-center flex justify-center">
            01974-041314
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
