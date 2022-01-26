import React from "react";
import styled from "styled-components";
import Title from "./Title";
import placeholder from "assets/placeholder.png";
import play from "assets/play.png";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { blogsAnimations } from "animations";

export default function Blog() {
  const [element, controls] = useScroll();
  const blogsData = [
    {
      title: "Summer trip to mountains",
      type: "Adeventure",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores deleniti rem delectus optio harum omnis veniam adipisci ducimus deserunt repudiandae?",
    },
    {
      title: "Flowers purple from sky",
      type: "Personal",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam debitis consectetur ex tempora voluptatum deleniti, officiis dicta eos illo adipisci!",
    },
    {
      title: "Rock conert main stage",
      type: "Music",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea est repudiandae nesciunt mollitia ad molestias dignissimos praesentium fugit reiciendis quis?",
    },
  ];
  return (
    <Section id="blog" ref={element}>
      <Title value="Blog" />
      <div className="decoration"></div>
      <div className="blogs">
        {blogsData.map(({ title, type, description }) => {
          return (
            <motion.div
              className="blog"
              key={title}
              variants={blogsAnimations}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="image">
                <img src={placeholder} alt="Placeholder" />
              </div>
              <div className="title">
                <h3>{title}</h3>
              </div>
              <span className="type">{type}</span>
              <div className="description">
                <p>{description}</p>
              </div>
              <div className="more">
                <img src={play} alt="play" />
                <span>Read more</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  position: relative;
  .decoration {
    position: absolute;
    height: 20rem;
    width: 70vw;
    border: 0.5rem solid var(--secondary-color);
    left: 15%;
    top: -2rem;
  }
  .blogs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin: 5rem 20rem;
    .blog {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .image {
        height: 22rem;
        background-color: #a686f0af;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .title {
        h3 {
          color: var(--secondary-color);
          font-size: 2rem;
        }
      }
      .type {
        color: var(--primary-color);
        font-weight: bolder;
        text-transform: uppercase;
      }
      .description {
        height: 10rem;
        color: var(--primary-color);
      }
      .more {
        display: flex;
        align-items: center;
        gap: 1rem;
        cursor: pointer;
        span {
          letter-spacing: 0.1rem;
          text-transform: uppercase;
          color: var(--primary-color);
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 0;
    .decoration {
      display: none;
    }
    .blogs {
      padding: 0 2rem;
      grid-template-columns: 1fr;
      margin: 0 1rem;
    }
  }
`;
