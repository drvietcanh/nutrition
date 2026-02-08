"use client";

import { Toaster } from "react-hot-toast";

export function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: "#fff",
          color: "#374151",
          border: "1px solid #e5e7eb",
          borderRadius: "0.75rem",
          padding: "12px 16px",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        },
        success: {
          iconTheme: {
            primary: "#22c55e",
            secondary: "#fff",
          },
          style: {
            borderLeft: "4px solid #22c55e",
          },
        },
        error: {
          iconTheme: {
            primary: "#ef4444",
            secondary: "#fff",
          },
          style: {
            borderLeft: "4px solid #ef4444",
          },
        },
        loading: {
          iconTheme: {
            primary: "#3b82f6",
            secondary: "#fff",
          },
        },
      }}
    />
  );
}
