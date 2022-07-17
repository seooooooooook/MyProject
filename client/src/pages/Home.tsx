import React from "react";
//eslint-disabled
import Section from "../components/home/Section";
import "../assets/section.css";

const Home = () => {
  return (
    <div>
      <Section color="pink" className="section main">
        <h1>Main</h1>
      </Section>
      <Section color="purple" className="section about">
        <h1>About</h1>
      </Section>
      <Section color="green" className="section team">
        <h1>Team</h1>
      </Section>
      <Section color="blue" className="section contact">
        <h1>Contact</h1>
      </Section>
    </div>
  );
};

export default Home;
