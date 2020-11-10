import styled from 'styled-components';
import InputBocComponent from 'components/inputbox';

export const Container = styled.ul`
  display: block;
  background: #fff;
  border: 1px solid rgb(195, 194, 207);
  border-radius: 0.25rem;
`;

export const BoxItem = styled.li`
  display: inline-block;
  padding: 0.25rem;
`;

export const InputBox = styled(InputBocComponent)`
  width: 8rem;
`;
