import image from "../../Assets/myImage.jpg";

const recentOrders = [
  { id: 1, name: "Fresh Salad Bowl", price: "N2,000" },
  { id: 2, name: "Fresh Salad Bowl", price: "N2,000" },
  { id: 3, name: "Hot Chicken Wings", price: "N2,000" },
];

const RecentlyOrderedItems = () => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      {/* Header */}
      <h3 className="text-gray-700 font-semibold text-sm">Recently Ordered Item</h3>

      {/* Items List */}
      <div className="mt-4 space-y-3">
        {recentOrders.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b pb-2">
            <div className="flex items-center space-x-3">
              <img
                src={image}
                alt={item.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <p className="text-gray-700 font-medium text-xs">{item.name}</p>
            </div>
            <p className="text-xs text-black">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyOrderedItems;
