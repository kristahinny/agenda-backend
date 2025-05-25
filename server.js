const port = process.env.PORT || 3000; // Usa a porta que o Render passa, ou 3000 como fallback
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
