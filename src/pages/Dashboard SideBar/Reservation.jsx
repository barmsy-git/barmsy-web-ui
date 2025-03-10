import React from 'react'
import TableTopBar from "../LocationManagerDashboard/Reservation/TableTopBar"
import TableLayout from '../LocationManagerDashboard/Reservation/TableLayout'

function Reservation() {
  return (
    <div>
        <header>
                <TableTopBar/>
           </header>

            {/* Table Section */}
        
           <div className="">
           <TableLayout />
           </div>
    </div>
  )
}

export default Reservation