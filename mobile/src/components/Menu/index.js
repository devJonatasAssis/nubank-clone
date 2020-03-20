import React from 'react';
import { Container, Code } from './styles';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode value="https://google.com.br" size={80} bgColor="#FFF"/>
      </Code>
    </Container>
  );
}
