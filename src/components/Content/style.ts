import styled from 'styled-components';

export const Container = styled.main`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 6px 0 rgba(69, 91, 99, 0.08);
  margin: 40px auto auto;
  padding: 35px;
  max-width: 1320px;
`;

export const Title = styled.h1`
  font: 300 36px Roboto, sans-serif;
  line-height: 1.61;
  color: #ed1d24;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  position: relative;

  input {
    border: 0;
    height: 50px;
    width: 100%;
    max-width: 380px;
    border-right: 1px #f1f1f1 solid;
    border-bottom: 3px #9b9b9b solid;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .close {
    position: absolute;
    left: 340px;
    z-index: 99;
    cursor: pointer;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 40px;

    select {
      width: 60px;
      height: 30px;
      border: none;
      margin-left: 10px;
      option {
        font-size: 14px;
        text-transform: uppercase;
      }
    }

    .up {
      background: #fff;
      position: relative;
      margin-left: -24px;
      pointer-events: none;
    }
  }

  @media (max-width: 380px) {
    flex-flow: column nowrap;

    div {
      margin-top: 10px;
      margin-left: 0;
    }
  }
`;

export const Main = styled.section`
  margin-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: 290px 290px 290px 290px;
  grid-gap: 30px;

  @media (max-width: 1340px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 490px) {
    grid-template-columns: 1fr;
  }
`;

export const Char = styled.div`
  background: #fff;
  border: solid 1px #d8dde6;
  border-radius: 8px;
  border-bottom: 3px #ed1d24 solid;
  padding: 15px;

  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;

  img {
    border-radius: 50%;
    height: 56px;
    width: 56px;
  }

  span {
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.64;
    color: #ed1d24;
    margin-top: 15px;
    text-align: center;

    &::after {
      content: '';
      display: block;
      background-color: #f1f1f1;
      height: 3px;
      margin: 15px auto;
      width: 55px;
    }
  }

  p {
    font-family: Roboto, sans-serif;
    font-size: 14px;
    line-height: 1.64;
    text-align: center;
    height: 44px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #4a4a4a;
  }
`;
