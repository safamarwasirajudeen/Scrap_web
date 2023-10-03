import React from "react"
import metalsData from "./Metalsdata"

function Viewprice(){
  return (
    <div className="viewprice-container">
      <h2>Current Metals Prices</h2>
      <table className="metal-table">
        <thead>
          <tr>
            <th><center>Metal Image</center></th>
            <th><center>Metal Name</center></th>
            <th><center>Current Price</center></th>
            <th><center>Average Rate</center></th>
          </tr>
        </thead>
        <tbody>
          {metalsData.map((metal) => (
            <tr key={metal.id}>
              <td>
                <img
                  src={metal.imageUrl}
                  alt={metal.metalName}
                  width="50"
                  height="50"
                />
              </td>
              <td>{metal.metalName}</td>
              <td>{metal.currentPrice}</td>
              <td>{metal.averageRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Viewprice