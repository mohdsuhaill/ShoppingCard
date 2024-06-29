import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Product from './components/Product';
import Footer from './components/Footer';

const App = () => {

  const list = [
    {
      title: "Fancy Product",
      cost: "$40.00 - $80.00",
      review: "",
      offer: "",
    },
    {
      title: "Special Item",
      mrp: "$20.00",
      cost: " - $80.00",
      review: "⭐⭐⭐⭐⭐",
      offer: "sale",
    },
    {
      title: "Sale item",
      mrp: "$50.00",
      cost: " - $25.00",
      review: "",
      offer: "sale",
    },
    {
      title: "Popular Item",
      mrp: "",
      cost: "$40.00",
      review: "⭐⭐⭐⭐⭐",
      offer: "",
    },
    {
      title: "Sale Item",
      mrp: "$20.00",
      cost: " - $50.00",
      review: "",
      offer: "sale",
    },
    {
      title: "Fancy Product",
      cost: "$120.00 - $280.00",
      review: "",
      offer: "",
    },
    {
      title: "Specail Item",
      mrp: "$20.00",
      cost: " - $18.00",
      review: "⭐⭐⭐⭐⭐",
      offer: "sale",
    },
    {
      id: 8,
      title: "Specail Item",
      mrp: "",
      cost: "$40.00",
      review: "⭐⭐⭐⭐⭐",
      offer: "",
    },
  ];
  const [value,setvalue] =useState(0);
  return (
     <>
     <Navbar value={value} />
     <Header />
     <section className="py-5">
     <div className="container px-4 px-lg-5 mt-5>">
     <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      {
        list.map((element,index)=>{
          return<Product element={element} key={index} value={value} setvalue={setvalue} />
        })
      }
      </div>
      </div>
    </section>
      <Footer />
     </>
  );
};

export default App;