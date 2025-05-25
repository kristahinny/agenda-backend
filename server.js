const express = require('express');
const app = express();

app.use(express.json());

// Exemplo rota simples
app.get('/horarios', (req, res) => {
  res.json([
    { id: 1, data: "2025-05-30", hora: "10:00", reservado: false },
    { id: 2, data: "2025-05-30", hora: "11:00", reservado: true },
  ]);
});

// Rota para reservar (exemplo)
app.post('/reservar', (req, res) => {
  // Lógica para reservar horário
  res.json({ success: true });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
