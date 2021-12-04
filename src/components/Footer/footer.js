import React from "react";
import "./footer.css";
import { Copyright } from "@material-ui/icons";

const Footer = () => {
  return (
    <div className="p-3 bg-dark text-white" id="Footer">
      Copyrights 2021 <Copyright />
      mufeeth.com
    </div>
  );
};
export default Footer;
