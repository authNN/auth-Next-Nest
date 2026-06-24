"use server";

import { BACKEND_URL } from "@/core/config/base-url/BaseUrl";
import { redirect } from "next/navigation";
import { errorMessage } from "../utils/errorMessage";

export async function sendOtpAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const res = await fetch(`${BACKEND_URL}/auth/sendOtp`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();

  if (!res.ok) {
    redirect(
      `/auth?step=send&email=${email}&password=${password}&error=${encodeURIComponent(errorMessage(data))}`,
    );
  }
  redirect(`/auth?step=verify&email=${email}&success=otp-sent`);
}
