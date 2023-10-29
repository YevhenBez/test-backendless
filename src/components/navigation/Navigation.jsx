import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul >
        <li>
          <NavLink to="/" >
                      <button type="button">dummyList</button>

          </NavLink>
        </li>
        <li>
          <NavLink to="/dummyTable" >
                      <button type="button">dummyTable</button>

          </NavLink>
        </li>
        <li>
          <NavLink to="/dummyChart" >
                      <button type="button">dummyChart</button>

          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;