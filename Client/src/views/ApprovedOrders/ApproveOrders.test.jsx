import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import ViewApprovedOrders from "./ViewApprovedOrders"
import OrderQuotation from "./OrderQuotation"


describe("View Approved Orders", () => {
    it("should render <ViewApprovedOrders> component", () => {
      const wrapper = shallow(<ViewApprovedOrders />);
    });
   
   
  });
describe("Order Quatation", () => {

 it("should render <OrderQuotation> component", () => {
        const wrapper = shallow(<OrderQuotation />);
      });
	  
  it("should render correctly", () => {
    const output = shallow(<OrderQuotation title="mockTitle" url="mockUrl" />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});  