import styled from 'styled-components';
import {spacing} from 'design-system-styled-components';

export const StyledContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const StyledMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledNavigation = styled.nav`
  display: flex;
  color: white;
  justify-content: space-evenly;
  background-color: #6A81B4;
  
  ul {
    padding: 0;
  }
`;

export const StyledNavigationLink = styled.a`
  margin: ${spacing.medium};
  
  :hover, :focus {
    cursor: pointer;
    text-decoration: underline;
  }
`