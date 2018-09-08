const js = `function handleKeydown(event) {
  document.getElementById('field').innerText = event.key
};

document.addEventListener('keydown', handleKeydown);
`;

export default js;
