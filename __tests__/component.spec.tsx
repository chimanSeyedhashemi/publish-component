import * as React from "react";
import ExampleComponent from "..";
import {create} from "react-test-renderer";
 
test("Component should show 'red' text 'Hello World'", () => {
  const component = create(<ExampleComponent  text="World"/>);
  const testInstance = component.root;
 
  expect(testInstance.findByType(ExampleComponent).props.text).toBe("World");
 
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

