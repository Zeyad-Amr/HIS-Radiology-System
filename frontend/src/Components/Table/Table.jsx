import React, { useState } from "react";
import "./Table.css";

const Table = ({ list, headers }) => {
  const [data, setData] = useState(list);

  const getHeaders = headers.map((item, index) => {
    return <th key={index}>{Object.values(item)[0]}</th>;
  });

  const fetchResult = data.map((item, idx) => {
    return (
      <tr key={item.id}>
        {headers.map((cell, index) => {
          console.log(item[Object.keys(cell)[0]]);
          return <td key={index}>{item[Object.keys(cell)[0]]}</td>;
        })}
      </tr>
    );
  });

  return (
    <div className="moka">
      <h1 id="title">React Dynamic Table</h1>
      <table id="students">
        <thead>
          <tr>{getHeaders}</tr>
        </thead>
        <tbody>{fetchResult}</tbody>
      </table>
    </div>
  );
};

export default Table;
