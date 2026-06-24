"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function AuthToast() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const error = searchParams.get("error");
    const success = searchParams.get("success");

    if (error) {
      toast.error(error);
    }

    if (success === "otp-sent") {
      toast.success("کد تایید ارسال شد");
    }
  }, [searchParams]);

  return null;
}
