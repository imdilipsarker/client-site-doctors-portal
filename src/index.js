import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-day-picker/dist/style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthProvider from "./contexts/AuthProvider";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

REACT_APP_apiKey=AIzaSyD0Jrxzr1amSzEEGP2HctGHb9c2PnPaSIc
REACT_APP_authDomain=doctors-portal-53650.firebaseapp.com
REACT_APP_projectId=doctors-portal-53650
REACT_APP_storageBucket=doctors-portal-53650.appspot.com
REACT_APP_messagingSenderId=872105263001
REACT_APP_appId=1:872105263001:web:096bcd62131b8ce1c4dd0
REACT_APP_imgbb_key=f826c3ec058ebf2fd60e6d920be47912