import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";

// get the data before trying to render the table
await axios.get("/invoice").then(({data})=>{
  console.log("app.jsx", data);
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App data={data}/>
    </React.StrictMode>
  );
}).catch(err=>console.log(err))

