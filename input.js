const setupInput = () => {
  const stdin = process.stdin;
  stdin,setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput(key));
  return stdin;
};

module.exports = setupInput;