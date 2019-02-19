import styled from 'styled-components';

const Wrapper = styled.div`
  width: 1000px;
  margin: 50px auto;
  display: flex;
  border: 1px solid ${props => props.theme.borderColor}; 
  background-color: ${props => props.theme.backgroundColor}; 
`;

export default Wrapper;