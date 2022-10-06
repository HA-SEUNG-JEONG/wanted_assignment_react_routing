import styled from "styled-components";
import useRouter from "../hooks/useRouter";

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background-color: skyblue;
  border-radius: 10px;
  padding: 10px 10px;
  border: none;
  cursor: pointer;
`;

const Root = () => {
  const { push } = useRouter();

  const goAbout = () => {
    push("about", "/about");
  };
  return (
    <Section>
      <h1>Root</h1>
      <Button onClick={goAbout}>Go About</Button>
    </Section>
  );
};

export default Root;
