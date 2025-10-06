import { useState } from "react";
import { CreateOrder } from "./components/CreateOrder";
import { Navigations } from "./components/Navigations";
import { OrderReport } from "./components/OrderReport";
import { OrderSummary } from "./components/OrderSummary";

function App() {
  const [orders, setOrders] = useState([]);

  return (
    <div className="text-white bg-background">
      <div className="container mx-auto px-4 h-screen flex flex-col">
        <Navigations />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
          <CreateOrder orders={orders} setOrders={setOrders} />

          <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
            <OrderSummary orders={orders} />

            <OrderReport orders={orders} setOrders={setOrders} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
