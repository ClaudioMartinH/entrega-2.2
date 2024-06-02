import express from "express";
import path from "path";

const app = express();
const PORT = 5000;

app.use(express.static(path.join("./")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});