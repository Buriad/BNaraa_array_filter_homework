const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

// Дээрх list of objects-г хүйсээр нь filter хийгээрээ

console.log("Males:");
console.log(
  characters.filter((e) => {
    return e.gender === "male";
  })
);
console.log("Females");
console.log(
  characters.filter((e) => {
    return e.gender === "male";
  })
);
