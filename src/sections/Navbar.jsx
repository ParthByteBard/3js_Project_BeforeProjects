import { useState } from 'react'; // React hook to manage state
import { navLinks } from '../constants/index.js'; // Importing navigation links from constants

// NavItems Component: Iterates through the navigation links and displays them as a list of items
// onClick prop allows triggering any action (like closing the menu on mobile after clicking a link)
const NavItems = ({ onClick = () => { } }) => (
  <ul className="nav-ul"> {/* Unordered list to contain navigation items */}
    {navLinks.map((item) => ( // Iterate over navLinks array
      <li key={item.id} className="nav-li"> {/* Each navigation item */}
        <a href={item.href} className="nav-li_a" onClick={onClick}> {/* Link and click handler */}
          {item.name} {/* Display the name of the navigation link */}
        </a>
      </li>
    ))}
  </ul>
);

// Navbar Component: Contains the logo, menu icon for mobile, and navigation items
const Navbar = () => {

  // State to manage whether the mobile menu (sidebar) is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the state of the menu (open/close)
  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to close the menu (set isOpen to false)
  const closeMenu = () => setIsOpen(false);

  return (
    // Header section with fixed positioning at the top and semi-transparent background
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto"> {/* Limits the content width to max 7xl */}

        {/* Main navbar container with flexbox for layout */}
        <div className="flex justify-between items-center py-5 mx-auto c-space">

          {/* Logo or brand name on the left side, linking to the homepage */}
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            Parth {/* Brand name */}
          </a>

          {/* Mobile menu button: Toggles the menu when clicked */}
          <button
            onClick={toggleMenu} // Calls the toggleMenu function to open/close the menu
            // if screen size atleast 640px or greater(i.e sm) it should be hidden I know its not logical
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"> {/* Accessibility: aria-label describes the button */}
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" /> {/* Shows close or menu icon based on isOpen state */}
          </button>

          {/* Regular navigation menu (displayed on larger screens) */}
          {/* Hidden on mobile (sm:hidden) as sm: means the screen is 640px or greater, flexbox is used for alignment on larger screens */}
          <nav className="sm:flex hidden">
            <NavItems /> {/* Navigation items are rendered here */}
          </nav>
        </div>
      </div>

      {/* Mobile sidebar: It opens or closes based on isOpen state */}
      {/* max-h-screen allows it to take the full viewport height when open, max-h-0 when closed */}
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5 text-red-500">
          {/* Rendering the navigation items again inside the mobile sidebar */}
          {/* Passes closeMenu as the onClick handler to close the menu after clicking a link */}
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;


/*

Overview of the Code:

State Management:
The isOpen state controls whether the mobile sidebar is visible or not. It is toggled by the toggleMenu function and closed by the closeMenu function.
When the mobile menu is open, a "close" icon is displayed; otherwise, a "menu" icon is shown.

Responsive Navbar:
For larger screens (sm:flex hidden), the navigation links are displayed as a horizontal list directly in the navbar.
On smaller screens, the navigation links are hidden, and a menu button (hamburger icon) is displayed. When clicked, it toggles the visibility of the mobile sidebar.

Mobile Sidebar:
The sidebar opens by setting its max-height to 100vh (full screen height). When closed, its max-height is set to 0, hiding it from view.
The links inside the sidebar trigger the closeMenu function when clicked, ensuring the sidebar closes after a selection is made.

Navigation Items:
The NavItems component iterates over the navLinks array and renders each navigation link as a list item. This component is reused in both the main navbar and the sidebar, ensuring consistent behavior across screen sizes.
The onClick function (if provided) is triggered when a link is clicked. This is especially useful for closing the mobile menu after a selection is made.

Styling and Layout:
Flexbox is used for laying out the navbar, ensuring the brand name and the menu icon (or navigation links) are aligned properly.
The navbar has a semi-transparent background with bg-black/90 for visibility against various background content.
The logo and navigation links change color on hover, improving interactivity.
Purpose:
This Navbar component is designed to be responsive and user-friendly. On larger screens, it displays the navigation links directly in the navbar, while on mobile devices, it provides a collapsible sidebar menu. This ensures the navigation is accessible and easy to use across different screen sizes.

*/