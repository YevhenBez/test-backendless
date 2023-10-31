import { StyledUl, StyledNavLink, StyledButton } from './Navigation.styled';

const Navigation = ({ dataTabs }) => {
  return (
    <nav>
      <StyledUl >
                {dataTabs.map(dataTab => (<li>
          <StyledNavLink key={dataTab.id} to={dataTab.id} >
                      <StyledButton type="button">{dataTab.title}</StyledButton>

          </StyledNavLink>
        </li>))}
      </StyledUl>
    </nav>
  );
};
export default Navigation;