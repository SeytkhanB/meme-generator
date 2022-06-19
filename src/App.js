

import React from "react";
import Header from './Header/Header'
import './app-style.css';
import Meme from './Meme/Meme';

export default function App() {
    return (
    <div className="app">
      <Header />
      <Meme />
    </div>
);
}
