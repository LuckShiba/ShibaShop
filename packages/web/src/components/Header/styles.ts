import styled from 'styled-components';

export default styled.div`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  height: 20px;
`;
