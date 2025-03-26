import React from 'react'
import Products from "../LocationManagerDashboard/Products/Products.jsx"

function Product({isCollapsed}) {
  return (
    <div className='mt-12 '><Products isCollapsed={isCollapsed} />
</div>
  )
}

export default Product