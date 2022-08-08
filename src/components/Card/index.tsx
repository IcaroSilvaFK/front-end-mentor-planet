import { useEffect, useState } from 'react';
import { Container, SectionHeader, SectionBody, Row, Button } from './styles';

interface ICardProps {
  length: number;
  message: string;
  onClick(): void;
}

export function Card({ message, onClick, length }: ICardProps) {
  return (
    <Container>
      <SectionHeader>
        <span>ADIVICE #{length}</span>
      </SectionHeader>
      <SectionBody>
        <p>"{message}"</p>
      </SectionBody>
      <Row />

      <Button onClick={onClick}>
        <img src='/assets/icon-dice.svg' alt='icon-dice' />
      </Button>
    </Container>
  );
}
