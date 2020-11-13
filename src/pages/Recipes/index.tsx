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

const Recipes: React.FC = () => {
  return (
    <ScrollView>
      <ImageContainer>
        <FruitBackgroundImage
          source={{
            uri:
              'https://www.receitasnestle.com.br/images/default-source/recipes/torta_classica_de_maca.jpg',
          }}
          resizeMode="cover"
        />
      </ImageContainer>
      <Container>
        <Info>
          <FruitTitle>Receitas</FruitTitle>
          <FruitSynopsis>
            Algumas dicas saborosas envolvendo maçã e seu modo de preparo.
          </FruitSynopsis>

          <FruitSubtitle>Tortinha folhada de maçã</FruitSubtitle>
          <FruitImageContainer>
            <FruitImage
              source={{
                uri:
                  'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2020/06/30/rolinho-maca-canela.jpg',
              }}
              resizeMode="cover"
            />
          </FruitImageContainer>
          <Row>
            <FruitSynopsis>50 min</FruitSynopsis>
            <FruitSynopsis>10 unidades</FruitSynopsis>
            <FruitSynopsis>Fácil</FruitSynopsis>
          </Row>
          <FruitH3>Ingredientes</FruitH3>
          <FruitSynopsis>1 pacote de massa folhada (400g)</FruitSynopsis>
          <FruitSynopsis>Manteiga para untar</FruitSynopsis>
          <FruitSynopsis>3 maçãs</FruitSynopsis>
          <FruitSynopsis>Groselha para pincelar</FruitSynopsis>
          <FruitSynopsis>Creme</FruitSynopsis>
          <FruitSynopsis>1 xícara (chá) de doce de leite cremoso</FruitSynopsis>
          <FruitSynopsis>1/2 caixa de creme de leite (100g)</FruitSynopsis>
          <FruitSynopsis>1 ovo</FruitSynopsis>
          <FruitSynopsis>1 pitada de flor de sal</FruitSynopsis>

          <FruitH3>Modo de preparado</FruitH3>

          <FruitSynopsis>
            Bata todos os ingredientes do creme no liquidificador até ficar
            homogêneo. Reserve. Abra a massa folhada conforme as instruções da
            embalagem e forre forminhas individuais de aro removível untadas.
            Divida o creme de doce de leite entre as massas e reserve. Corte as
            maçãs ao meio e retire as sementes. Corte as metades das maçãs em
            fatias finas e arrume sobre as tortinhas formando flores. Pincele
            com a groselha e leve ao forno médio, preaquecido, por 20 minutos ou
            até firmar e dourar. Retire, deixe amornar desenforme e sirva.
          </FruitSynopsis>

          <FruitSubtitle>Bolo de maçã com aveia</FruitSubtitle>
          <FruitImageContainer>
            <FruitImage
              source={{
                uri:
                  'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2020/06/30/donuts-maca-1.jpg',
              }}
              resizeMode="cover"
            />
          </FruitImageContainer>
          <Row>
            <FruitSynopsis>1h 20min</FruitSynopsis>
            <FruitSynopsis>10 porções</FruitSynopsis>
            <FruitSynopsis>Fácil</FruitSynopsis>
          </Row>

          <FruitH3>Ingredientes</FruitH3>
          <FruitSynopsis>3 ovos (claras e gemas separadas)</FruitSynopsis>
          <FruitSynopsis>1/2 xícara (chá) de manteiga</FruitSynopsis>
          <FruitSynopsis>2 xícaras (chá) de açúcar</FruitSynopsis>
          <FruitSynopsis>1 colher (chá) de canela</FruitSynopsis>
          <FruitSynopsis>2 xícaras (chá) de farinha de trigo</FruitSynopsis>
          <FruitSynopsis>1 xícara (chá) de aveia em flocos</FruitSynopsis>
          <FruitSynopsis>2 xícaras (chá) de leite</FruitSynopsis>
          <FruitSynopsis>2 maçãs sem sementes picadas</FruitSynopsis>
          <FruitSynopsis>
            1/2 xícara (chá) de uva-passa preta sem sementes
          </FruitSynopsis>
          <FruitSynopsis>1 colher (sopa) de fermento em pó</FruitSynopsis>
          <FruitSynopsis>
            Margarina e farinha de trigo para untar e enfarinhar
          </FruitSynopsis>

          <FruitH3>Modo de preparado</FruitH3>

          <FruitSynopsis>
            Na batedeira, bata as claras em neve e reserve. Na batedeira, em
            outra tigela, bata as gemas, a manteiga, o açúcar e a canela até que
            fique um creme esbranquiçado e fofo. Acrescente a farinha e a aveia
            alternando com o leite até ficar homogêneo. Junte a maçã, as
            uvas-passas, o fermento e misture com uma colher. Adicione as claras
            em neve e misture delicadamente. Coloque em uma fôrma de buraco no
            meio de 26cm de diâmetro untada e enfarinhada. Leve ao forno médio,
            preaquecido, por 35 minutos ou até que ao enfiar um palito, ele saia
            limpo. Retire do forno, deixe esfriar, desenforme e sirva.
          </FruitSynopsis>
        </Info>
      </Container>
    </ScrollView>
  );
};

export default Recipes;
