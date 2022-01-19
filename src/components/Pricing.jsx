import React from "react";
import styled from "styled-components";
import play from "assets/play.png";
export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: 9,
    },
    {
      name: "Pro",
      price: 29,
    },
    {
      name: "Expert",
      price: 49,
    },
  ];
  const data = [
    {
      value: "25 Users per Project",
      type: "Basic",
    },
    {
      value: "100 Projects",
      type: "Basic",
    },
    {
      value: "10 TB Cloud Storage",
      type: "Basic",
    },
    {
      value: "50 Reports",
      type: "Basic",
    },
    {
      value: "100 GB Bandwidth",
      type: "Basic",
    },
    {
      value: "50 Support Tickets",
      type: "Basic",
    },
    {
      value: "Online Support",
      type: "Pro",
    },
    {
      value: "Daily Backup",
      type: "Pro",
    },
    {
      value: "Priority Assistance",
      type: "Expert",
    },
    {
      value: "One Click Setup",
      type: "Expert",
    },
  ];

  return (
    <Section>
      <div className="pricing">
        {plans.map(({ name, price }) => {
          return (
            <div className="pricing__plan" key={name}>
              <div className="pricing__plan__name">
                <h2>{name}</h2>
                <div className="pricing__plan__name__price">
                  <span>$</span>
                  <p>{price}</p>
                </div>
              </div>
              <ul className={`pricing__plan__features ${name}`}>
                {data.map(({ value, type }) => {
                  return (
                    <>
                      {name === "Basic" ? (
                        type === name ? (
                          <li>{value}</li>
                        ) : (
                          <li className="line">{value}</li>
                        )
                      ) : name === "Pro" ? (
                        type === "Basic" || type === name ? (
                          <li>{value}</li>
                        ) : (
                          <li className="line">{value}</li>
                        )
                      ) : (
                        name === "Expert" && <li>{value}</li>
                      )}
                    </>
                  );
                })}
              </ul>
              <div className="pricing__plan__actions">
                <span>Order Now</span>
                <img src={play} alt="order now" />
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  .pricing {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    &__plan {
      &__name {
        background-color: var(--primary-color);
        width: 15rem;
        height: 15rem;
        border-radius: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: var(--secondary-color);
        h2 {
          font-size: 2rem;
          line-height: 1.3rem;
        }
        &__price {
          color: white;
          display: flex;
          position: relative;
          span {
            position: absolute;
            top: 1rem;
            left: -0.9rem;
            font-size: 1.3rem;
          }
          p {
            font-size: 4rem;
            font-weight: bold;
          }
        }
      }
      &__features {
        list-style-type: none;
        border-right: 0.2rem solid var(--primary-color);

        .line {
          text-decoration: line-through;
        }
      }
      .Expert {
        border: none;
      }
    }
  }
`;
