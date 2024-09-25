// {Footer component: Link to github,linkedin & insta and copyright}

import Insta from '../assets/instagram.svg'
import Linked_in from '../assets/LinkedIn_Logo.webp'
import GitHub from '../assets/github.svg'
const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href='https://github.com/ParthByteBard' target='_blank'>
          <div className="social-icon">
            <img src={GitHub} alt="github" className="w-1/2 h-1/2" />
          </div>
        </a>
        <a href='https://www.linkedin.com/in/parth-satvekar/' target='_blank'>
          <div className="social-icon">
            <img src={Linked_in} alt="twitter" className="w-1/2 h-1/2" />
          </div>
        </a>
        <a href='https://www.instagram.com/parth_satvekar' target='_blank'>
          <div className="social-icon">
            <img src={Insta} alt="instagram" className="w-1/2 h-1/2" />
          </div>
        </a>

      </div>

      <p className="text-white-500">© 2024 Parth Satvekar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
