import { Route, Routes } from "react-router-dom";

import { GlobalProvider } from "./context/GlobalState";

import { Home } from "./components/Home";
import { AddEmployee } from "./components/AddEmployee";
import { AddMail } from "./components/AddMail";
import { EditEmployee } from "./components/EditEmployee";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddEmployee />} exact />
          <Route path="/addMail" element={<AddMail />} exact />
          <Route path="/edit/:id" element={<EditEmployee />} exact />
        </Routes>
      </div>
    </GlobalProvider>
  );
}

export default App;
