import React, { useState } from "react";
import qs from "qs";
import axios from "axios";

function PlaceOrder(props) {
  const [info, setInfo] = useState({
    name: props.name,
    address: "",
    product_name: "",
    product_id: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleClick(e) {
    e.preventDefault();

    console.log(info);
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios
      .post("http://localhost:5000/order/newOrder", qs.stringify(info), config)
      .then((res) => alert(res.data))
      .catch((err) => console.log(err));
    setInfo({
      name: props.name,
      address: "",
      product_name: "",
      product_id: "",
    });
  }

  return (
    <div>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input
            className="form-control"
            required
            type="text"
            value={props.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            className="form-control"
            required
            type="text"
            value={info.address}
            name="address"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Product_name:</label>
          <input
            className="form-control"
            required
            type="text"
            value={info.product_name}
            name="product_name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Product_id:</label>
          <input
            className="form-control"
            required
            type="Number"
            value={info.product_id}
            name="product_id"
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-lg btn-dark " onClick={handleClick}>
          PlaceOrder
        </button>
      </form>
    </div>
  );
}

export default PlaceOrder;
