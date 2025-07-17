import React, { useEffect, useState } from 'react'
function ProductCategory() {
    let [category,setCategory] = useState([])
    useEffect(() => {
        fetch("https://dummyjson.com/products/categories")
          .then((res) => res.json())
          .then((data) => {
            setCategory(data);
          });
      },[])
  return (
    <>
      <div className="row">
        {category.map((value, index) => {
          return (
            <div key={index} className="card text-start col-4">
              <div className="card-body">
                <h4 className="card-title">{value.slug}</h4>
                <p className="card-text">{value.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductCategory