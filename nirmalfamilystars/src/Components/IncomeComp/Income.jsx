import React from "react";
import "./Income.css";
const Income = () => {
  return (
    <div>
      <div className="form-align-container">
        <h1 className="logo">Logo</h1>
        <form className="form-container" action="">
          <input type="text" placeholder="Income" />
          <input type="number" placeholder="Amount" />
          <select name="" id="">
            <option value="">Category-1</option>
            <option value="">Category-2</option>
            <option value="">Category-3</option>
            <option value="">Category-4</option>
            <option value="">Category-5</option>
          </select>
          <input type="date" />

          <textarea name="" id="" placeholder="Description"></textarea>
          <div className="btn-container">
            <button>Submit</button>
          </div>
        </form>
      </div>
      <table className="table-container">
        <tr className="rows">
          <th>Income</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th>
          <th>Description</th>
          <th></th>
        </tr>
        <tr>
          <td>Income</td>
          <td>Amount</td>
          <td>Category</td>
          <td>Date</td>
          <td className="des">Description</td>
          <td>
            <button>Edit</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Income;
