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

export const FruitImage = styled.ImageBackground`
  width: 100%;
  height: 105%;
`;

export const Info = styled.View`
  padding: 20px 30px 20px 30px;
`;

export const FruitTitle = styled.Text`
  font-family: 'Archivo-Bold';
  font-size: 38px;
  color: #28262E;
  margin-bottom: 0;
`;

export const FruitSynopsis = styled.Text`
  margin-top: 10px;
  color: #6a6180;
  line-height: 32px;
  font-size: 18px;
  text-align: justify;
`;
