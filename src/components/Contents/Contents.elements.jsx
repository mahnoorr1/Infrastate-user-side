import styled, { css } from 'styled-components';

export const MainContainer = styled.div`
  background-color: var(--main-color);
  // height: 100vh - 68px;
  // width: 100vw - 180px;

  padding: ${(props) =>
    !props.active ? '200px' : 'calc(var(--nav-width))'};
  transition: 2s;
  padding-top: 3rem;
  padding-left: 225px;
  padding-right: 10px;
  @media only screen and (max-width: 768px) {

    padding: ${(props) => (props.active ? '0px' : '78px')};
    padding-top: 20px;
  
  }
`;
//
