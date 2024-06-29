import React, { useState } from "react";
import "./Product.css";

const Product = ({element,index,value,setvalue}) => {
  const [status, setstatus] = useState(true);
  const addcrd = () => {
    setvalue((element) => element + 1);
    setstatus(false);
  };

  const removecrd = () => {
    if (value > 0) {
      setvalue((element) => element - 1);
      setstatus(true);
    }
  };

  return (
    <div className="col mb-10  h-100 ">
      <div className="card h-100">
        <div
          className="badge bg-dark text-white position-absolute"
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          {element.offer}
        </div>

        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        <div className="card-body p-3 ">
          <div className="text-center">
            <h5 className="fw-bolder">{element.title}</h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
              <div className="bi-star-fill">{element.review}</div>
            </div>
            <span className="text-muted text-decoration-line-through">
              {element.mrp}
            </span>
            {element.cost}
          </div>
        </div>
        <div className="card-footer p-4  pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {status ? (
              <button
                type="button"
                onClick={addcrd}
                className="btn btn-outline-success"
              >
                Add To Card
              </button>
            ) : (
              <button
                type="button"
                onClick={removecrd}
                className="btn  btn-outline-danger"
              >
                Remove From Card
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
