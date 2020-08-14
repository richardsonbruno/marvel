import styled from 'styled-components';

export const Head = styled.header`
  background-color: #ed1d24;
  height: 95px;
  width: 100%;
  transform: all 0.2s;

  display: flex;

  @media (max-width: 668px) {
    justify-content: center;
  }
`;

export const Logo = styled.img`
  max-width: 240px;
`;
