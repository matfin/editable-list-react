import styled, { css } from 'styled-components';
import { RemoveIcon } from 'components/svg';

interface StyleProps {
  isValidEmail: boolean;
}

export const Container = styled.div<StyleProps>`
  display: flex;
  height: 1.5rem;
  align-items: center;

  ${({ isValidEmail }: StyleProps) => isValidEmail && css`
    padding: 0 0.625rem;
    background: rgba(102, 153, 255, 0.2);
    border-radius: 0.75rem;
  `}
`;

export const Text = styled.span<StyleProps>`
  flex: 1;
  font-size: 0.875rem;
  line-height: 1.5rem;

  ${({ isValidEmail }: StyleProps) => !isValidEmail && css`
    border-bottom: 1px dashed #d92929;
  `}
`;

export const DeleteButton = styled.button`
  flex: 0 0 0.75rem;
  height: 1.5rem;
`;

export const DeleteIcon = styled(RemoveIcon)`
  width: 0.5rem;
  height: 0.5rem;
  margin-left: 0.5rem;
`;
