"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "./Button";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-red-200 bg-red-50 p-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 flex-shrink-0 text-red-600" aria-hidden="true" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-red-900">
                  Đã xảy ra lỗi
                </h2>
                <p className="mt-2 text-sm text-red-800">
                  Rất tiếc, đã xảy ra lỗi không mong muốn. Vui lòng thử lại hoặc làm mới trang.
                </p>
                {process.env.NODE_ENV === "development" && this.state.error && (
                  <details className="mt-4">
                    <summary className="cursor-pointer text-xs font-medium text-red-700">
                      chi tiết lỗi (chỉ hiển thị trong môi trường phát triển)
                    </summary>
                    <pre className="mt-2 overflow-auto rounded bg-red-100 p-2 text-xs text-red-900">
                      {this.state.error.toString()}
                      {this.state.error.stack}
                    </pre>
                  </details>
                )}
                <div className="mt-4 flex gap-3">
                  <Button onClick={this.handleReset} variant="primary" size="md">
                    Thử lại
                  </Button>
                  <Button
                    onClick={() => window.location.reload()}
                    variant="outline"
                    size="md"
                  >
                    Làm mới trang
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
