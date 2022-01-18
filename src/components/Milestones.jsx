import React from "react";
import styled from "styled-components";
import milestone1 from "assets/milestone1.png";
import milestone2 from "assets/milestone2.png";
import milestone3 from "assets/milestone3.png";
import milestoneBackround from "assets/milestone-background.png";

function Milestones() {
  const milestone = [
    {
      image: milestone1,
      data: "Cleints Served",
      amount: "407",
    },
    {
      image: milestone2,
      data: "of raw data",
      amount: "10T",
    },
    {
      image: milestone3,
      data: "recommendation",
      amount: "235",
    },
  ];
  return (
    <Section>
      <div className="background">
        <img src={milestoneBackround} alt="Milestone Background" />
      </div>
      <div className="milestones">
        {milestone.map((ms) => {
          return (
            <div className="milestone" key={ms.data}>
              <p>{ms.amount}</p>
              <span>{ms.data}</span>
              <img src={ms.image} alt="milestone image" />
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 80vh;
  background-color: var(--primary-color);
  padding: 0 10rem;
  position: relative;
  overflow: hidden;
  .background {
    position: absolute;
    left: 0;
    bottom: -30%;
    img {
      z-index: 2;
      height: 43rem;
    }
  }
  .milestones {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    color: white;
    align-items: center;
    height: 100%;
    .milestone {
      z-index: 20;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;

      p {
        font-size: 5rem;
        font-weight: bolder;
        line-height: 3rem;
      }
      span {
        text-transform: uppercase;
        color: #ffffffc7;
      }
      img {
        height: 6rem;
      }
    }
  }
`;

export default Milestones;
