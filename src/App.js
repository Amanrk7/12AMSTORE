import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Searchbar from "./components/search";
import Banner from "./components/banner";
import Top from "./components/gotoTop";
import FooterLogo from "./components/logo-footer";
import product1 from "./components/images/product1.jpg";
import cart from "./components/images/cart.png";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="App" id="App">
      <header className="item1">
        <Banner />
        <Navbar />
        <Searchbar setSearchQuery={setSearchQuery} />
      </header>
      <div id="leftSide" className="item2"></div>
      <div id="mainContents" className="item3">
        <div className="cards">
          <div id="transparetShade">
            <div id="imgDiv">
              <img src={product1} placeholder="productImg" id="productImg" />
            </div>
            <div id="productRelated">
              <span>
                <h2>Skin care oil n lotion</h2>
                <h2>12.00 $</h2>
              </span>
              <span>
                <img src={cart} placeholder="cart" id="cart"/>
                <button id="similar">similar</button>
              </span>
            </div>
          </div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
        <div className="cards">
          <div id="transparetShade"></div>
        </div>
      </div>
      <div id="rightSide" className="item4"></div>
      <footer className="item5">
        <Top />
        <div id="footerTopics">
          <ul id="footer1stUl">
            <li>Get to know us?</li>
            <li>About 12 AM Store</li>
            <li>Carrers</li>
            <li>Press release</li>
            <li>Our services</li>
          </ul>
          <ul id="footer2ndUl">
            <li>Get to know us?</li>
            <li>About 12 AM Store</li>
            <li>Carrers</li>
            <li>Press release</li>
            <li>Our services</li>
          </ul>
          <ul id="footer3rdUl">
            <li>Get to know us?</li>
            <li>About 12 AM Store</li>
            <li>Carrers</li>
            <li>Press release</li>
            <li>Our services</li>
          </ul>
          <ul id="footer4thUl">
            <li>Get to know us?</li>
            <li>About 12 AM Store</li>
            <li>Carrers</li>
            <li>Press release</li>
            <li>Our services</li>
          </ul>{" "}
        </div>
        <FooterLogo />
      </footer>
    </div>
  );
}

export default App;
