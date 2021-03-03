import React, { Fragment, useEffect, useState } from 'react';
import {
  FlatList
} from 'react-native';
import { Cabecalho } from './src/Components/Cabecalho';
import { Foto } from './src/Components/Foto';
import lerFotos from './src/api/feed.js';



const App = () => {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    lerFotos(setFotos);
  },[])

  return (
      <FlatList 
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => 
          <Fragment>
            <Cabecalho 
              nomeUsuario={item.userName} 
              urlImage={item.userURL}
            />
            <Foto 
              urlFoto={item.url} 
              descricao={item.description}
              qntLikes={item.likes}
            />
          </Fragment>
        }
      />
  );
};

export default App;
