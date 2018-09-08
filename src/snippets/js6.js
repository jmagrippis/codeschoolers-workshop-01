const js = `function movePaddle(paddle, offset) {
  const currentTop = paddle.style.top.match(/\\d+/)[0];
  const nextTop = currentTop + offset;
  paddle.style.top = paddle.style.top.replace(currentTop, nextTop);
}

const PLAYER_ONE_UP_KEY = 'w';
const PLAYER_ONE_DOWN_KEY = 's';

const player1 = document.getElementById('paddle1');

function handleControls(event) {
  if (event.key === PLAYER_ONE_UP_KEY) {
    movePaddle(player1, 1);
  }
  if (event.key === PLAYER_ONE_DOWN_KEY) {
    movePaddle(player1, -1);
  }

  // can you handle the controls for player two?
};

document.addEventListener('keydown', handleControls);
`;

export default js;
