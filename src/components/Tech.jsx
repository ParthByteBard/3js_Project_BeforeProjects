// import React from "react";
// import BallCanvas from './canvas/Ball'; // Import from Ball.jsx
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";

// const Tech = () => {
//   // Ensure technologies array has enough elements
//   const validTech = technologies.filter(tech => tech && tech.icon); // Filter out undefined or invalid entries

//   // Split the valid tech stacks: first 2 single and last 4 pairs (2 tech stacks per ball for the last 4)
//   const LastTwo = validTech.slice(8, 10); // First two will be rendered as single icons
//   const FourPairs = [
//     [validTech[0]?.icon, validTech[1]?.icon], // Pair 1
//     [validTech[2]?.icon, validTech[3]?.icon], // Pair 2
//     [validTech[4]?.icon, validTech[5]?.icon], // Pair 3
//     [validTech[6]?.icon, validTech[7]?.icon], // Pair 4
//   ].filter(pair => pair.every(icon => icon !== undefined)); // Remove pairs with undefined icons

//   return (
//     <div className="flex flex-row flex-wrap justify-center gap-7">
//       {/* Render first 2 tech stacks (1 per ball) */}

//       {FourPairs.map((pair, idx) => (
//         <div className='w-28 h-28' key={`pair-${idx}`}>
//           <BallCanvas iconUrls={pair} /> {/* Two icons per ball */}
//         </div>
//       ))}
//       {LastTwo.map((tech, idx) => (
//         <div className='w-28 h-28' key={tech.name}>
//           <BallCanvas iconUrls={[tech.icon]} /> {/* Single icon per ball */}
//         </div>
//       ))}

//       {/* 4 tech stacks (2 per ball) */}

//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");
import React from "react";
import BallCanvas from './canvas/Ball'; // Import from Ball.jsx
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  // Ensure technologies array has enough elements
  const validTech = technologies.filter(tech => tech && tech.icon); // Filter out undefined or invalid entries

  // Split the valid tech stacks: first 2 single and last 4 pairs (2 tech stacks per ball for the last 4)
  const firstTwo = validTech.slice(8, 10); // First two will be rendered as single icons
  const lastFourPairs = [
    [validTech[0]?.icon, validTech[1]?.icon], // C++ and C logos (first pair)
    [validTech[2]?.icon, validTech[3]?.icon], // Pair 2
    [validTech[4]?.icon, validTech[5]?.icon], // Pair 3
    [validTech[6]?.icon, validTech[7]?.icon], // Pair 4
  ].filter(pair => pair.every(icon => icon !== undefined)); // Remove pairs with undefined icons

  return (
    <div className="flex flex-row flex-wrap justify-center gap-7">

      {lastFourPairs.map((pair, idx) => (
        <div className='w-28 h-28' key={`pair-${idx}`}>
          {/* Conditionally pass a custom rotation for the C and C++ ball */}
          <BallCanvas
            iconUrls={pair}
            rotation={(idx === 1 && idx === 2) ? [0, 0, Math.PI] : [0, 0, 0]} // Custom rotation for first pair (C++ and C)
          // Custom rotation for first pair (C++ and C)
          />
        </div>
      ))}
      {/* Render first 2 tech stacks (1 per ball) */}
      {firstTwo.map((tech, idx) => (
        <div className='w-28 h-28' key={tech.name}>
          <BallCanvas iconUrls={[tech.icon]} /> {/* Single icon per ball */}
        </div>
      ))}
      {/* Render last 4 tech stacks (2 per ball) */}

    </div>
  );
};

export default SectionWrapper(Tech, "");
