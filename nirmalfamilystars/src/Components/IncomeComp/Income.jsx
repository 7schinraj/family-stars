import React from "react";
import "./Income.css";
import logo from "../../Assets/logoImg.png"
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";
const Income = () => {
  return (
    <div>
      <div className="form-align-container">
        <div className="income-header">
          <h1>Family Stars</h1>
          {/* <img className="logo" src={logo} alt="" /> */}
          <button className="back-btn">Back</button>
        </div>
        <form className="form-container" action="">
          <h3>Income details</h3>
          <div className="input-data-container">
            <label htmlFor="">Income</label>
            <input type="text" placeholder="Income" />
          </div>
          <div className="input-data-container">
            <label htmlFor="">Amount</label>
            <input type="number" placeholder="Amount" />
          </div>
          <div className="input-data-container">
          <label htmlFor="">Category</label>
          <select name="" id="">
            <option value="">Category-1</option>
            <option value="">Category-2</option>
            <option value="">Category-3</option>
            <option value="">Category-4</option>
            <option value="">Category-5</option>
          </select>
          </div>
          <div className="input-data-container">
            <label htmlFor="">Date</label>
            <input type="date" />
          </div>
          <div className="input-data-container">
            <label htmlFor="">Description</label>
            <textarea name="" id="" placeholder="Description"></textarea>
          </div>
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
          <th>Actions</th>
        </tr>
        <tr>
          <td>Income data</td>
          <td>Amount data</td>
          <td>Category</td>
          <td>20-09-2020</td>
          <td className="des">Descriptionsss</td>
          <td className="btns">
              <FiEdit3 className="edit-icon"/>
              <RiDeleteBinLine className="del-icon" />
            {/* <button className="edit-btn">Delete</button> */}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Income;
