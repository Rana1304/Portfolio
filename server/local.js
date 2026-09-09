const app = require("./server");

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Local server running on http://localhost:${PORT}`);
});

module.exports = app;