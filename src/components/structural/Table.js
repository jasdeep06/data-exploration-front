import React from "react";
import "../../styles/table.css";

const Table = props => {
  return (
    <table>
      <thead>
        <tr>
          {props.header.map(head => {
            return <th>{head}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {props.data.map(datum => {
          return (
            <tr>
              {props.header.map(head => {
                return <td>{datum[props.header_mapping[head]]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
