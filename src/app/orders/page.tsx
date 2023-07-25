import React from "react";

const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base bg-red-50">
            <td className="hidden md:block py-6 px-1">53552552552</td>
            <td>25.08.2023</td>
            <td>55.5</td>
            <td className="hidden md:block">Big Burger Menu (2), Veggie Pizza (2), Coca cola 1L (2)</td>
            <td>On the way (appox. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">53552552552</td>
            <td>25.08.2023</td>
            <td>55.5</td>
            <td className="hidden md:block">Big Burger Menu (2), Veggie Pizza (2), Coca cola 1L (2)</td>
            <td>On the way (appox. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">53552552552</td>
            <td>25.08.2023</td>
            <td>55.5</td>
            <td className="hidden md:block">Big Burger Menu (2), Veggie Pizza (2), Coca cola 1L (2)</td>
            <td>On the way (appox. 10min)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
