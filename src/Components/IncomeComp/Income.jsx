// import React, { useState } from "react";
// import "./Income.css";
// import logo from "../../Assets/logoImg.png";
// import { RiDeleteBinLine } from "react-icons/ri";
// import { FiEdit3 } from "react-icons/fi";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// const Income = () => {
//   let navigate = useNavigate();
//   const [incomedata, setincomedata] = useState([]);
//   const [incomeData, setIncomeData] = useState({
//     income: "",
//     amount: "",
//     category: "",
//     date: "",
//     description: "",
//   });
//   const getIncomeData = (data) => {
//     let names = data.target.name;
//     let values = data.target.value;
//     if (names === "income" || names === "category") {
//       values = values.charAt(0).toUpperCase() + values.slice(1).toLowerCase();
//     }
//     setIncomeData({ ...incomeData, [names]: values });
//   };
//   async function IncomeView() {
//     let incomeDatas = {
//       income: incomeData.income,
//       amount: incomeData.amount,
//       category: incomeData.category,
//       date: incomeData.date,
//       description: incomeData.description,
//     };
//     console.log(incomeDatas);
//     try {
//       const response = await axios.post(
//         "http://127.0.0.1:8000/income/",
//         incomeData
//       );
//       if (response.status === 200) {
//         FetchIncome();
//       } else {
//         alert("Error submitting income data");
//       }
//     } catch (error) {
//       console.error("Error creating income record:", error);
//       alert("Error creating income record");
//     }
//   }

//   async function FetchIncome(e) {
//     try {
//       e.preventDefault();
//       let response = await axios.get("http://127.0.0.1:8000/income/");
//       console.log(response);

//       if (response.status === 200) {
//         navigate("/dashboard");
//       } else {
//         console.log("error");
//       }
//     } catch (err) {}
//   }
//   useEffect(() => {
//     FetchIncome();
//   }, []);

//   return (
//     <div>
//       <div className="form-align-container">
//         <div className="income-header">
//           <h1>Family Stars</h1>
//           {/* <img className="logo" src={logo} alt="" /> */}
//           <button className="back-btn">Back</button>
//         </div>
//         <form className="form-container" action="">
//           <h3>Income details</h3>
//           <div className="input-data-container">
//             <label htmlFor="">Income</label>
//             <input
//               name="income"
//               onChange={getIncomeData}
//               type="text"
//               placeholder="Income"
//             />
//           </div>
//           <div className="input-data-container">
//             <label htmlFor="">Amount</label>
//             <input
//               name="amount"
//               onChange={getIncomeData}
//               type="number"
//               placeholder="Amount"
//             />
//           </div>
//           <div className="input-data-container">
//             <label htmlFor="">Category</label>
//             <select name="category" onChange={getIncomeData} id="">
//               <option value="Category-1">Category-1</option>
//               <option value="Category-2">Category-2</option>
//               <option value="Category-3">Category-3</option>
//               <option value="Category-4">Category-4</option>
//               <option value="Category-5">Category-5</option>
//             </select>
//           </div>
//           <div className="input-data-container">
//             <label htmlFor="">Date</label>
//             <input onChange={getIncomeData} name="date" type="date" />
//           </div>
//           <div className="input-data-container">
//             <label htmlFor="">Description</label>
//             <textarea
//               name="description"
//               onChange={getIncomeData}
//               id=""
//               placeholder="Description"
//             ></textarea>
//           </div>
//           <div className="btn-container">
//             <button onClick={IncomeView}>Submit</button>
//           </div>
//         </form>
//       </div>
//       <table className="table-container">
//         <tr className="rows">
//           <th>Income</th>
//           <th>Amount</th>
//           <th>Category</th>
//           <th>Date</th>
//           <th>Description</th>
//           <th>Actions</th>
//         </tr>
//         <tr>
//           <td>Income data</td>
//           <td>Amount data</td>
//           <td>Category</td>
//           <td>20-09-2020</td>
//           <td className="des">Descriptionsss</td>
//           <td className="btns">
//             <FiEdit3 className="edit-icon" />
//             <RiDeleteBinLine className="del-icon" />
//             {/* <button className="edit-btn">Delete</button> */}
//           </td>
//         </tr>
//       </table>
//     </div>
//   );
// };

// export default Income;



import React, { useState, useEffect } from "react";
import "./Income.css";
import logo from "../../Assets/logoImg.png";
import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Income = () => {
  let navigate = useNavigate();
  const [incomedata, setIncomeData] = useState([]);
  const [newIncome, setNewIncome] = useState({
    income: "",
    amount: "",
    category: "",
    date: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "income" || name === "category") {
      formattedValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }

    setNewIncome({ ...newIncome, [name]: formattedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/income/", newIncome);
      if (response.status === 201) {
        fetchIncomeData();
      } else {
        alert("Error submitting income data");
      }
    } catch (error) {
      console.error("Error creating income record:", error);
      alert("Error creating income record");
    }
  };

  const fetchIncomeData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/income/");
      if (response.status === 200) {
        setIncomeData(response.data);
      } else {
        console.log("Error fetching income data");
      }
    } catch (error) {
      console.error("Error fetching income data:", error);
    }
  };

  useEffect(() => {
    fetchIncomeData();
  }, []);

  return (
    <div>
      <div className="form-align-container">
        <div className="income-header">
          <h1>Family Stars</h1>
          <button className="back-btn" onClick={() => navigate("/dashboard")}>Back</button>
        </div>
        <form className="form-container" onSubmit={handleSubmit}>
          <h3>Income Details</h3>
          <div className="input-data-container">
            <label htmlFor="income">Income</label>
            <input
              name="income"
              onChange={handleInputChange}
              type="text"
              placeholder="Income"
            />
          </div>
          <div className="input-data-container">
            <label htmlFor="amount">Amount</label>
            <input
              name="amount"
              onChange={handleInputChange}
              type="number"
              placeholder="Amount"
            />
          </div>
          <div className="input-data-container">
            <label htmlFor="category">Category</label>
            <select name="category" onChange={handleInputChange}>
              <option value="Category-1">Category-1</option>
              <option value="Category-2">Category-2</option>
              <option value="Category-3">Category-3</option>
              <option value="Category-4">Category-4</option>
              <option value="Category-5">Category-5</option>
            </select>
          </div>
          <div className="input-data-container">
            <label htmlFor="date">Date</label>
            <input onChange={handleInputChange} name="date" type="date" />
          </div>
          <div className="input-data-container">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              onChange={handleInputChange}
              placeholder="Description"
            ></textarea>
          </div>
          <div className="btn-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>


      <table className="table-container">
        <thead>
          <tr className="rows">
            <th>Income</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {incomedata.map((item) => (
            <tr key={item.id}>
              <td>{item.income}</td>
              <td>{item.amount}</td>
              <td>{item.category}</td>
              <td>{new Date(item.date).toLocaleDateString()}</td>
              <td className="des">{item.description}</td>
              <td className="btns">
                <CiEdit className="edit-icon" />
                <MdOutlineDelete className="del-icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Income;
