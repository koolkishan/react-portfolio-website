import React from "react";
import styled from "styled-components";
import service1 from "assets/service1.png";
import service2 from "assets/service2.png";
import service3 from "assets/service3.png";
import play from "assets/play.png";

function Services() {
  const data = [
    {
      type: "Design",
      text: "Bearable only through love of hydrogen atoms bits of moving fluff culture shores of the on cosmic ocean blue sky.",
      image: service1,
    },
    {
      type: "Code",
      text: "Global death rich in heavy with pretty stories for which is on there's little good evidencesomething incredible sea.",
      image: service2,
    },
    {
      type: "Support",
      text: "Evidence something incrediblewaiting to be known not a sunbut a galaxyrise shores of thecosmic mountian peak.",
      image: service3,
    },
  ];
  return (
    <Section>
      <div className="title">
        <span>Services</span>
      </div>
      <div className="services">
        {data.map((service, index) => {
          return (
            <div className="services__service" key={service.type}>
              <div className="services__service__image">
                <div className="services__service__image__gradient"></div>
                <img src={service.image} alt="service" />
              </div>
              <div className="services__service__title">
                <span>0{index + 1}</span>
                <h2>{service.type}</h2>
              </div>
              <p className="services__service__description">{service.text}</p>
              <img src={play} alt="Play" />
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  position: relative;
  width: 100%;
  .title {
    position: absolute;
    top: 35%;
    left: -15%;
    span {
      display: block;
      transform: rotate(-90deg);
      text-transform: uppercase;
      font-weight: 100;
      font-size: 8rem;
      color: var(--secondary-color);
    }
  }
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 100%;
    margin: 0 14rem;
    margin-top: 10rem;
    gap: 8rem;
  }
`;

export default Services;
