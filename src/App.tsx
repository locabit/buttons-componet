import React from "react";
import "./App.css";
import Button from "./components/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLocationDot,
  faSpinner,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <h1>SIZES</h1>
      <div className="container">
        <Button text="SMALL" size="small" />
        <Button text="NORMAL" />
        <Button text="MEDIUM" size="medium" />
        <Button text="LARGE" size="large" />
      </div>
      <h1>BORDERS</h1>
      <div className="container">
        <Button text="NORMAL" />
        <Button text="SQUARED" borders="squared" />
        <Button text="ROUNDED" borders="rounded" />
      </div>
      <h1>STATES</h1>
      <div className="container">
        <Button text="DISABLED" state={true} />
        <Button load={true}>
          <FontAwesomeIcon icon={faSpinner} spin />
        </Button>
      </div>
      <h1>COLOR STATES</h1>
      <div className="container">
        <Button text="NORMAL" />
        <Button text="PRIMARY" color="primary" />
        <Button text="LINK" color="link" />
        <Button text="INFO" color="info" />
        <Button text="SUCCESS" color="success" />
        <Button text="WARNING" color="warning" />
        <Button text="DANGER" color="danger" />
      </div>
      <h1>COLOR OUTLINE STATES</h1>
      <div className="container">
        <Button text="NORMAL" outlined={true} />
        <Button text="PRIMARY" color="primary" outlined={true} />
        <Button text="LINK" color="link" outlined={true} />
        <Button text="INFO" color="info" outlined={true} />
        <Button text="SUCCESS" color="success" outlined={true} />
        <Button text="WARNING" color="warning" outlined={true} />
        <Button text="DANGER" color="danger" outlined={true} />
      </div>
      <h1>ICONS</h1>
      <div className="container">
        <Button text="ICON LEFT" color="primary" iconPosition="left">
          <FontAwesomeIcon icon={faUser} />
        </Button>
        <Button text="ICON RIGHT" color="info" iconPosition="right">
          <FontAwesomeIcon icon={faLocationDot} />
        </Button>
        <Button borders="rounded" color="success" iconPosition="no-text">
          <FontAwesomeIcon icon={faCheck} />
        </Button>
      </div>
    </div>
  );
};

export default App;
