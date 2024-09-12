import express from 'express';
import pdfRoutes from './routes/pdfRoutes.js';

const app = express();

app.use(express.json());

app.use('/pdf', pdfRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
