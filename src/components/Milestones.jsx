import React from "react";
import styled from "styled-components";
import milestone1 from "assets/milestone1.png";
import milestone2 from "assets/milestone2.png";
import milestone3 from "assets/milestone3.png";
import milestoneBackround from "assets/milestone-background.png";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { milestoneAnimations } from "animations";

function Milestones() {
  const [element, controls] = useScroll();
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
    <Section ref={element}>
      <div className="background">
        <img src={milestoneBackround} alt="Milestone Background" />
      </div>
      <div className="milestones">
        {milestone.map((ms) => {
          return (
            <motion.div
              className="milestone"
              key={ms.data}
              variants={milestoneAnimations}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
            >
              <p>{ms.amount}</p>
              <span>{ms.data}</span>
              <img src={ms.image} alt="milestone image" />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 100vh;
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
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 5rem 2rem;
    min-height: 100vh;
    height: 100%;
    .background {
      display: none;
    }
    .milestones {
      grid-template-columns: 1fr;
      gap: 5rem;
    }
  }
`;

export default Milestones;
