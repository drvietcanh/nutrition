"use client";

import { useState, useRef } from "react";
import { FileDown, Loader2 } from "lucide-react";
import { Button } from "./Button";
import { generatePDFFromElement, type PDFOptions } from "../../lib/utils/pdfGenerator";
import toast from "react-hot-toast";

interface PDFExportButtonProps {
  elementId?: string;
  elementRef?: React.RefObject<HTMLElement>;
  title?: string;
  filename?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  options?: Omit<PDFOptions, "title" | "filename">;
}

export function PDFExportButton({
  elementId,
  elementRef,
  title = "Báo cáo Dinh dưỡng",
  filename,
  className = "",
  variant = "outline",
  size = "md",
  children,
  options,
}: PDFExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false);
  const defaultRef = useRef<HTMLDivElement>(null);

  const handleExport = async () => {
    try {
      setIsExporting(true);

      let element: HTMLElement | null = null;

      if (elementRef?.current) {
        element = elementRef.current;
      } else if (elementId) {
        element = document.getElementById(elementId);
      } else if (defaultRef.current) {
        element = defaultRef.current.parentElement;
      }

      if (!element) {
        toast.error("Không tìm thấy nội dung để xuất PDF");
        return;
      }

      const defaultFilename = filename || `bao-cao-dinh-duong-${Date.now()}.pdf`;

      await generatePDFFromElement(element, {
        title,
        filename: defaultFilename,
        ...options,
      });

      toast.success("Đã xuất PDF thành công!");
    } catch (error) {
      console.error("PDF export error:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Không thể xuất PDF. Vui lòng thử lại."
      );
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <>
      <div ref={defaultRef} className="hidden" />
      <Button
        onClick={handleExport}
        disabled={isExporting}
        variant={variant}
        size={size}
        icon={isExporting ? Loader2 : FileDown}
        iconPosition="left"
        className={className}
        aria-label="Xuất PDF"
      >
        {isExporting ? "Đang xuất..." : children || "Xuất PDF"}
      </Button>
    </>
  );
}
