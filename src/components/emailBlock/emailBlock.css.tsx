import styled from 'styled-components';
import { RemoveIcon } from 'components/svg';

export const Container = styled.div`
  display: flex;
  padding: 0 0.625rem;
  height: 1.5rem;
  background: rgba(102, 153, 255, 0.2);
  border-radius: 0.75rem;
  align-items: center;
`;

export const Text = styled.span`
  flex: 1;
  font-size: 0.875rem;
  line-height: 1.5rem;
`;

export const DeleteButton = styled.button`
  flex: 0 0 0.75rem;
`;

export const DeleteIcon = styled(RemoveIcon)`
  width: 0.5rem;
  height: 0.5rem;
`;
