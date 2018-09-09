const js = `// Objects have properties that can be any scalar type
const johnny = {
  firstName: 'Johnny',
  lastName: 'Magrippis',
  age: 32.92,
  interests: ['beach volleyball', 'video games', 'dad jokes'],
  // even other objects or functions!
  getFullName: () => johnny.firstName + ' ' + johnny.lastName
};

// Functions get variables as arguments and use them
function getFullName(person) {
  return person.firstName + ' ' + person.lastName;
}

// you may use functions to assign variables
const fullName = getFullName(johnny);
`;

export default js;
