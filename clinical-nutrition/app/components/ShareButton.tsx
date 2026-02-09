"use client";

import { useState } from "react";
import { Share2, Copy, Check, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "./Button";
import toast from "react-hot-toast";

interface ShareButtonProps {
  url?: string;
  title?: string;
  description?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

export function ShareButton({
  url,
  title = "Dinh dưỡng Lâm sàng",
  description = "Nền tảng giáo dục dinh dưỡng lâm sàng",
  className = "",
  variant = "outline",
  size = "md",
  children,
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
  const shareTitle = title;
  const shareText = description;

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
        toast.success("Đã chia sẻ thành công!");
      } catch (error) {
        // User cancelled or error occurred
        if (error instanceof Error && error.name !== "AbortError") {
          console.error("Share error:", error);
          toast.error("Không thể chia sẻ. Vui lòng thử lại.");
        }
      }
    } else {
      // Fallback to copy link
      handleCopyLink();
    }
  };

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

  // Check if native share is available
  const hasNativeShare = typeof navigator !== "undefined" && navigator.share;

  return (
    <div className="flex items-center gap-2">
      {hasNativeShare ? (
        <Button
          onClick={handleNativeShare}
          variant={variant}
          size={size}
          icon={Share2}
          iconPosition="left"
          className={className}
          aria-label="Chia sẻ"
        >
          {children || "Chia sẻ"}
        </Button>
      ) : (
        <div className="flex items-center gap-2">
          <Button
            onClick={handleCopyLink}
            variant={variant}
            size={size}
            icon={copied ? Check : Copy}
            iconPosition="left"
            className={className}
            aria-label="Sao chép liên kết"
          >
            {copied ? "Đã sao chép" : "Sao chép liên kết"}
          </Button>
          <div className="flex items-center gap-1 border-l border-gray-300 pl-2">
            <button
              onClick={() => handleSocialShare("facebook")}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors focus-ring"
              aria-label="Chia sẻ lên Facebook"
              title="Chia sẻ lên Facebook"
            >
              <Facebook className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleSocialShare("twitter")}
              className="p-2 text-blue-400 hover:bg-blue-50 rounded-lg transition-colors focus-ring"
              aria-label="Chia sẻ lên Twitter"
              title="Chia sẻ lên Twitter"
            >
              <Twitter className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleSocialShare("linkedin")}
              className="p-2 text-blue-700 hover:bg-blue-50 rounded-lg transition-colors focus-ring"
              aria-label="Chia sẻ lên LinkedIn"
              title="Chia sẻ lên LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleSocialShare("zalo")}
              className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors focus-ring"
              aria-label="Chia sẻ lên Zalo"
              title="Chia sẻ lên Zalo"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
