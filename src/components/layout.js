import * as React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import "./layout.css";

const Layout = (props)=>{
  return (
    <div>
        <Header/>
            {props.children}
        <Footer/>
    </div>
  );
}

export default Layout;