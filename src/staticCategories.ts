export interface StaticCategories {
  name: string;
  categories: {
    name: string;
    categories: {
      name: string;
      categories: {
        name: string;
        categories: never[];
      }[];
    }[];
  }[];
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
