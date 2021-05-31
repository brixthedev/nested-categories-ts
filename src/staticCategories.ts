export interface StaticCategories {
  name: string;
  categories: StaticCategories[];
}

const staticCategories: StaticCategories[] = [
  {
    name: "root",
    categories: [
      {
        name: "1",
        categories: [
          {
            name: "1.1",
            categories: [],
          },
          {
            name: "1.2",
            categories: [
              {
                name: "1.2.1",
                categories: [],
              },
            ],
          },
        ],
      },
      {
        name: "2",
        categories: [
          {
            name: "2.1",
            categories: [],
          },
        ],
      },
    ],
  },
];

export default staticCategories;
