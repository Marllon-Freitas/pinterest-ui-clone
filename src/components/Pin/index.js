import React from 'react';

// Estilos
import { Wrapper, Content } from "./Pin.style";

export default function Pin({ urls }) {
  return (
    <Wrapper>
      <Content>
        <img src={urls?.regular} alt="Imagem bonita" />
      </Content>
    </Wrapper > 
  );
}

