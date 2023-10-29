import { StyledUl, StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <StyledUl >
        <li>
          <StyledNavLink to="/" >
                      <button type="button">dummyList</button>

          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/dummyTable" >
                      <button type="button">dummyTable</button>

          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/dummyChart" >
                      <button type="button">dummyChart</button>

          </StyledNavLink>
        </li>
      </StyledUl>
    </nav>
  );
};
export default Navigation;