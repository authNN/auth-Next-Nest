"use client";
import { H2, P } from "@/shared/components/custom/ui/typography/typography";
import { useSearchParams } from "next/navigation";
import { AuthStep } from "../../../assets/@types/types";

function LoginHeader() {
  const searchParams = useSearchParams();

  const step = (searchParams.get("step") as AuthStep) ?? "send";
  const email = searchParams.get("email") ?? "";
  const titles = {
    send: "Welcome Back",
    verify: "Verify Code",
  };

  const subtitles = {
    send: "Enter your email and password to login",
    verify: `A verification code has been sent to ${email}`,
  };

  return (
    <div className="text-center">
      <H2 className="text-3xl font-bold text-gray-800">{titles[step]}</H2>
      <P className="text-gray-600 text-sm mt-1">{subtitles[step]}</P>
    </div>
  );
}

export default LoginHeader;
