import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const option = [
  { id: 1, name: "Home" },
  { id: 2, name: "Marketing" },
  { id: 3, name: "Work" },
  { id: 4, name: "Head Office" },
];

export function AddMail() {
  let history = useNavigate();

  const { addMail, mail } = useContext(GlobalContext);

  const [email, setEmail] = useState("");
  const [addrtype, setAddrType] = useState("");

  function handleAddrTypeChange(e) {
    setAddrType(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const newMail = {
      id: mail.length + 1,
      email,
      addrtype,
    };
    addMail(newMail);
    history("/");
  };

  return (
    <React.Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name of mail
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter name"
            />
            <select
              value={addrtype}
              onChange={handleAddrTypeChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 mt-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
            >
              {option.map((o) => (
                <option selected key={o.id} value={o.name}>
                  {o.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add Employee
            </button>
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
