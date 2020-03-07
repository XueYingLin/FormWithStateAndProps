import React from "react";
import ReactDOM from "react-dom";
import Name from "./components/NameComponent";
import Phone from "./components/PhoneComponent";
import Address from "./components/AddressComponent";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: "",
      address: "",
      role: ""
    };
  }

  handleChangeName = event => {
    this.setState({ name: event.target.value });
  };

  handleChangePhone = event => {
    this.setState({ phone: event.target.value });
  };

  handleChangeAddress = event => {
    this.setState({ address: event.target.value });
  };
  render() {
    return (
      <div className="App">
        <section className="name">
          <Name propsName={this.state.name} />
          <input onChange={this.handleChangeName} placeholder="name" />
        </section>
        <section className="phone">
          <Phone propsPhone={this.state.phone} />
          <input onChange={this.handleChangePhone} placeholder="phone number" />
        </section>
        <section className="address">
          <Address propsAddress={this.state.address} />
          <input onChange={this.handleChangeAddress} placeholder="address" />
        </section>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
