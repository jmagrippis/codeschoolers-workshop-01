const js = `const player1 = document.getElementById('paddle1');

function handleControls(event) {
  if (event.key === 'w') {
    player1.style.top = '100px'
  }
  if (event.key === 's') {
    player1.style.top = '0'
  }
};

document.addEventListener('keydown', handleControls);
`;

export default js;
