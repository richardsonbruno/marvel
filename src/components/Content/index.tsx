import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { Container, Title, Form, Main, Char } from './style';

const ts: number = 1597459267;
const hash: string = 'ee6f4caddd199115c85ec528fc65bbc4';
const apikey: string = '37331678db04339a51ff40e99c98818f';

interface CharacterModel {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

const Content: React.FC = () => {
  const [characters, setCharacters] = useState<CharacterModel[]>(() => {
    const storageMarvel = localStorage.getItem('@Marvel:characters');

    if (storageMarvel) {
      return JSON.parse(storageMarvel);
    } else {
      return [];
    }
  });

  useEffect(() => {
    (async () => {
      if (characters.length !== 0) {
        return;
      }

      const response = await api.get('/characters', {
        params: {
          apikey,
          ts,
          hash,
          limit: 12,
        },
      });

      const { results } = response.data.data;

      localStorage.setItem('@Marvel:characters', JSON.stringify(results));
      setCharacters(results);
    })();
  }, []);

  return (
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
        {characters.map(char => (
          <Char key={char.id}>
            <img
              src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
              alt={char.name}
            />
            <span>{char.name}</span>
            <p>{char.description}</p>
          </Char>
        ))}
      </Main>
    </Container>
  );
};

export default Content;
