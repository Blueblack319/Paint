import express from "express";

const app = express();

PORT = 3000;

const handleListen = () => {
  console.log(`✅ Listening on: http://localhost:${PORT}`);
};

app.listen(PORT, handleListen);
