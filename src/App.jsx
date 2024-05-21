import { useState } from 'react'
import './App.css'
import { Button, Flex } from 'antd';
import Navbar from './components/navbar/navbar'
import Cartwidget from './components/cartwidget/cartwidget';
import ItemListContainer from './containers/itemListContainer/itemListContainer';

function App() {
  return (
    <div>
      <Navbar />
      <Cartwidget />
      <ItemListContainer greeting={'Bienvenido a MercadoRopa'}/>
    </div>
  )
}

export default App
