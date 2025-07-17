import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Products({link,...data}) {
  let count = 0;
  let { categoryName } = useParams();
  let [products, setProducts] = useState({products:[]});
  useEffect(() => {
    link = categoryName ? link + categoryName  : link
    fetch(link)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        count++;
        console.log(count);
        return data;
      })
  },[])
  return (
    <>
      {Math.random()}
      <div>
        {products.products.map((value,index) => {
          return (
              <div key={index} className="card text-start">
                <img className="card-img-top" src={value.images[0]} alt="Title" height={300} />
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
