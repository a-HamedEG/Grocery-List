import MainTitle from './Components/MainTitle/MainTitle'
import Form from './Components/Form/Form'
import Tasks from './Components/Tasks/Tasks'
import Item from './Components/Item/Item'
import './App.css';
import { useState } from 'react';

function App() {
  const itemsData = [
    {
      id: 1,
      name: "Bakery0",
      checked: false,
    },
    {
      id: 2,
      name: "Bakery",
      checked: true,
    },
  ];

  const [newItem, setNewItem] = useState('')
  const [itemsArr, setItems] = useState(itemsData);


  const handlechange = (id) => {
    let newArr = itemsArr.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(newArr);
  };

  const leftSide = itemsArr.map((item, i) =>
    item.id % 2 != 0 ? (
      <Item
        key={item.id}
        id={item.id}
        itemName={item.name}
        checked={item.checked}
        handlechange={handlechange}
      />
    ) : undefined
  );

  const rightSide = itemsArr.map((item) =>
    item.id % 2 == 0 ? (
      <Item
        key={item.id}
        id={item.id}
        itemName={item.name}
        checked={item.checked}
        handlechange={handlechange}
      />
    ) : undefined
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return
    let addNewItem = {
      id: itemsArr.length + 1 ,
      name: newItem,
      checked:false
    }

    setItems([...itemsArr, addNewItem])
  }

  return (
    <main className="container list-wrapper">
      <MainTitle />
      <Form 
        handleSubmit={handleSubmit}
        newItem={newItem}
        setNewItem={setNewItem}
        />
      <Tasks 
        leftSide={leftSide}
        rightSide={rightSide}
      />
    </main>
  );
}

export default App;
