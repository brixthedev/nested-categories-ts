import { FC } from "react";
import { StaticCategories } from "./staticCategories";

const RenderCategories: FC<{
  clickHandler: (categories: StaticCategories) => void;
  nestedCategories: StaticCategories[];
}> = ({ clickHandler, nestedCategories }) => {
  return (
    <>
      {nestedCategories.map((categories: StaticCategories) => {
        return (
          <div key={categories.name}>
            <p>Name: "{categories.name}"</p>
            <button onClick={() => clickHandler(categories)}>+</button>
            {categories.categories.length > 0 && (
              <RenderCategories
                clickHandler={clickHandler}
                nestedCategories={categories.categories}
              />
            )}
          </div>
        );
      })}
    </>
  );
};

export default RenderCategories;
