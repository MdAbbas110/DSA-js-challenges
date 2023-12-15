// Big O is a liner time complexcity and it is just constent
let users = [
  {
    name: 'abbas',
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

const numOfHealthyKidneys = users.flatMap(user => user.kidneys) // Flatten the nested array
                              .filter(kidney => kidney.healthy) // Filter healthy kidneys
                              .length; // Get the count

console.log(numOfHealthyKidneys); // Outputs the count of
