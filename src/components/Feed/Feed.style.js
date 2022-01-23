import styled from "styled-components";


export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--white);
`;

export const Content = styled.div`
  column-gap: 0.3rem;
  height: 100%;
  margin: 0 auto;
  background: var(--white);


  @media(min-width: 0px) and (max-width: 755px) {
    max-width: 31.5rem;
    column-count: 2;
  }

  @media(min-width: 756px) and (max-width: 1007px) {
    max-width: 47.25rem;
    column-count: 3;
  }

  @media(min-width: 1008px) and (max-width: 1259px) {
    max-width: 63rem;
    column-count: 4;
  }

  @media(min-width: 1260px) and (max-width: 1511px) {
    max-width: 78.75rem;
    column-count: 5;
  }

  @media(min-width: 1512px) and (max-width: 1763px) {
    max-width: 94.5rem;
    column-count: 6;
  }

  @media(min-width: 1764px) and (max-width: 2015px) {
    max-width: 125.938rem;
    column-count: 7;
  }

  @media(min-width: 2016px) and (max-width: 2267px) {
    max-width: 126rem;
    column-count: 8;
  }

  @media(min-width: 2268px) and (max-width: 2519px) {
    max-width: 141.75rem;
    column-count: 9;
  }

  @media(min-width: 2520px) and (max-width: 2271px) {
    max-width: 157.5rem;
    column-count: 10;
  }

  @media(min-width: 2772px) and (max-width: 3023px) {
    max-width: 173.25rem;
    column-count: 11;
  }

  @media(min-width: 3024px) and (max-width: 3275px) {
    max-width: 189rem;
    column-count: 12;
  }

  @media(min-width: 3276px) and (max-width: 3527px) {
    max-width: 204.75rem;
    column-count: 13;
  }

  @media(min-width: 3528px) and (max-width: 3779px) {
    max-width: 220.5rem;
    column-count: 14;
  }

  @media(min-width: 3780px) and (max-width: 4031px) {
    max-width: 236.25rem;
    column-count: 15;
  }

  @media(min-width: 4032px) and (max-width: 4283px) {
    max-width: 252rem;
    column-count: 16;
  }

  @media(min-width: 4284px) and (max-width: 4535px) {
    max-width: 267.75rem;
    column-count: 17;
  }

  @media(min-width: 4536px) and (max-width: 4787px) {
    max-width: 283.5rem;
    column-count: 18;
  }

  @media(min-width: 4788px) {
    max-width: 283.5rem;
    column-count: 18;
  }
`;

