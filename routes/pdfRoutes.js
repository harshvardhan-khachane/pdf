import express from 'express';
import { generatePayslipPdf } from '../services/pdfService.js';

const router = express.Router();

router.get('/generate', async (req, res) => {
  try {
    const pdfBytes = await generatePayslipPdf();

    res.setHeader('Content-Disposition', 'attachment;filename=payslip.pdf');
    res.setHeader('Content-Type', 'application/pdf');
    res.send(Buffer.from(pdfBytes));
  } catch (error) {
    console.error('Error generating PDF:', error); 
    res.status(500).send({ message: 'Error generating PDF', error: error.message });
  }
});

export default router;
