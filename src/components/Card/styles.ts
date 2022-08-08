import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.neutral.darkGrayishBlue};
  padding: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 10px;

  box-shadow: 0 0 15px ${({ theme }) => theme.colors.neutral.darkBlue};

  @media screen and (max-width: 500px) {
    width: 85%;

    margin: 0 auto;
  }
`;

export const SectionHeader = styled.div`
  color: ${({ theme }) => theme.colors.primary.neonGreen};
  text-align: center;

  padding: 12px 0;

  letter-spacing: 2px;
  font-size: 12px;
  font-weight: bold;
`;

export const SectionBody = styled.div`
  max-width: 450px;

  text-align: center;
  margin: o auto;

  padding: 12px 0;

  p {
    color: ${({ theme }) => theme.colors.primary.lightCyan};
    font-size: 28px;
    line-height: 150%;
  }
`;

export const Row = styled.div`
  margin: 12px 40px;

  width: 100%;
  height: 16px;

  background-image: url('/assets/pattern-divider-desktop.svg');
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 500px) {
    background-image: url('/assets/pattern-divider-mobile.svg');
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  margin-bottom: -55px;

  background: ${({ theme }) => theme.colors.primary.neonGreen};

  padding: 18px;
  border-radius: 100%;

  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: all linear 0.3s;

  :hover {
    box-shadow: 0 0 30px ${({ theme }) => theme.colors.primary.neonGreen};
  }
`;
