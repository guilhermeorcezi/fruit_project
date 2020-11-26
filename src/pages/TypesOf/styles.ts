import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  z-index: 2;
  background: #fff;
  border-radius: 32px;
  border-top-color: #dcdce6;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 400px;
  z-index: 1;
`;

export const FruitImageContainer = styled.View`
  width: 100%;
  height: 250px;
  border-radius: 12px;
  margin-bottom: 20px;
`;

export const FruitBackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 105%;
`;

export const FruitImage = styled.Image`
  width: 100%;
  border-radius: 12px;
  height: 105%;
`;

export const Info = styled.View`
  padding: 20px 30px 20px 30px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FruitTitle = styled.Text`
  font-family: 'Archivo-Bold';
  font-size: 38px;
  margin-bottom: 20px;
  color: #28262e;
`;

export const FruitSubtitle = styled.Text`
  font-family: 'Archivo-SemiBold';
  font-size: 24px;
  margin: 20px 0;
  color: #d73535;
`;

export const FruitH3 = styled.Text`
  font-family: 'Archivo-SemiBold';
  font-size: 18px;
  margin: 20px 0;
  color: #d73535;
`;

export const FruitSynopsis = styled.Text`
  margin-bottom: 0px;
  color: #6a6180;
  line-height: 32px;
  font-size: 18px;
  text-align: justify;
`;
