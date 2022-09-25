import styled from "styled-components";

interface RoundedIconSectionProps {
  color: string;
}

export const HomePageContainer = styled.main`
  display: flex;
  width: 100%;

  flex-direction: column;
  gap: 2rem;

  max-width: 70rem;

  margin: 0 auto;
`;

export const FirstHomeSection = styled.section`
  display: flex;
  align-items: center;

  flex: 1;


  gap: 3.5rem;

  justify-content: space-between;

  position: relative;

  #background-layer {
    position: absolute;
    top: 0;
    left: -100vw;

    min-width: 200vw;
    max-width: 200vw;

    height: 100%;

    object-fit: cover;
    z-index: 1;
  }

  > img {
    width: 100%;

    max-width: 29rem;
    min-width: 22rem;

    height: fit-content;
    z-index: 2;
  }

  > section {
    display: flex;
    flex-direction: column;
  
    gap: 4.125rem;

    z-index: 2;

    > header {
      display: flex;
      flex-direction: column;

      flex: 1;

      > h1 {
        margin-bottom: 1rem;
        font-size: 3rem;

        font-family: "Baloo 2";
        font-weight: 800;
        line-height: 1.3;
      }

      > small {
        font-size: 1.25rem;
        font-family: "Roboto"
        line-height: 1.3;
      }

    }
    

   > footer {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 2.5rem;
        grid-row-gap: 1.58375rem;

        > section {
          display: flex;
          align-items: center;
          gap: .75rem;

          > p {
            font-size: 1rem;
            line-height: 1.3;
          }
        }

        @media(max-width: 700px) {
          display: flex;
          flex-wrap: wrap;

          align-items: center;
        }
    }
  }    

    @media(max-width: 700px) {
      flex-direction: column-reverse;

      justify-content: center;
    }

`;

export const SecondHomeSection = styled.section`
  display: flex;
  flex-direction: column;

  > ul {
    display: grid;
    grid-column-gap: 2rem;
    grid-row-gap: 2.5rem;
  }

  }
`;

export const RoundedIconSection = styled.div<RoundedIconSectionProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;

  min-width: 2rem;
  min-height: 2rem;

  border-radius: 50%;

  background: ${({ color }) => color};
`;
