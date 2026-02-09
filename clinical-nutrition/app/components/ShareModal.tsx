"use client";

import { useState, useEffect } from "react";
import { X, Copy, Check, Facebook, Twitter, Linkedin, MessageCircle, Share2 } from "lucide-react";
import { Button } from "./Button";
import toast from "react-hot-toast";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  url?: string;
  title?: string;
  description?: string;
}

export function ShareModal({
  isOpen,
  onClose,
  url,
  title = "Dinh dưỡng Lâm sàng",
  description = "Nền tảng giáo dục dinh dưỡng lâm sàng",
}: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
  const shareTitle = title;
  const shareText = description;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success("Đã sao chép liên kết!");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Copy error:", error);
      toast.error("Không thể sao chép. Vui lòng thử lại.");
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
        toast.success("Đã chia sẻ thành công!");
        onClose();
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          console.error("Share error:", error);
          toast.error("Không thể chia sẻ. Vui lòng thử lại.");
        }
      }
    }
  };

  const handleSocialShare = (platform: "facebook" | "twitter" | "linkedin" | "zalo") => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(shareTitle);
    const encodedText = encodeURIComponent(shareText);

    let shareLink = "";

    switch (platform) {
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case "twitter":
        shareLink = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        break;
      case "linkedin":
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case "zalo":
        shareLink = `https://zalo.me/share?url=${encodedUrl}&title=${encodedTitle}&desc=${encodedText}`;
        break;
    }

    if (shareLink) {
      window.open(shareLink, "_blank", "width=600,height=400");
      toast.success(`Đang mở ${platform}...`);
    }
  };

  const hasNativeShare = typeof navigator !== "undefined" && navigator.share;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full p-6 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h2 id="share-modal-title" className="text-xl font-semibold text-gray-900">
            Chia sẻ
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors focus-ring"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Native Share */}
        {hasNativeShare && (
          <Button
            onClick={handleNativeShare}
            variant="primary"
            size="lg"
            icon={Share2}
            iconPosition="left"
            className="w-full"
          >
            Chia sẻ qua ứng dụng
          </Button>
        )}

        {/* Copy Link */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Hoặc sao chép liên kết
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={shareUrl}
              readOnly
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Button
              onClick={handleCopyLink}
              variant={copied ? "primary" : "outline"}
              size="md"
              icon={copied ? Check : Copy}
              iconPosition="left"
            >
              {copied ? "Đã sao chép" : "Sao chép"}
            </Button>
          </div>
        </div>

        {/* Social Media Options */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Chia sẻ lên mạng xã hội
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleSocialShare("facebook")}
              className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors focus-ring text-left"
            >
              <Facebook className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Facebook</span>
            </button>
            <button
              onClick={() => handleSocialShare("twitter")}
              className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors focus-ring text-left"
            >
              <Twitter className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium text-gray-700">Twitter</span>
            </button>
            <button
              onClick={() => handleSocialShare("linkedin")}
              className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors focus-ring text-left"
            >
              <Linkedin className="w-5 h-5 text-blue-700" />
              <span className="text-sm font-medium text-gray-700">LinkedIn</span>
            </button>
            <button
              onClick={() => handleSocialShare("zalo")}
              className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors focus-ring text-left"
            >
              <MessageCircle className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">Zalo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
