import React from 'react';
import './App.css';
import MenuMakanan from './components/MenuMakanan/MenuMakanan'
import MenuMinuman from './components/MenuMinuman/MenuMinuman'
import Button from './components/Button'
import Text from './components/Text'
import InputText from './components/InputText'

function App() {
  return (
    <div className="App">
      
      <h1>Cafe and Resto Codepolitan</h1>
      <h2>Menu Makanan</h2>
        <MenuMakanan />
        

      <h2>Menu Minuman</h2>
      	<MenuMinuman />
       	
      <Button name="Disa" age="23">
      	Syuhada
      </Button>

      <Text location="Bandung" />

      <InputText />

    </div>
  );
}

export default App
