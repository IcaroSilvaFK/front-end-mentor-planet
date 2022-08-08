import { createGlobalStyle } from 'styled-components';

export const GlobalCSS = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box
  }

  body,#root{
    width: 100%;
    height: 100vh;

    background: ${({ theme }) => theme.colors.neutral.darkBlue};
    font-family: ${({ theme }) => theme.fonts.monrope};
  }
`;
