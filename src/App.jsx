import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';

import Projects from './sections/Projects.jsx';
import MyComponent from './sections/MyApproach.jsx';
import Experience from './components/Experience.jsx'

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <MyComponent />

      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
