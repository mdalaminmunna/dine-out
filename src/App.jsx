import { useState } from "react";
import { CreateOrder } from "./components/CreateOrder";
import { Navigations } from "./components/Navigations";
import { OrderReport } from "./components/OrderReport";
import { OrderSummary } from "./components/OrderSummary";

function App() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: "Aakash Ahmed",
      items: 5,
      amount: 123123,
      status: "pending",
    },
    {
      id: 2,
      customerName: "Saad Hasan",
      items: 5,
      amount: 123123,
      status: "delivered",
    },
    {
      id: 3,
      customerName: "MD Salahuddin",
      items: 5,
      amount: 123123,
      status: "pending",
    },
  ]);

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Hamburger",
      price: 300,
      image: "./images/hamburger.svg",
      isSelected: false,
    },
    {
      id: 2,
      name: "Chicken Nuggets",
      price: 300,
      image: "./images/chicken.svg",
      isSelected: false,
    },
    {
      id: 3,
      name: "Submarine Sandwich",
      price: 300,
      image: "./images/submarine.svg",
      isSelected: false,
    },
    {
      id: 4,
      name: "Pizza",
      price: 300,
      image: "./images/pizza.svg",
      isSelected: false,
    },
  ]);

  const [customerName, setCustomerName] = useState("");
  // const [totalAmount, setTotalAmount] = useState();

  return (
    <div className="text-white bg-background">
      <div className="container mx-auto px-4 h-screen flex flex-col">
        <Navigations />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
          <CreateOrder />

          <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
            <OrderSummary />

            <OrderReport orders={orders} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
