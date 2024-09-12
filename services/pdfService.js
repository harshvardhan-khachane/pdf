import fs from 'fs';
import { PDFDocument, rgb } from 'pdf-lib';
import { formatPayslip } from '../templates/payslipTemplate.js';

export const generatePayslipPdf = async () => {
  try {
    
    const jsonData = JSON.parse(fs.readFileSync('./data/data.json', 'utf-8'));

    const pdfDoc = await PDFDocument.create();

    const page = pdfDoc.addPage([600, 800]);

    formatPayslip(page, jsonData);

    const pdfBytes = await pdfDoc.save();

    return pdfBytes;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};

