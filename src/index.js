import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function Header() {
  // const style1={color:"red", fontSize:"48"}
  const style1 = {};
  return (
    <header className="header">
      <h1 style={style1}>Fast React Pozza co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menue</h2>
      <p>bla bla bla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla bla</p>
      {/* {pizzaData.map(Pizza)} */}
      {/* {pizzaData.map((item) => Pizza(item))} */}
      <ul className="pizzas">
        {pizzaData.map((item) => (
          <Pizza obj={item} key={item.name} />
        ))}
      </ul>
      {/* <Pizza /> */}
    </main>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.obj.photoName} alt={props.obj.name} />
      <ul>
        <h3>{props.obj.name}</h3>
        <p>{props.obj.ingredients}</p>
        
        <p> {props.obj.soldOut ? 'Sold Out' :  '$'+props.obj.price}   </p>
      </ul>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <>
      <footer className="footer">
        {isOpen && (
          <div className="order">
            <p>We're open until {closeHour}</p>
            <button className="btn">order</button>
          </div>
        )}
      </footer>
    </>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />

      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
