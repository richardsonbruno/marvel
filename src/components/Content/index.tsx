import React from 'react';

import { Container, Title, Form, Main, Char } from './style';

const Content = () => (
  <Container>
    <Title>Character</Title>

    <Form>
      <input type="text" placeholder="Characters" />

      <div>
        <select>
          <option value="a-z">A-Z</option>
        </select>
      </div>
    </Form>

    <Main>
      <Char>
        <img
          src="https://pbs.twimg.com/profile_images/1094413755637735425/wnAwaeXh_400x400.jpg"
          alt="Miranha"
        />
        <span>Peter Paker</span>
        <p>Descrição do Personagem Lorem ipsum dolor sit amet, consectetur</p>
      </Char>
    </Main>
  </Container>
);

export default Content;
