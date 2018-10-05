import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { spy } from 'sinon';
// import sinon from "sinon";
import AddItem from "./AddItem";
import Item from "./Item";
import ItemList from "./ItemList";
import EditItem from "./EditItem"

describe("AddItem", () => {
  it("should render <AddItem> component", () => {
    const wrapper = shallow(<AddItem />);
  });

  it('should have a `<form>` element', () => {
    expect(
      wrapper.find('form').length
    ).toBe(1);
  }); 
});

describe("Item", () => {
  it("should render <Item> component", () => {
    const wrapper = shallow(<Item />);
  });

  it("should render correctly", () => {
    const output = shallow(<Item title="mockTitle" url="mockUrl" />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

describe("<ItemList/>", () => {
  it("should  find all <Item/> component", () => {
    const wrapper = shallow(<ItemList />);
    expect(wrapper.find(Item));
  });



  it('should handle state changes', () => {
    const output = shallow(
      <ItemList title="mockTitle" url="mockUrl" />
    );
    
    expect(output.state().itemList);
  });
});
