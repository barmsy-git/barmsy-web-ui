// // import React from "react";
// // import Table from "../../pages/LocationOwnerPage/Table"

// // const TableLayout = () => {
// //     return (
// //       <div className="grid grid-cols-5 gap-12 p-6 w-full h-screen overflow-y-auto">
// //         {/* Example Table Cards (Replace with dynamic data if available) */}
// //         {[...Array(20)].map((_, index) => (
// //           <div key={index} className="flex items-center justify-center">
// //             <Table />
// //           </div>
// //         ))}
// //       </div>
// //     );
// //   };
  

// // export default TableLayout;


// import React from "react";
// import Table from "../../pages/LocationOwnerPage/Table"

// const TableLayout = () => {
//     return (
//       <div className="grid grid-cols-5 gap-12 p-6 w-full h-screen overflow-y-auto">
//         {/* Example Table Cards (Replace with dynamic data if available) */}
//         {[...Array(20)].map((_, index) => (
//           <div key={index} className="flex items-center justify-center">
//           <Table shape="rectangle" />  
// {/* <Table shape="square" />  */}

//           </div>
//         ))}
//       </div>
//     );
//   };
  

// export default TableLayout;


import React, { useState } from "react";
import TableCard from "../../LocationManagerDashboard/Reservation/Table";
import ReservationModal from "../../LocationManagerDashboard/ReservationModal";

const TableLayout = () => {
  const [selectedTable, setSelectedTable] = useState(null);
  
  // Table Data
  const tables = [
    { id: 1, shape: "rectangle", status: "occupied" },
    { id: 2, shape: "rectangle", status: "open-order" },
    { id: 3, shape: "rectangle", status: "available-soon" },
    { id: 4, shape: "rectangle", status: "not-occupied" },
    { id: 5, shape: "rectangle", status: "occupied" },
    { id: 6, shape: "square", status: "open-order" },
    { id: 7, shape: "square", status: "available-soon" },
    { id: 8, shape: "square", status: "not-occupied" },
    { id: 9, shape: "square", status: "occupied" },
    // { id: 10, shape: "rectangle", status: "open-order" },
    { id: 11, shape: "rectangle", status: "not-occupied" },
    { id: 12, shape: "rectangle", status: "occupied" },
    { id: 13, shape: "square", status: "open-order" },
    { id: 14, shape: "square", status: "available-soon" },
    { id: 15, shape: "square", status: "not-occupied" },
    { id: 16, shape: "square", status: "occupied" },
    { id: 17, shape: "rectangle", status: "open-order" },
    { id: 18, shape: "rectangle", status: "open-order" },
    { id: 19, shape: "rectangle", status: "not-occupied" },
    { id: 20, shape: "rectangle", status: "occupied" },
    { id: 21, shape: "square", status: "open-order" },
    { id: 22, shape: "square", status: "available-soon" },
    { id: 23, shape: "square", status: "not-occupied" },
    { id: 24, shape: "square", status: "occupied" },
    { id: 25, shape: "rectangle", status: "open-order" },
  ];

  return (
    <div className="grid grid-cols-5 gap-12 p-6 w-full h-screen overflow-y-auto">



      {tables.map((table) => (
        <div key={table.id} className="flex items-center justify-center">
          
          <TableCard 
  shape={table.shape} 
  tableNumber={table.id}  
  onClick={() => {
    console.log("Clicked Table:", table);  // Debugging
    setSelectedTable(table);
  }}  
/>

        </div>
      ))}

{selectedTable && (
  <>
     {console.log("Opening Modal for:", selectedTable)}
        <ReservationModal table={selectedTable} onClose={() => setSelectedTable(null)} />
      
        </>)}
    </div>
    
  );
};

export default TableLayout;
