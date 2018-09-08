const js = `function movePaddle(paddle, offset) {
  const currentTop = paddle.style.top.match(/\\d+/)[0];
  const nextTop = currentTop + offset;
  paddle.style.top = paddle.style.top.replace(currentTop, nextTop);
}

const player1 = document.getElementById('paddle1');

function handleControls(event) {
  if (event.key === 'w') {
    movePaddle(player1, 1);
  }
  if (event.key === 's') {
    movePaddle(player1, -1);
  }
};

document.addEventListener('keydown', handleControls);
`;

export default js;
