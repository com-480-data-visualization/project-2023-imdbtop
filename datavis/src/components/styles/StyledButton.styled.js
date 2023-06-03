import styled from 'styled-components';
export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const StyledButton = styled.button`
background-color: ${({ theme }) => theme.colors.primary};
color: ${({ theme }) => theme.colors.textLight};
font-size: 16px;
padding: 12px 24px;
border: none;
border-radius: 4px;
cursor: pointer;
transition: background-color 0.3s ease;

&:hover {
  background-color: ${({ theme }) => theme.colors.primaryHover};
}

&:focus {
  outline: none;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryFocus};
}

/* Center the button horizontally and vertically */
display: flex;
justify-content: center;
align-items: center;
`;



