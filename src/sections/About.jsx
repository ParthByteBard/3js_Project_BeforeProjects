import { useState } from 'react';
import Globe from 'react-globe.gl';
import Tech from '../components/Tech.jsx';
import Button from '../components/Button.jsx';
import grid1 from '../assets/grid1.jpeg'
import grid2 from '../assets/images.jpeg'
import grid4 from '../assets/grid4.png'
import tick from '../assets/tick.svg'
import copy from '../assets/copy.svg'
import Animation3 from '../assets2/Animation3.gif'
import { useMediaQuery } from 'react-responsive';


const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('parthsatvekar2004@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src={grid1} alt="grid-1" className="w-[full] sm:h-[276px] h-[225px]  rounded-xl object-contain" />

            <div>
              <p className="grid-headtext mt-10">Hi, I'm Parth Satvekar</p>
              <p className="grid-subtext">
                Studying as a 3rd Year, Computer Engineering Student at VIT Mumbai. I like coding and I
                believe in continuos learning. Trying to make myself 1% better everyday.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src={grid2} alt="grid-2" className="w-full sm:h-[276px] h-[225px]  object-contain rounded-xl" />
            {/* Tech stack comes over here */}

            <div>
              <p className="grid-headtext mt-10">Core Principles</p>
              <p className="grid-subtext">
                I am dedicated to the welfare of stray animals, treating everyone with respect, and maintaining unwavering loyalty to my work. These values guide me in both my professional and personal life.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container flex flex-col sm:justify-start">
            <div className="rounded-3xl w-full sm:h-[450px] h-fit flex justify-center items-center">
              {
                isMobile ?
                  (
                    <div className="flex justify-center items-center w-full h-full mt-[50px]">
                      <img src={Animation3} alt="GIF Animation" className="max-w-[70%] max-h-full rounded-xl" />
                    </div>
                  )
                  :
                  (
                    <Globe
                      height={326}
                      width={326}
                      backgroundColor="rgba(0, 0, 0, 0)"
                      backgroundImageOpacity={0.5}
                      showAtmosphere
                      showGraticules
                      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                      labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
                    />
                  )

              }

            </div>
            <div >
              <p className="grid-headtext">I’m very flexible with time zone communications</p>
              <p className="grid-subtext">I&apos;m based in Mumbai, India and open to remote work worldwide.</p>
              <a href='#contact'>
                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              </a>

            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            {/* <img src="./assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" /> */}
            <div>
              <Tech />
              <p className="grid-headtext">Tech-Stack</p>
              <p className="grid-subtext">
                These are some of the technologies I use to build projects.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src={grid4}
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? tick : copy} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">parthsatvekar2004@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
