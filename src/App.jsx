import { useState } from "react";
import "./App.css";
import { Card } from "./components/card";
import { UserProvider } from "./components/userProvider";
import { Main } from "./components/Main";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />

      <UserProvider>
        <Main />
      </UserProvider>
    </div>
  );
}

export default App;
