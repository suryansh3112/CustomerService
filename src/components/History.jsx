import React, { useEffect, useState } from "react";
import axios from "axios";

function History() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/order")
      .then((res) => setArr(res.data))
      .catch((err) => console.log(err));
  }, []);

  function Details(props) {
    return (
      <tr>
        <td>{props.name}</td>
        <td>{props.address}</td>
        <td>{props.product_name}</td>
        <td>{props.product_id}</td>
      </tr>
    );
  }

  return (
    <div>
      <div>
        <h1>History</h1>
      </div>
      <table className="table  table-striped ">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Product_name</th>
            <th scope="col">Product_id</th>
          </tr>
        </thead>

        <tbody>
          {arr.map((e) => {
            return (
              <Details
                key={e._id}
                product_id={e.product_id}
                address={e.address}
                product_name={e.product_name}
                name={e.name}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default History;
