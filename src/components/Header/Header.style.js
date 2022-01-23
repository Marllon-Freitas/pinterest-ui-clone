import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
  padding: 0.25rem 1rem;
  background-color: var(--white);
  color: var(--black);
`;

export const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: var(--red);
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const IconButton = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  transition: all ease-in-out 0.1s;
  cursor: pointer;

  svg {
    cursor: pointer;
    color: red;
  }

  button .MuiSvgIcon-root {
    color: #767676;
    font-size: 2rem;
    cursor: pointer;
  }

  :hover {
    background-color: var(--gray-hover);
  }

  .active {
    svg {
      path {
        fill: #111;
      }
    }
  } 
`;

const HeaderFirstButtons = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 3rem;
  min-width: 8rem;
  border-radius: 1.5rem;
  padding: 0 1rem;
  cursor: pointer;
`;

export const HomePageButton = styled(HeaderFirstButtons)`
  background-color: rgb(17, 17, 17);

  a {
    text-decoration: none;
    color: var(--white);
    font-weight: 700;
  }
`;

export const TodayButton = styled(HeaderFirstButtons)`
  min-width: 3.5rem;
  background-color: var(--white);
  transition: all ease-in-out 0.1s;

  :hover {
    background-color: var(--gray-hover);
  }

  a {
    text-decoration: none;
    color: var(--black);
    font-weight: 700;
  }
`;

export const SearchBarWrapper = styled.div`
  flex: 1;
  padding: 0 0.5rem;
`;

export const IconSearchButton = styled.div`
  height: 3rem;
  padding: 0 0 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  position: absolute;

  svg {
    font-size: 1rem;
    cursor: pointer;
  }
`;

export const SearchBarContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 3.125rem;
  background-color: var(--gray-hover);

  :hover,
  :focus {
    background-color: #e1e1e1;
  }

  form {
    display: flex;
    align-items: center;
    flex: 1;
  }

  form input {
    flex: 1;
    width: 100%;
    height: 3rem;
    font-size: 1rem;
    padding: 0 0 0 2.5rem;
    color: #333;
    border-radius: 3.125rem;
  }

  form input:focus {
    outline: none;
    background-color: #e1e1e1;
  }

  form button {
    display: none;
  }
`;

export const IconsRightWrapper = styled.div`
  display: flex;

  button {
    cursor: pointer;
    height: 100%;
    width: 100%;
  }
`;


 