import React from 'react';

import {
  Container,
  Hornaments,
  HornamentOne,
  HornamentTwo,
  HornamentTree,
  HornamentFor,
  SiteTitle,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Hornaments>
        <HornamentOne />
        <HornamentTwo />
        <HornamentTree />
        <HornamentFor />
      </Hornaments>
      <SiteTitle>POKEDEX store</SiteTitle>
    </Container>
  );
};

export default Header;
