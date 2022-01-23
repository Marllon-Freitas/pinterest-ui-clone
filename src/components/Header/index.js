import React, { useState, useEffect } from "react";
// import Modal from "react-modal";

// Ícones
import PinterestIcon from "@mui/icons-material/Pinterest";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Estilos
import {
  Wrapper,
  LogoWrapper,
  IconButton,
  HomePageButton,
  TodayButton,
  SearchBarWrapper,
  IconSearchButton,
  SearchBarContent,
  IconsRightWrapper,
} from "./Header.style";

export default function Header(props) {
  const [searchInput, setSearchInput] = useState("");
  const [notificationIconIsSelected, setNotificationIconIsSelected] = useState(false);
  const [messageIconIsSelected, setMessageIconIsSelected] = useState(false);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(searchInput);
    console.log(searchInput);
  }

  // function handleNotificationIconDropdownClose() {
  //   setNotificationIconIsSelected(false)
  // }

  useEffect(() => {
    var item = document.querySelector(".button-header");
    
    if (notificationIconIsSelected === true ) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  }, [notificationIconIsSelected]);

  useEffect(() => {
    var item2 = document.querySelector(".button-header-2");
    if (messageIconIsSelected === true) {
      item2.classList.add("active");
    } else {
      item2.classList.remove("active");
    }
  }, [messageIconIsSelected]);

  return (
    <Wrapper>
      <LogoWrapper>
        <IconButton>
          <PinterestIcon />
        </IconButton>
      </LogoWrapper>

      <HomePageButton>
        <a href="/">Página Inicial</a>
      </HomePageButton>

      <TodayButton>
        <a href="/">Hoje</a>
      </TodayButton>

      <SearchBarWrapper>
        <SearchBarContent>
          <IconSearchButton>
            <svg
              onClick={onSearchSubmit}
              className="gUZ B9u U9O kVc"
              height="16"
              width="16"
              viewBox="0 0 24 24"
              aria-label="Ícone de pesquisa"
              role="img"
            >
              <path
                d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24"
                fill="#767676"
              ></path>
            </svg>
          </IconSearchButton>
          <form>
            <input type="text" placeholder="Pesquisar" onChange={(e) => {setSearchInput(e.target.value)}}/>
            <button type="submit" onClick={onSearchSubmit}>button</button>
          </form>
        </SearchBarContent> 
      </SearchBarWrapper>

      <IconsRightWrapper>
        <IconButton>
          <button
            className="button-header"
            onClick={() => setNotificationIconIsSelected(!notificationIconIsSelected)}
          >
            <svg
              className="gUZ B9u U9O kVc"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
              aria-label=""
              role="img"
            >
              <path
                d="M12 24c-1.66 0-3-1.34-3-3h6c0 1.66-1.34 3-3 3zm7-10.83c1.58 1.52 2.67 3.55 3 5.83H2c.33-2.28 1.42-4.31 3-5.83V7c0-3.87 3.13-7 7-7s7 3.13 7 7v6.17z"
                fill="#767676"
              ></path>
            </svg>
          </button>
          {/* <Modal className="notification-dropdown-menu" isOpen={notificationIconIsSelected} onRequestClose={handleNotificationIconDropdownClose}>
            <h1>teste</h1>
          </Modal> */}
        </IconButton>

        <IconButton>
          <button
            className="button-header-2"
            onClick={() => setMessageIconIsSelected(!messageIconIsSelected)}
          >
            <svg
              className="Hn_ gUZ B9u U9O kVc"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
              aria-label=""
              role="img"
            >
              <path
                d="M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0"
                fill="#767676"
              ></path>
            </svg>
          </button>
        </IconButton>

        <IconButton>
          <button>
            <AccountCircleIcon />
          </button>
        </IconButton>

        <IconButton>
          <button>
            <svg
              className="gUZ B9u U9O kVc"
              height="12"
              width="12"
              viewBox="0 0 24 24"
              aria-hidden="true"
              aria-label=""
              role="img"
            >
              <path
                d="M12 19.5.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z"
                fill="#767676"
              ></path>
            </svg>
          </button>
        </IconButton>
      </IconsRightWrapper>
    </Wrapper>
  );
}
