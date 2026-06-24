import { verifyOtpAction } from "@/features/auth/actions/verifyOtpAction";
import { Button } from "@/shared/components/shadcn/button";
import { Input } from "@/shared/components/shadcn/input";
import Form from "next/form";
function VerifyForm({ email }: { email: string }) {
  return (
    <Form action={verifyOtpAction} className="space-y-3">
      <Input type="hidden" name="email" value={email} />
      <Input name="code" type="text" maxLength={5} placeholder="12345" />
      <div className="flex w-full">
        <Button type="submit" className="w-3/4">
          Verify OTP
        </Button>
        <Button type="button" variant={"ghost"} className="py-3 ">
          ← Back to Login
        </Button>
      </div>
    </Form>
  );
}

export default VerifyForm;
