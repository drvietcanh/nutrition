/**
 * PDF Generator Utilities
 * 
 * Functions to generate PDFs from HTML content using jsPDF and html2canvas
 */

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export interface PDFOptions {
  title?: string;
  filename?: string;
  orientation?: 'portrait' | 'landscape';
  format?: 'a4' | 'letter';
  margin?: number;
}

/**
 * Generate PDF from HTML element
 */
export async function generatePDFFromElement(
  element: HTMLElement,
  options: PDFOptions = {}
): Promise<void> {
  const {
    title = 'Báo cáo Dinh dưỡng',
    filename = `bao-cao-dinh-duong-${Date.now()}.pdf`,
    orientation = 'portrait',
    format = 'a4',
    margin = 20,
  } = options;

  try {
    // Create canvas from HTML element
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
    });

    const imgData = canvas.toDataURL('image/png');
    const imgWidth = format === 'a4' ? 210 : 216; // A4 width in mm
    const pageHeight = format === 'a4' ? 297 : 279; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    // Create PDF
    const pdf = new jsPDF({
      orientation,
      unit: 'mm',
      format,
    });

    let position = 0;

    // Add title if provided
    if (title) {
      pdf.setFontSize(16);
      pdf.text(title, margin, margin);
      position = margin + 10;
    }

    // Add image to PDF
    pdf.addImage(imgData, 'PNG', margin, position, imgWidth - margin * 2, imgHeight);

    heightLeft -= pageHeight - position - margin;

    // Add new pages if content is longer than one page
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight + margin;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', margin, position, imgWidth - margin * 2, imgHeight);
      heightLeft -= pageHeight - margin;
    }

    // Save PDF
    pdf.save(filename);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Không thể tạo PDF. Vui lòng thử lại.');
  }
}

/**
 * Generate PDF from multiple elements
 */
export async function generatePDFFromElements(
  elements: HTMLElement[],
  options: PDFOptions = {}
): Promise<void> {
  const {
    title = 'Báo cáo Dinh dưỡng',
    filename = `bao-cao-dinh-duong-${Date.now()}.pdf`,
    orientation = 'portrait',
    format = 'a4',
    margin = 20,
  } = options;

  try {
    const pdf = new jsPDF({
      orientation,
      unit: 'mm',
      format,
    });

    const pageWidth = format === 'a4' ? 210 : 216;
    const pageHeight = format === 'a4' ? 297 : 279;

    // Add title
    if (title) {
      pdf.setFontSize(16);
      pdf.text(title, margin, margin);
    }

    let currentY = title ? margin + 10 : margin;

    for (const element of elements) {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
      });

      const imgData = canvas.toDataURL('image/png');
      const imgWidth = pageWidth - margin * 2;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Check if we need a new page
      if (currentY + imgHeight > pageHeight - margin) {
        pdf.addPage();
        currentY = margin;
      }

      pdf.addImage(imgData, 'PNG', margin, currentY, imgWidth, imgHeight);
      currentY += imgHeight + 10; // Add spacing between elements
    }

    pdf.save(filename);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Không thể tạo PDF. Vui lòng thử lại.');
  }
}

/**
 * Generate PDF with custom content
 */
export function generatePDFWithContent(
  content: string,
  options: PDFOptions = {}
): void {
  const {
    title = 'Báo cáo Dinh dưỡng',
    filename = `bao-cao-dinh-duong-${Date.now()}.pdf`,
    orientation = 'portrait',
    format = 'a4',
    margin = 20,
  } = options;

  const pdf = new jsPDF({
    orientation,
    unit: 'mm',
    format,
  });

  const pageWidth = format === 'a4' ? 210 : 216;
  const maxWidth = pageWidth - margin * 2;

  // Add title
  if (title) {
    pdf.setFontSize(16);
    pdf.text(title, margin, margin);
  }

  // Split content into lines that fit the page width
  const lines = pdf.splitTextToSize(content, maxWidth);
  let y = title ? margin + 10 : margin;
  const lineHeight = 7;
  const pageHeight = format === 'a4' ? 297 : 279;

  pdf.setFontSize(10);

  lines.forEach((line: string) => {
    if (y + lineHeight > pageHeight - margin) {
      pdf.addPage();
      y = margin;
    }
    pdf.text(line, margin, y);
    y += lineHeight;
  });

  pdf.save(filename);
}
