const express = require('express');
const cors = require('cors');
const app = express(); // <- ISSO precisa vir antes de usar `app`

app.use(cors());
app.use(express.json());

// Suas rotas
app.get('/horarios', (req, res) => {
  res.json([
    { id: 1, data: "2025-05-30", hora: "10:00", reservado: false },
    { id: 2, data: "2025-05-30", hora: "11:00", reservado: true },
  ]);
});

app.post('/reservar', (req, res) => {
  res.json({ success: true });
});

// Porta para rodar
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
