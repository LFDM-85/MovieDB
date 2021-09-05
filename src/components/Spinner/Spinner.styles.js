import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 20px;
`;

export const Content = styled.div`
  border: 5px solid var(--medGrey);
  border-top: 5px solid var(--lightGrey);
  border-radius: 50px;
  width: 50px;
  height: 50px;
  animation: spin 0.8s linear infinite;
  margin: 0px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
