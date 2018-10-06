import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import OrderItem from "./OrderItem"
import PlaceOrder from "./PlaceOrder"
import ViewOrderItems from "./ViewOrderItems"

describe("Order", () => {
    it("should render <OrderItem> component", () => {
      const wrapper = shallow(<OrderItem />);
    });
    it("should render <PlaceOrder> component", () => {
        const wrapper = shallow(<PlaceOrder />);
      });
    // it("should not render <ViewOrderItems> component,since mock localStorage was not defined", () => {
    //     const wrapper = shallow(<ViewOrderItems />);
    // });

   
  });
  