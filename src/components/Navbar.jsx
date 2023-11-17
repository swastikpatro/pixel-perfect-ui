import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { useResponsive } from '../hooks';
import { GoTriangleDown } from 'react-icons/go';

const Navbar = () => {
  const isMobile = useResponsive();

  return (
    <nav>
      <div className='section-center nav-center'>
        <h2 className='logo'>AIPatrn.</h2>

        {/* as this links are clickable, user can't turn on display: block using devtools */}
        {!isMobile && (
          <div className='links-container'>
            {NAV_LINKS.map(({ id, url, text }) => (
              <NavLink
                key={id}
                to={url}
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
              >
                {text}
              </NavLink>
            ))}
          </div>
        )}

        <button className='btn flex-center'>
          <span>Menu</span>
          <GoTriangleDown />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
