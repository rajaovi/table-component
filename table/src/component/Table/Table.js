import React, { useState } from "react";
import PropTypes from "prop-types";
import "./table.css";

const Table = ({ data, filter, sort }) => {
  const [inputValues, setInputValues] = useState("");
  const tableHead = Object.keys(data[0]);
  const handleInputChange = ({ target }) => {
    debugger;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [target.id]: target.value,
    }));
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            {tableHead.map((val, ind) => {
              return (
                <th key={ind}>
                  <div className="tableHead">
                    <div className="tableHeadSort">
                      <span>{val}</span>
                      {sort && <span>sort</span>}
                    </div>
                    {filter && (
                      <div>
                        <input
                          id={ind}
                          placeholder="Search"
                          value={inputValues}
                          onChange={handleInputChange}
                        />
                      </div>
                    )}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((tbodyVal, tbodyInd) => {
            return (
              <tr key={tbodyInd}>
                {tableHead.map((theadVal, theadInd) => {
                  return <td key={theadInd}>{tbodyVal[theadVal]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  sort: PropTypes.bool,
  filter: PropTypes.bool,
  pagination: PropTypes.bool,
};

export default Table;
