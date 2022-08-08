import { useEffect, useState } from 'react';
import { Container, SectionHeader, SectionBody, Row, Button } from './styles';

interface ICardProps {
  length: number;
  message: string;
  onClick(): void;
}

export function Card({ message, onClick, length }: ICardProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', isMobileWindow);

    return () => {
      window.removeEventListener('resize', isMobileWindow);
    };
  }, []);

  function isMobileWindow() {
    if (window.innerWidth <= 500) {
      setIsMobile(true);
    }
  }

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
