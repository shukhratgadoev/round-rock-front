import renderer from "react-test-renderer";
import WhatIsBlock from "./WhatIsBlock";

it("WhatIsBlock renders correctly", () => {
  const whatIsBlock = renderer.create(<WhatIsBlock />).toJSON();
  expect(whatIsBlock).toMatchSnapshot();
});
