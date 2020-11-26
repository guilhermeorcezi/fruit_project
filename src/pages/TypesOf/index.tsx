import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import {
  Container,
  ImageContainer,
  FruitBackgroundImage,
  FruitImage,
  FruitImageContainer,
  Info,
  Row,
  FruitTitle,
  FruitSubtitle,
  FruitH3,
  FruitSynopsis,
} from './styles';

const TypesOf: React.FC = () => {
  return (
    <ScrollView>
      <ImageContainer>
        <FruitBackgroundImage
          source={{
            uri:
              'https://i1.wp.com/reportersombra.com/wp-content/uploads/2015/06/DR_ohomemqueestaasalvarasmacas_destaque.jpg?resize=780%2C450&ssl=1',
          }}
          resizeMode="cover"
        />
      </ImageContainer>
      <Container>
        <Info>
          <FruitTitle>Tipos</FruitTitle>
          <FruitSynopsis>
            Alguns dos tipos mais comuns de maçãs.
          </FruitSynopsis>

          <FruitSubtitle>Ambrosia</FruitSubtitle>
          <FruitImageContainer>
            <FruitImage
              source={{
                uri: 'https://img.ibxk.com.br/2014/08/21/21163911113715.JPG',
              }}
              resizeMode="cover"
            />
          </FruitImageContainer>

          <FruitSynopsis>
            Essas maçãs foram descobertas na Colúmbia Britânica, no Canadá, por
            meio de uma muda selecionada. Elas receberam o nome de Ambrosia, que
            significa “Comida dos deuses”, pois elas são muito belas, com sua
            pele rosa quase florescente e formato cônico. Além disso, elas
            possuem um suco doce que lembra o sabor de mel e um aroma muito
            distinto.
          </FruitSynopsis>

          <FruitSubtitle>Arkansas Black</FruitSubtitle>
          <FruitImageContainer>
            <FruitImage
              source={{
                uri:
                  'https://img.ibxk.com.br/2014/08/21/21164004933717.jpg?w=1040',
              }}
              resizeMode="cover"
            />
          </FruitImageContainer>

          <FruitSynopsis>
            A fruta é originária do estado de Arkansas, nos EUA. Sua principal
            diferença o com relação às outras maçãs é a cor de sua pele, em tom
            de vinho. A casca da Arkansas Black fica mais escura conforme ela
            amadurece. Quando estão frescas, as maçãs desse tipo são azedinhas e
            saborosas. Bem armazenadas, elas podem durar até 6 meses.
          </FruitSynopsis>

          <FruitSubtitle>Braeburn</FruitSubtitle>
          <FruitImageContainer>
            <FruitImage
              source={{
                uri:
                  'https://img.ibxk.com.br/2014/08/21/21164119174719.jpg?w=1040',
              }}
              resizeMode="cover"
            />
          </FruitImageContainer>

          <FruitSynopsis>
            Essa espécie de maçã é uma das mais tradicionais no mercado, tendo
            origem na Nova Zelândia. Sua casca é facilmente identificável, pois
            apresenta uma série de listras laranjas e vermelhas em um fundo
            verde ou amarelo. Além disso, elas possuem um sabor um tanto doce e
            picante.
          </FruitSynopsis>

          <FruitSubtitle>Calville Blanc d'Hiver</FruitSubtitle>
          <FruitImageContainer>
            <FruitImage
              source={{
                uri:
                  'https://img.ibxk.com.br/2014/08/21/21164246254723.jpg?w=1040',
              }}
              resizeMode="cover"
            />
          </FruitImageContainer>

          <FruitSynopsis>
            Originárias da França, as Calville Blanc d'Hiver são consideradas as
            melhores maçãs para o preparo de sobremesas. Entretanto, elas não
            possuem uma aparência nada bonita, com diversos caroços e um formato
            bastante disforme. A casca é verde com alguns toques de vermelho –
            quando estão novas, elas possuem uma coloração mais amarelada.
          </FruitSynopsis>
        </Info>
      </Container>
    </ScrollView>
  );
};

export default TypesOf;
