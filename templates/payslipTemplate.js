import { rgb } from 'pdf-lib';

export const formatPayslip = (page, data) => {
  const fontSize = 8;
  const headerFontSize = 10;
  const marginX = 50;
  const tableWidth = 500;
  const rowHeight = 15;
  const sectionSpacing = 10;
  let currentY = 675;

  // Company header
  page.drawText('SUVIDHA HR & MANPOWER INC', { x: marginX + 10, y: 780, size: fontSize });
  page.drawText('F-298, DREAM MALL, FIRST FLOOR, GATE NO. 3, L.B.S MARG, BHANDUP (W)', { x: marginX + 10, y: 765, size: fontSize });
  page.drawText('MUMBAI-400078', { x: marginX + 10, y: 750, size: fontSize });

  // Payslip title
  page.drawText('Pay Slip for the Month of August-2024  Branch: GARGI', { x: 150, y: 725, size: headerFontSize });

  // Outer border for the entire payslip
  page.drawRectangle({
    x: marginX,
    y: 100,
    width: tableWidth,
    height: 600,
    borderColor: rgb(0, 0, 0),
    borderWidth: 1,
  });

  // Section 1: Employee Details
  currentY -= sectionSpacing;
  page.drawText('Name :', { x: marginX + 10, y: currentY, size: fontSize });
  page.drawText(data.name || '-', { x: marginX + 80, y: currentY, size: fontSize });

  page.drawText('Designation :', { x: marginX + 250, y: currentY, size: fontSize });
  page.drawText(data.designation || '-', { x: marginX + 330, y: currentY, size: fontSize });

  currentY -= rowHeight;
  page.drawText('Branch :', { x: marginX + 10, y: currentY, size: fontSize });
  page.drawText(data.branch || '-', { x: marginX + 80, y: currentY, size: fontSize });

  page.drawText('Department :', { x: marginX + 250, y: currentY, size: fontSize });
  page.drawText(data.department || '-', { x: marginX + 330, y: currentY, size: fontSize });

  currentY -= rowHeight;
  page.drawText('Birth Date :', { x: marginX + 10, y: currentY, size: fontSize });
  page.drawText(data.birthDate || '-', { x: marginX + 80, y: currentY, size: fontSize });

  page.drawText('Gender :', { x: marginX + 250, y: currentY, size: fontSize });
  page.drawText(data.gender || '-', { x: marginX + 330, y: currentY, size: fontSize });

  currentY -= rowHeight;
  page.drawText('Join Date :', { x: marginX + 10, y: currentY, size: fontSize });
  page.drawText(data.joinDate || '-', { x: marginX + 80, y: currentY, size: fontSize });

  page.drawText('PF A/c No. :', { x: marginX + 250, y: currentY, size: fontSize });
  page.drawText(data.pfAccount || '-', { x: marginX + 330, y: currentY, size: fontSize });

  currentY -= rowHeight;
  page.drawText('OT Hours :', { x: marginX + 10, y: currentY, size: fontSize });
  page.drawText(data.otHours || '-', { x: marginX + 80, y: currentY, size: fontSize });

  page.drawText('U A N :', { x: marginX + 250, y: currentY, size: fontSize });
  page.drawText(data.uan || '-', { x: marginX + 330, y: currentY, size: fontSize });

  // Add a horizontal line separating this section from the next
  currentY -= sectionSpacing;
  page.drawLine({
    start: { x: marginX, y: currentY },
    end: { x: marginX + tableWidth, y: currentY },
    thickness: 1,
    color: rgb(0, 0, 0),
  });

  // Section 2: Days Present and Leave Information
  currentY -= rowHeight;
  page.drawText('Days Present :', { x: marginX + 10, y: currentY, size: fontSize });
  page.drawText(data.daysPresent || '-', { x: marginX + 100, y: currentY, size: fontSize });

  page.drawText('PL :', { x: marginX + 150, y: currentY, size: fontSize });
  page.drawText(data.pl || '-', { x: marginX + 170, y: currentY, size: fontSize });

  page.drawText('SL :', { x: marginX + 200, y: currentY, size: fontSize });
  page.drawText(data.sl || '-', { x: marginX + 220, y: currentY, size: fontSize });

  page.drawText('CL :', { x: marginX + 250, y: currentY, size: fontSize });
  page.drawText(data.cl || '-', { x: marginX + 270, y: currentY, size: fontSize });

  page.drawText('PH :', { x: marginX + 300, y: currentY, size: fontSize });
  page.drawText(data.ph || '-', { x: marginX + 320, y: currentY, size: fontSize });

  page.drawText('W.OFF :', { x: marginX + 350, y: currentY, size: fontSize });
  page.drawText(data.woff || '-', { x: marginX + 400, y: currentY, size: fontSize });

  // Add another horizontal line separating this section from the next
  currentY -= sectionSpacing;
  page.drawLine({
    start: { x: marginX, y: currentY },
    end: { x: marginX + tableWidth, y: currentY },
    thickness: 1,
    color: rgb(0, 0, 0),
  });

  // Section 3: Earnings and Deductions with headers (Earning Head, Rate, Amount)
  currentY -= rowHeight;
  page.drawText('EARNINGS', { x: marginX + 10, y: currentY, size: headerFontSize });
  page.drawText('DEDUCTIONS', { x: marginX + 300, y: currentY, size: headerFontSize });

  // Add a line under the headings
  currentY -= rowHeight;
  page.drawLine({
    start: { x: marginX, y: currentY },
    end: { x: marginX + tableWidth, y: currentY },
    thickness: 1,
    color: rgb(0, 0, 0),
  });

  // Headers for Earnings and Deductions table
  currentY -= rowHeight;
  page.drawText('Earning Head', { x: marginX + 10, y: currentY, size: fontSize });
  page.drawText('Rate', { x: marginX + 100, y: currentY, size: fontSize });
  page.drawText('Amount', { x: marginX + 200, y: currentY, size: fontSize });

  page.drawText('Deduction Head', { x: marginX + 300, y: currentY, size: fontSize });
  page.drawText('Amount', { x: marginX + 400, y: currentY, size: fontSize });

  // Add a line under the table headers
  currentY -= rowHeight;
  page.drawLine({
    start: { x: marginX, y: currentY },
    end: { x: marginX + tableWidth, y: currentY },
    thickness: 1,
    color: rgb(0, 0, 0),
  });

  const earnings = [
    { label: 'Basic', rate: data.basic, amount: data.basic },
    { label: 'HRA', rate: data.hra, amount: data.hra },
    { label: 'MA', rate: data.ma, amount: data.ma },
    { label: 'OT', rate: '-', amount: data.ot || '-' },
    { label: 'Other', rate: '-', amount: data.other || '-' },
  ];

  const deductions = [
    { label: 'PF', amount: data.deductions?.pf },
    { label: 'Advance', amount: data.deductions?.advance },
    { label: 'PT', amount: data.deductions?.pt },
  ];

  // Drawing earnings and deductions in rows
  earnings.forEach((earning, index) => {
    const y = currentY - (index + 1) * rowHeight;

    // Earnings column
    page.drawText(earning.label + ':', { x: marginX + 10, y, size: fontSize });
    page.drawText(earning.rate, { x: marginX + 100, y, size: fontSize });
    page.drawText(earning.amount, { x: marginX + 200, y, size: fontSize });

    // Deductions column
    if (index < deductions.length) {
      const deduction = deductions[index];
      page.drawText(deduction.label + ':', { x: marginX + 300, y, size: fontSize });
      page.drawText(deduction.amount, { x: marginX + 400, y, size: fontSize });
    }
  });

  currentY -= (earnings.length + 1) * rowHeight;

  // Line separating Earnings and Deductions sections
  page.drawLine({
    start: { x: marginX + tableWidth / 2, y: currentY + (earnings.length + 1) * rowHeight },
    end: { x: marginX + tableWidth / 2, y: currentY - rowHeight * 2 }, // Adjusted the line length
    thickness: 1,
    color: rgb(0, 0, 0),
  });

  // Total Earnings and Deductions
  currentY -= rowHeight * 2;
  page.drawText('Total Earnings:', { x: marginX + 10, y: currentY, size: fontSize });
  page.drawText(data.totalEarnings || '-', { x: marginX + 200, y: currentY, size: fontSize });

  page.drawText('Total Deductions:', { x: marginX + 300, y: currentY, size: fontSize });
  page.drawText(data.totalDeductions || '-', { x: marginX + 400, y: currentY, size: fontSize });

  // Net Payable
  currentY -= rowHeight;
  page.drawText('Net Payable:', { x: marginX + 10, y: currentY, size: fontSize });
  page.drawText(data.netPayable || '-', { x: marginX + 200, y: currentY, size: fontSize });

  // Add horizontal line to separate sections
  currentY -= sectionSpacing;
  page.drawLine({
    start: { x: marginX, y: currentY },
    end: { x: marginX + tableWidth, y: currentY },
    thickness: 1,
    color: rgb(0, 0, 0),
  });

  // Employer Contribution Section
  currentY -= rowHeight * 2;
  page.drawText('Employer Contribution :', { x: marginX + 10, y: currentY, size: fontSize });
  page.drawText('PF : 550.00 | EPS : 1250.00 | ESIC : -', { x: marginX + 150, y: currentY, size: fontSize });

  // Line to separate employer contribution and leave details
  currentY -= sectionSpacing;
  page.drawLine({
    start: { x: marginX, y: currentY },
    end: { x: marginX + tableWidth, y: currentY },
    thickness: 1,
    color: rgb(0, 0, 0),
  });

  // Leave Details Section
  currentY -= rowHeight;
  page.drawText('Leave Details :', { x: marginX + 10, y: currentY, size: fontSize });
  page.drawText('Opening Leave : -1.00', { x: marginX + 150, y: currentY, size: fontSize });
  page.drawText('Leave Availed : 0.00', { x: marginX + 300, y: currentY, size: fontSize });
  page.drawText('Closing Leave : -1.00', { x: marginX + 450, y: currentY, size: fontSize });

  // Footer Section
  page.drawText('SUVIDHA HR & MANPOWER INC', { x: marginX + 10, y: 120, size: fontSize });
  page.drawText('For', { x: marginX + 10, y: 100, size: fontSize });
  page.drawText('Authorised Signatory', { x: marginX + 10, y: 80, size: fontSize });
};




