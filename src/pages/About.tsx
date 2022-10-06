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

const About = () => {
  const { push } = useRouter();
  const goHome = () => {
    push("home", "/");
  };

  return (
    <Section>
      <h1>About</h1>
      <Button onClick={goHome}>Go home</Button>
    </Section>
  );
};

export default About;
