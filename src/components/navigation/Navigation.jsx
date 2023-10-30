import { StyledUl, StyledNavLink } from './Navigation.styled';

const Navigation = ({ dataTabs }) => {
  return (
    <nav>
      <StyledUl >
                {dataTabs.map(dataTab => (<li>
          <StyledNavLink key={dataTab.id} to={dataTab.id} >
                      <button type="button">{dataTab.title}</button>

          </StyledNavLink>
        </li>))}
      </StyledUl>
    </nav>
  );
};
export default Navigation;