import React from 'react';

import logoMarvel from '../../assets/marvel.svg';

import { Head, Logo } from './style';

const Header: React.FC = () => (
  <Head>
    <Logo src={logoMarvel} alt="Marvel" />
  </Head>
);

export default Header;
