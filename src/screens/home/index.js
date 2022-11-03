import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setActiveSection } from 'PFStore/slices/navigationSlice';
import Introduction from './sections/Introduction';
import Projects from './sections/Projects';

const Home = () => {
  const sectionRefs = useRef(new Array(2));
  const { activeSection } = useSelector((state) => state.navigation);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [activeSection]);

  const scrollHandler = () => {
    for (const section of sectionRefs.current) {
      if (window.pageYOffset < section.offsetHeight) {
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
    </div>
  );
};

export default Home;
