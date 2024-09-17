import { Leva } from 'leva'; // Leva is a control panel for tweaking variables in 3D scenes

import { Suspense } from 'react'; // Suspense allows us to display a fallback UI while waiting for some async operations 

import { Canvas } from '@react-three/fiber'; // Canvas is the main container for rendering 3D scenes in React just like we return react code in a div or fragement, 3D rendering code is returned in Canvas

import { useMediaQuery } from 'react-responsive'; // Hook to handle responsive design by checking screen width

import { PerspectiveCamera } from '@react-three/drei'; // A ready-to-use perspective camera for 3D scenes

// Importing 3D objects and components
import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx'; // Loader component that shows while 3D models are loading
import HeroCamera from '../components/HeroCamera.jsx'; // Custom camera setup for the hero section
import { calculateSizes } from '../constants/index.js'; // Function to calculate sizes for various 3D elements
import { HackerRoom } from '../components/HackerRoom.jsx'; // Another 3D model component representing a room
import TypewriterComponent from 'typewriter-effect';

// Main Hero section
const Hero = () => {
  // Use media queries to check if the screen is small, mobile, or tablet size
  const isSmall = useMediaQuery({ maxWidth: 440 }); // Small screen, e.g., phones
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Mobile devices
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 }); // Tablets

  // Calculate size properties based on the screen size
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    // Main section for the hero component, set to take full height and width of the viewport
    <section className="min-h-screen w-full flex flex-col relative" id="home">

      {/* Text content that introduces "Parth" and his tagline */}
      <div className="w-full mx-auto flex flex-col sm:mt-30 mt-20 c-space gap-3 ">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hey, I am Parth <span className="waving-hand">🤝</span> {/* Waving hand emoji */}
        </p>
        <div className='relative p-4 sm:p-6 md:p-8 flex justify-center'>
          <div className='text-3xl sm:text-4xl md:text-5xl font-semibold text-yellow-400'>
            <TypewriterComponent
              options={{
                strings: ["Learning Tech", "Building Projects", "Improving myself"],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
                pauseFor: 1000,
                cursor: "|", // Customize cursor here
              }}
              className="typewriter-cursor"
            />
          </div>
        </div>
      </div>

      {/* 3D scene container */}
      <div className="w-full h-full absolute inset-0">
        {/* Canvas from @react-three/fiber is the main renderer for 3D models */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}> {/* Loading fallback while 3D models are fetched */}

            {/* Leva control panel is hidden, it’s there for debugging or adjusting scene parameters */}
            <Leva hidden />

            {/* PerspectiveCamera sets up the camera view */}
            <PerspectiveCamera makeDefault position={[0, 0, 100]} />

            {/* HeroCamera wraps the 3D components with special camera controls, adjusting based on screen size */}
            <HeroCamera isMobile={isMobile}>
              {/* HackerRoom is a 3D model that appears in the scene */}
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            {/* A group of 3D elements placed in the scene with positions calculated dynamically */}
            <group>
              <Target position={sizes.targetPosition} isMobile={isMobile} /> {/* Pass isMobile as prop */}
              <ReactLogo position={sizes.reactLogoPosition} /> {/* React Logo 3D object */}
              <Rings position={sizes.ringPosition} /> {/* Rings 3D object */}
              <Cube position={sizes.cubePosition} isMobile={isMobile} /> {/* Pass isMobile as prop */}
            </group>

            {/* Lights in the scene */}
            <ambientLight intensity={1} /> {/* Soft, global light */}
            <directionalLight position={[10, 10, 10]} intensity={0.1} /> {/* Directional light from a specific position */}

          </Suspense>
        </Canvas>
      </div>

      {/* Button for collaboration */}
      <div className="absolute bottom-2 left-0 right-0 w-full z-10 c-space">
        {/* Button that links to the contact section */}
        <a href="#contact" className="w-fit">
          <Button name="Lets Collabrate & Connect !" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

// Overview of the Code:

// Responsive Design Setup:
// The useMediaQuery hook is used to detect the screen size (small, mobile, tablet), and based on this, the calculateSizes function dynamically adjusts the positions and scales of the 3D objects.

// 3D Scene Rendering:
// The Canvas component from @react-three/fiber serves as the main container where all 3D models and animations are rendered.
// Suspense is used to display a fallback (loading screen) while 3D models and textures are being fetched. The CanvasLoader component is rendered during this loading phase.
// Leva is included as a hidden control panel for tweaking 3D variables but is not visible to the user.
// A PerspectiveCamera is set up to provide a 3D view, ensuring the user gets a natural perspective.
// 3D Models and Animations:

// Multiple 3D components like Target, ReactLogo, Rings, and Cube are rendered inside a group. Their positions and scales are adjusted based on the screen size (sizes object).
// The isMobile prop is passed to some components, like Target and Cube, allowing them to adjust behavior depending on the screen size.
// Lighting:

// Basic lighting is added to the scene, including an ambientLight for overall soft light and a directionalLight for sharper, directional illumination.
// UI Components:

// There is text in the hero section introducing "Parth" with a tagline.
// A button at the bottom allows users to navigate to the contact section for collaboration. This button is responsive, with different sizes for mobile and larger screens.
// Positioning and Layout:

// The entire section is styled to take up the full viewport height and width. Various elements are positioned absolutely within this layout, making it responsive and ensuring the 3D scene fills the screen.
// Purpose:
// The Hero section is a visually rich introduction to a portfolio or personal webpage. It combines responsive 3D animations with informative text, creating an engaging user experience.
// The section adjusts its layout and 3D object properties based on the user's screen size, ensuring optimal display across devices.