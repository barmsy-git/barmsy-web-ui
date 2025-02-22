const RecentOrders = () => {
    const orders = [
      { id: "0001", user: "John Doe", item: "Jollof Rice", amount: "N2,000", date: "28 May 2019", status: "Processing" },
      { id: "0002", user: "Jane Smith", item: "Fried Rice", amount: "N3,500", date: "29 May 2019", status: "Completed" },
    ];
  
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-gray-700 font-semibold mb-2">Recent Orders</h3>
        <ul>
          {orders.map((order) => (
            <li key={order.id} className="flex justify-between p-2 border-b">
              <span>{order.id}</span>
              <span>{order.user}</span>
              <span>{order.item}</span>
              <span>{order.amount}</span>
              <span>{order.date}</span>
              <span className="text-orange-500">{order.status}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default RecentOrders;
  