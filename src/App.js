import styled from "styled-components";

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor.light};
`;

function App() {
  return <AppWrapper></AppWrapper>;
}

export default App;
