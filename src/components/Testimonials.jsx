import React, { useState } from "react";
import placeholder from "assets/placeholder.png";
import testimonial1 from "assets/testimonial1.png";
import testimonial2 from "assets/testimonial2.png";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { testimonialsAnimation } from "animations";
import styled from "styled-components";
export default function Testimonials() {
  const [element, controls] = useScroll();

  const [selected, setSelected] = useState(0);
  const testimonials = [
    {
      designation: "Designer",
      name: "Marry Underwood",
      review:
        "Decided every couldn't a implemented the suspicion I the voices in blind solider, the project into taken is issued to assistant object anyone quitting social think, population accordingly of this from but his room uniforms yourself a if were english turner. Back yes, lady here.",
    },
    {
      designation: "Developer",
      name: "Richard Gates",
      review:
        "also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      designation: "Planner",
      name: "Selene Olivera",
      review:
        "also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
  return (
    <Section ref={element}>
      <div className="background">
        <img src={testimonial1} alt="background design" className="design1" />
        <img src={testimonial2} alt="background design" className="design2" />
      </div>
      <div className="container">
        <motion.div
          className="testimonials"
          variants={testimonialsAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
          whileInView={{ opacity: 1 }}
        >
          {testimonials.map((testimonial, index) => {
            return (
              <div
                className={`testimonial ${
                  selected === index ? "active" : "hidden"
                }`}
                key={index}
              >
                <div className="image">
                  <div className="circle1"></div>
                  <div className="circle2">
                    <img src={placeholder} alt="placeholder" />
                  </div>
                </div>
                <div className="title-container">
                  <span className="designation">{testimonial.designation}</span>
                  <h3 className="title">{testimonial.name}</h3>
                </div>
                <p className="description">{testimonial.review}</p>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          className="controls"
          variants={testimonialsAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
        >
          <button
            className={selected === 0 ? "active" : ""}
            onClick={() => {
              setSelected(0);
            }}
          ></button>
          <button
            className={selected === 1 ? "active" : ""}
            onClick={() => setSelected(1)}
          ></button>
          <button
            className={selected === 2 ? "active" : ""}
            onClick={() => setSelected(2)}
          ></button>
        </motion.div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  overflow: hidden;
  .background {
    position: relative;
    .design1 {
      position: absolute;
      left: 0rem;
      height: 35rem;
      top: 10rem;
    }
    .design2 {
      position: absolute;
      right: 0;
    }
  }
  .container {
    min-height: 100vh;
    background-color: var(--primary-color);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    .testimonials {
      display: flex;
      gap: 1rem;
      text-align: center;
      justify-content: center;
      width: 30%;

      .testimonial {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        .image {
          position: relative;
          .circle1 {
            position: absolute;
            left: -0.7rem;
            top: -0.7rem;
            height: 10rem;
            width: 10rem;
            border: 0.2rem solid white;
            border-radius: 10rem;
          }
          .circle2 {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 10rem;
            width: 10rem;
            border-radius: 10rem;
            background-color: #8860e6b0;
          }
        }
      }
      .hidden {
        display: none;
      }
      color: white;
      .designation {
        color: var(--secondary-color);
      }
      .description {
        height: 8rem;
      }
    }
    .controls {
      display: flex;
      gap: 1rem;
      button {
        padding: 0.5rem;
        border-radius: 1rem;
        background-color: var(--secondary-color);
        border: 0.1rem solid transparent;
        cursor: pointer;
      }
      .active {
        background-color: transparent;
        border: 0.1rem solid var(--secondary-color);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      display: none;
    }
    .container {
      padding: 4rem 0;
      .testimonials {
        width: 80%;
        .testimonial {
          .description {
            height: 18rem;
          }
        }
      }
    }
  }
`;
