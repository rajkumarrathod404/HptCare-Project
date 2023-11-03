// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// // import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./Main/App";
import { store } from "./App/Store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
