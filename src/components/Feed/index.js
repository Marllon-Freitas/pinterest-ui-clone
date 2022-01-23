import React from 'react';

// Componentes
import Pin from "../Pin";

// Estilos
import { Wrapper, Content } from "./Feed.style";

export default function Feed(props) {
  let {pins} = props;
  return (
    <Wrapper>
      <Content>
        {pins.map((pin) => {
          let {urls} = pin;
          return <Pin key={pin.id} urls={urls}/>
        })}
      </Content>
    </Wrapper > 
  );
}

