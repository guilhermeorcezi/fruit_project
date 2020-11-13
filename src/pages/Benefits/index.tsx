import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import {
  Container,
  ImageContainer,
  FruitImage,
  Info,
  FruitTitle,
  FruitSubtitle,
  FruitSynopsis,
} from './styles';

const Benefits: React.FC = () => {
  return (
    <ScrollView>
      <ImageContainer>
        <FruitImage
          source={{
            uri:
              'https://saude.abril.com.br/wp-content/uploads/2016/11/mac3a7c3a3.jpg?quality=85&strip=info&resize=680,453',
          }}
          resizeMode="cover"
        />
      </ImageContainer>
      <Container>
        <Info>
          <FruitTitle>Benefícios da Maçã</FruitTitle>
          <FruitSynopsis>
            Consumir Uma maçã por dia mantém você longe do médico. Esse
            provérbio inglês resume bem o que o alimento proporciona para o
            organismo. A maçã é uma fruta de origem asiática e há mais de sete
            mil espécies diferentes, cada uma com características específicas,
            mas com propriedades nutricionais semelhantes. Saborosa e prática de
            carregar, ela possui nutrientes importantes que estimulam o corpo a
            prevenir doenças.
          </FruitSynopsis>
          <FruitSubtitle>1. Previne doenças</FruitSubtitle>
          <FruitSynopsis>
            Consumir maçã ajuda a ter uma vida equilibrada e longe de doenças.
            Tanto a polpa quanto a casca são ricas em vitaminas C, sais minerais
            como cálcio, fósforo e potássio, além de fibras e um poderoso
            antioxidante, a quercetina.
          </FruitSynopsis>
          <FruitSubtitle>2. Melhora Função Celebral</FruitSubtitle>
          <FruitSynopsis>
            A quercetina (um dos antioxidantes encontrados em abundância nas
            maçãs) é um dos compostos que ajudam a reduzir a morte celular
            causada pela oxidação e inflamação dos neurônios.
          </FruitSynopsis>
          <FruitSubtitle>3. É boa para o coração</FruitSubtitle>
          <FruitSynopsis>
            Quem consome maçã tem menos riscos de ter problemas
            cardiovasculares. Isso acontece porque a fruta contém fibras
            solúveis, que reduzem os níveis de colesterol no sangue. Possui
            também polifenóis, que têm efeitos antioxidantes e pode diminuir a
            pressão arterial.
          </FruitSynopsis>
          <FruitSubtitle>4. Diminui o risco de diabetes</FruitSubtitle>
          <FruitSynopsis>
            De acordo com uma revisão de pesquisas realizada pela California
            State University, comer uma maçã por dia reduz o risco de
            desenvolver a doença em 28%. E até mesmo quem consumia apenas
            algumas maçãs por semana também estavam mais protegidos do diabetes.
            Acredita-se que os polifenóis presentes nas frutas previnam danos
            nos tecidos das células beta do pâncreas. Elas produzem insulina no
            corpo e são frequentemente prejudicadas nas pessoas com diabetes
            tipo 2.
          </FruitSynopsis>
        </Info>
      </Container>
    </ScrollView>
  );
};

export default Benefits;
