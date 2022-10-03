import styled from "styled-components";

export const CoffeeCardContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 256px;
  align-items: center;

  padding: 1.5rem;

  background: ${({ theme }) => theme.dynamic.card};
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;

  > section {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-wrap: wrap;
    flex-shrink: 1;

    gap: 0.5rem;
    margin-bottom: 1rem;

    > small {
      color: ${({ theme }) => theme.fixed.yellow_dark};
      background: ${({ theme }) => theme.fixed.yellow_light};

      padding: 0.25rem 0.5rem;
      font-weight: bold;
      text-transform: uppercase;

      font-family: "Roboto";
      font-size: 0.625rem;

      border-radius: 1rem;
    }
  }

  > h1 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  > footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin-top: 2rem;

    > b {
      font-size: 1.25rem;
      font-family: "Baloo 2";
    }

    > section {
      > button {
        background: ${({ theme }) => theme.fixed.purple_dark};
        line-height: 0;

        padding: 0.5rem;
        border: 0;
        border-radius: 0.375rem;

        > svg {
          font-size: 1.375rem;
        }

        transition: background 0.3s;

        &:hover {
          background: ${({ theme }) => theme.fixed.purple};
        }
      }
    }
  }
`;
