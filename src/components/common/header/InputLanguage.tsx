import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 44px;
  height: 44px;
`;

export default function InputLanguage() {
  const [isKorean, setIsKorean] = useState(false);

  useEffect(() => {
    document.addEventListener('compositionupdate', (e) => {
      setIsKorean(true);
    });

    return () => {
      document.removeEventListener(('compositionupdate'), (e) => {
        setIsKorean(true);
      });
    };
  }, []);

  return (
    <Container className="한영키">
      <p>{isKorean ? '한' : 'ENG'}</p>
    </Container>
  );
}
