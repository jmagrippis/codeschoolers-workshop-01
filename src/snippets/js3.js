const js = `// you give "getElementById" a string,
// and it finds the one element with that id
const player1 = document.getElementById('paddle1');
const bot = document.getElementById('paddle2');

// you give "querySelector" a "css-style" string,
// and it finds the first element that query would affect
const hero = document.querySelector('#paddle1'); // player1
const protagonist = document.querySelector('.paddle'); // also player1

const firstDiv = document.querySelector('div'); // first "div" in the document

// you give "querySelectorAll" a "css-style" string,
// and it finds *all* elements that query would affect
const paddles = document.querySelector('.paddle'); // array of both paddles
`;

export default js;
