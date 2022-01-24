import React, { useState, useEffect } from 'react';

// API
import unsplash from "./api/unsplash";

// Rotas
import { BrowserRouter } from "react-router-dom";

// Componentes
import Header from "./components/Header";
import Feed from "./components/Feed";
import Routers from "./Routers";

// Estilo global
import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  const [pins, setPins] = useState([ ]);
 
  const getImages = (searchTerm) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: searchTerm,
        per_page: 30,
      }
    })
  }

  const onSearchSubmit = (searchTerm) => {
    getImages(searchTerm).then((res) => {
      let results = res.data.results;
      console.log(results);

      let newPins = [ 
        ...results,
        ...pins,
      ]
      setPins(newPins);
    })
  }

  return (
    <BrowserRouter>
      <Header onSubmit={onSearchSubmit} />
      <Feed pins={pins} />
      <Routers />
      <GlobalStyle />
    </ BrowserRouter> 
  );
}

export default App;
