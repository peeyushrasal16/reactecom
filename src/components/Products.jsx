import React, { useState } from "react";

function Products() {
  let count = 0;
  fetch("http://127.0.0.1:5500/dummy/data.json")
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
      count++;
      console.log(count);
      return data;
    })
  let [products, setProducts] = useState({products:[]});
  
  return (
    <>
      {Math.random()}
      <div>
        {products.products.map((value,index) => {
          return (
              <div key={index} className="card text-start">
                <img className="card-img-top" src={value.images[0]} alt="Title" height={100} />
                <div className="card-body">
                  <h4 className="card-title">{value.title}</h4>
                  <p className="card-text">{value.description}</p>
                </div>
              </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
