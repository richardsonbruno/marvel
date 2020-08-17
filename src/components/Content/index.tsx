import React, { useEffect, useState } from 'react';
import { FiFilter, FiChevronUp, FiXCircle } from 'react-icons/fi';
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
  const [select, setSelect] = useState(() => {
    return localStorage.getItem('@Marvel:select');
  });

  const [characters, setCharacters] = useState<CharacterModel[]>(() => {
    const storageMarvel = localStorage.getItem('@Marvel:characters');

    if (storageMarvel) {
      return JSON.parse(storageMarvel);
    } else {
      return [];
    }
  });

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);

      const response = await api.get('/characters', {
        params: {
          apikey,
          ts,
          hash,
          limit: 12,
          orderBy: select,
        },
      });

      const { results } = response.data.data;

      setCharacters(results);

      localStorage.setItem('@Marvel:characters', JSON.stringify(results));
      setLoading(false);
    })();
  }, [select]);

  function handleCharactersOrder(event: any) {
    setLoading(true);
    setSelect(event.target.value);
    localStorage.setItem('@Marvel:select', event.target.value);
    setLoading(false);
  }

  async function handleInputName(event: any) {
    event.preventDefault();
    setLoading(true);

    const response = await api.get('/characters', {
      params: {
        apikey,
        ts,
        hash,
        nameStartsWith: input,
      },
    });

    const { results } = response.data.data;

    setCharacters(results);

    localStorage.setItem('@Marvel:characters', JSON.stringify(results));
    setLoading(false);
  }

  function removeCharacter() {
    setLoading(true);
    setSelect('');
    setInput('');
    setLoading(false);
  }

  return (
    <Container>
      <Title>Character</Title>

      <Form onSubmit={handleInputName}>
        <input
          type="text"
          placeholder="Characters"
          value={input}
          onChange={e => setInput(e.target.value)}
        />

        {input && (
          <FiXCircle
            size={20}
            color="#ed1d24"
            className="close"
            onClick={removeCharacter}
          />
        )}

        <div>
          <FiFilter size={24} color="#ed1d24" />
          <select onChange={handleCharactersOrder}>
            <option value="name">A-Z</option>
            <option value="-name">Z-A</option>
          </select>
          <FiChevronUp size={24} className="up" color="#c2c5c7" />
        </div>
      </Form>

      <Main>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          characters.map(char => (
            <Char key={char.id}>
              <img
                src={`${char.thumbnail.path}/standard_medium.${char.thumbnail.extension}`}
                alt={char.name}
              />
              <span>{char.name}</span>
              <p>{char.description}</p>
            </Char>
          ))
        )}
      </Main>
    </Container>
  );
};

export default Content;
