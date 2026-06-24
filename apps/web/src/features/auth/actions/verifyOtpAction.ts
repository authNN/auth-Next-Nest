"use server";

import { BACKEND_URL } from "@/core/config/base-url/BaseUrl";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { errorMessage } from "../utils/errorMessage";

export async function verifyOtpAction(formData: FormData) {
  const email = formData.get("email") as string;
  const code = formData.get("code") as string;

  const res = await fetch(`${BACKEND_URL}/auth/verifyOtp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, code }),
  });
  const data = await res.json();
  console.log(data);

  if (!res.ok) {
    redirect(
      `/auth?step=verify&email=${email}&error=${encodeURIComponent(errorMessage(data))}`,
    );
  }
  const cookieStore = await cookies();
  cookieStore.set(data.nameaccess, data.valueaccess, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: Math.floor(data.maxAgeaccess / 1000),
    path: "/",
  });

  cookieStore.set(data.namerefresh, data.valuerefresh, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: Math.floor(data.maxAgerefresh / 1000),
    path: "/",
  });

  redirect("/user-test");
}
