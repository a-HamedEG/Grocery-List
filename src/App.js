import { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';
import MainTitle from "./Components/MainTitle/MainTitle";
import Form from "./Components/Form/Form";
import Tasks from "./Components/Tasks/Tasks";
import Item from "./Components/Item/Item";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [itemsArr, setItems] = useState(
    JSON.parse(localStorage.getItem("itemsData")) || []
  );

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlechange = (id) => {
    let newArr = itemsArr.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(newArr);
    localStorage.setItem("itemsData", JSON.stringify(newArr));
  };

  const handleDelete = (id) => {
    let newArr = itemsArr.filter((item) => item.id !== id);
    setItems(newArr);
    localStorage.setItem("itemsData", JSON.stringify(newArr));
  };

  const smScreen = windowWidth < 992 ? true : false;

  let smScreenData;
  let leftSide;
  let rightSide;

  if (smScreen) {
    smScreenData = itemsArr.map((item) => (
      <Item
        key={item.id}
        id={item.id}
        itemName={item.name}
        checked={item.checked}
        handlechange={handlechange}
        handleDelete={handleDelete}
      />
    ));
  } else {
    leftSide = itemsArr
      .filter((item,indx) => indx % 2 === 0)
      .map((item) => (
        <Item
          key={item.id}
          id={item.id}
          itemName={item.name}
          checked={item.checked}
          handlechange={handlechange}
          handleDelete={handleDelete}
        />
      ));

    rightSide = itemsArr
      .filter((item, indx) => indx % 2 !== 0)
      .map((item) => (
        <Item
          key={item.id}
          id={item.id}
          itemName={item.name}
          checked={item.checked}
          handlechange={handlechange}
          handleDelete={handleDelete}
        />
      ));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    const newArr = {
      id: uuid(),
      name: newItem,
      checked: false,
    };

    setItems([...itemsArr, newArr]);
    localStorage.setItem("itemsData", JSON.stringify([...itemsArr, newArr]));
    setNewItem("");
  };

  return (
    <main className="container list-wrapper">
      <MainTitle />
      <Form
        handleSubmit={handleSubmit}
        newItem={newItem}
        setNewItem={setNewItem}
      />
      {itemsArr.length > 0 ? (
        <Tasks
          smScreen={smScreen}
          leftSide={smScreen ? "" : leftSide}
          rightSide={smScreen ? "" : rightSide}
          smScreenData={smScreenData}
        />
      ) : (
        <h2>Your List is Empty</h2>
      )}
    </main>
  );
}

export default App;
