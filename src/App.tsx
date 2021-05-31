import { FC, useState, useEffect } from "react";

import staticCategories, { StaticCategories } from "./staticCategories";
import RenderCategories from "./renderCategories";

const App: FC = () => {
  const [nestedCategories, setNestedCategories] = useState(staticCategories);

  useEffect(() => {
    setNestedCategories(staticCategories);
  }, [nestedCategories]);

  const clickHandler = (categories: StaticCategories) => {
    if (categories.name === "root") {
      categories.name = "1";
      categories.categories.push({
        name: `${categories.categories.length + 1}`,
        categories: [],
      });
      categories.name = "root";
      setNestedCategories([categories]);
    } else {
      categories.categories.push({
        name: `${categories.name}.${categories.categories.length + 1}`,
        categories: [],
      });
      setNestedCategories([...staticCategories, categories]);
    }
  };

  return (
    <RenderCategories
      clickHandler={clickHandler}
      nestedCategories={nestedCategories}
    />
  );
};

export default App;
