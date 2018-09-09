const js = `// A Number in javascript can be an integer or a float
const favouriteNumber = 18;
const age = 32.92;
// You may reference previous variables when declaring new ones
const ageNextYear = age + 1;

// A String is a series of "characters"
const name = 'Johnny';
// every scalar type, like a String or a Number, has some "prototype methods"
const nameInCaps = name.toUpperCase();

// An Array has other variables inside it, in an order
const interests = ['beach volleyball', 'video games', 'dad jokes'];
// elements of an array do not have to have to be of the same type
const mixedArray = ['example string', 42, name, age];
`;

export default js;
