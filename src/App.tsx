import React from "react";
import "./App.css";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import background from "./images/background2.jpeg";
import { Card } from "./components/Card";
import { Main } from "./components/Main";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        minHeight: "100vh",
      }}
    >
      <Navbar />
      {/* <header className="App-header">
        <h1>Hi, I'm Hannah 👋🏼</h1>
        <p>Full-Stack Developer</p>
      </header> */}
      <Main>
        <Card>
          {/* <img src="https://i.pinimg.com/originals/b7/3e/62/b73e62da299075cc73f9c02dc081804a.png" /> */}
          <img src="https://s3.amazonaws.com/www-inside-design/uploads/2018/08/iphoneX_hero_floating_devices.png" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus est delectus quis nam et quod eius, iure necessitatibus
            incidunt, error, cupiditate facere fugiat veniam placeat sapiente?
            Sint consequatur asperiores numquam. Labore placeat deserunt eos qui
            voluptatem modi tempore voluptatum quibusdam odio voluptate
            consequatur, vel debitis asperiores ex ducimus sapiente facere?
            Quasi fugiat explicabo sit quidem veritatis cum veniam, dolor esse?
            Rerum, facere quibusdam?
            <code>Full Stack Developer</code>
          </p>
        </Card>
      </Main>
    </div>
  );
}

export default App;
