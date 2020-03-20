import React from 'react';
import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

export default function Main() {
    return (
        <Container>
            <Header />
            <Content>
                <Menu />
                <Card>
                    <CardHeader>
                        <Icon name="attach-money" size={28} color="#666" />
                        <Icon name="visibility-off" size={28} color="#666" />
                    </CardHeader>

                    <CardContent>
                        <Title>Saldo Disponivel</Title>
                        <Description>R$ 1.5000.000,00</Description>
                    </CardContent>

                    <CardFooter>
                        <Annotation>
                            Transferencia de R$ 20,00 recebida de Marta Betania as 22:00h
                        </Annotation>
                    </CardFooter>
                </Card>
            </Content>
            <Tabs />
        </Container>
    )
}