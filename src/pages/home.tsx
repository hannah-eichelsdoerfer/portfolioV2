import { Main } from "../styles/Main";
import { WelcomeBanner } from "../styles/Headers";

const HomePage = () => {
  return (
    <Main>
      <WelcomeBanner className="App-header">
        <h1>Hi, I'm Hannah 👋🏼</h1>
        <p>
          <code>Full-Stack Developer</code>
        </p>
      </WelcomeBanner>
    </Main>
  );
};

export default HomePage;
