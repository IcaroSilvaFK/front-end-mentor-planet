import { Container } from './styles/App.styles';

import { Card } from './components/Card';
import { useEffect, useState } from 'react';

interface IQuotableProps {
  content: string;
  length: number;
}

export function App() {
  const [quotable, setQuotable] = useState<IQuotableProps | null>(null);

  function handleGenNewAdviceGenerator() {
    console.log('a');
    fetch('https://api.quotable.io/random')
      .then((res) => res.json())
      .then((data) => setQuotable(data));
  }

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((res) => res.json())
      .then((data) => setQuotable(data));
  }, []);

  console.log(quotable);

  return (
    <Container>
      {quotable && (
        <Card
          length={quotable.length}
          message={quotable.content}
          onClick={handleGenNewAdviceGenerator}
        />
      )}
    </Container>
  );
}
