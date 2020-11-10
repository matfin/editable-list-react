import styled from 'styled-components';

export const Input = styled.input`
  padding: 0 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5rem;
  border: 0;

  &::placeholder {
    color: rgb(195,194,207);
  }

  &:focus {
    outline: none;
  }
`;
