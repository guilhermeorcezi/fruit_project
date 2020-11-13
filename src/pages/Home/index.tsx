import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import {
  Container,
  ImageContainer,
  FruitImage,
  Info,
  FruitTitle,
  FruitSynopsis,
} from './styles';

const Home: React.FC = () => {
  return (
    <ScrollView>
      <ImageContainer>
        <FruitImage
          source={{
            uri:
              'https://conteudo.imguol.com.br/c/entretenimento/32/2018/01/18/maca-1516308281068_v2_900x506.jpg',
          }}
          resizeMode="cover"
        />
      </ImageContainer>
      <Container>
        <Info>
          <FruitTitle>Maçã</FruitTitle>
          <FruitSynopsis>
            Ela povoa o imaginário popular e aparece em histórias diversas. É
            chamada de fruto proibido e já representou o pecado, sendo apontada
            como o motivo da expulsão de Adão e Eva do paraíso. Conta-se que os
            galhos da macieira serviam para fazer as varinhas dos druidas, os
            sábios celtas. Branca de Neve se deixou seduzir pela beleza do
            alimento. Também, reza a lenda, teria sido a fonte de inspiração
            para o cientista inglês Isaac Newton (a lei da gravidade).
          </FruitSynopsis>
          <FruitSynopsis>
            Muito além de narrativas fantásticas, a maçã combina com uma vida
            equilibrada. Ela oferece quercetina, antioxidante que blinda nossas
            células e previne o envelhecimento precoce. O mesmo ingrediente
            dificulta o acúmulo de gordura nas artérias.
          </FruitSynopsis>
          <FruitSynopsis>
            Claro que a fruta não se faz só de quercetina. Tanto a polpa quanto
            a casca guardam a pectina, um tipo de fibra que, não bastasse atuar
            em prol do coração, colabora para a saúde intestinal. Há evidências
            de que ajude inclusive a reduzir o risco de tumores no intestino.
          </FruitSynopsis>
          <FruitSynopsis>
            Pra completar, o vegetal entrega nutrientes que vão do potássio,
            mineral conhecido por abaixar a pressão arterial, até a badalada
            vitamina C , que favorece a beleza da pele, contribuindo no combate
            à flacidez. São os motivos que justificam um velho ditado
            estrangeiro: “Comer uma maçã por dia afasta o médico”!
          </FruitSynopsis>
        </Info>
      </Container>
    </ScrollView>
  );
};

export default Home;
