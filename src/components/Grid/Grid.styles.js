import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100%; //var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;
  //background: var(--darkGrey) dark theme;

  h1 {
    color: var(--darkGrey); //var(--white) dark theme;
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;
