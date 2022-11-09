import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setActiveSection } from 'PFStore/slices/navigationSlice';
import About from './sections/about';
import Contact from './sections/contact';
import Introduction from './sections/introduction';
import Projects from './sections/projects';

const Home = () => {
  const sectionRefs = useRef(new Array(4));
  const { activeSection } = useSelector((state) => state.navigation);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [activeSection]);

  const scrollHandler = () => {
    for (const section of sectionRefs.current) {
      const sectionOffsetBottom = section.getBoundingClientRect().bottom;
      if (sectionOffsetBottom > 1) {
        if (activeSection !== section.id) {
          dispatch(setActiveSection(section.id));
        }
        break;
      }
    }
  };

  return (
    <div className="home-screen">
      <Introduction ref={(el) => sectionRefs.current[0] = el} />
      <Projects ref={(el) => sectionRefs.current[1] = el} />
      <About ref={(el) => sectionRefs.current[2] = el} />
      <Contact ref={(el) => sectionRefs.current[3] = el} />
    </div>
  );
};

export default Home;
