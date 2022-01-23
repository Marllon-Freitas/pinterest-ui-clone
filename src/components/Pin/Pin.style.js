import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-flex;
  padding: 0.5rem;
`;

export const Content = styled.div`
  width: 14.75rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    display: flex;
    width: 100%;
    cursor: zoom-in;
    border-radius: 1rem;
    object-fit: cover;
    transition: all ease-in-out 0.2s;
  }

  img:hover {
    -webkit-filter: brightness(70%);
  }
`;
