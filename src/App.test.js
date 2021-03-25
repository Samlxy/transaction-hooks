import React from "react";
import App from "./App";
import HandleTransactions from "./components/HandleTransactions";
import Notification from "./components/Notification";
import { shallow } from "enzyme";


describe("rendering components", () => {
  it("renders App component without crashing", () => {
    shallow(<App />);
  });

  it("renders App component header without crashing", () => {
    const wrapper = shallow(<App />);
    const header =  (<h1>Financial Transactions</h1>);
    expect (wrapper.contains(header).toEqual(true));
  });

  it("renders notification component without crashing", () => {
    shallow(<Notification />);
  it("renders button", () => {
    const wrapper = mount(<HandleTransactions accounts={}/>);
    const label = wrapper.find(""). text();

    })

  });





})
