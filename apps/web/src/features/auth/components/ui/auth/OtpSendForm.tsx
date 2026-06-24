import { sendOtpAction } from "@/features/auth/actions/sendOtpAction";
import { Button } from "@/shared/components/shadcn/button";
import { Input } from "@/shared/components/shadcn/input";
import Form from "next/form";
function OtpSendForm({
  email,
  password,
}: {
  email?: string;
  password?: string;
}) {
  return (
    <Form action={sendOtpAction} className="space-y-3">
      <Input
        name="email"
        type="email"
        placeholder="example@email.com"
        defaultValue={email}
      />
      <Input name="password" type="password" defaultValue={password} />
      <Button type="submit" className="w-full" size={"lg"}>
        Send OTP
      </Button>
    </Form>
  );
}

export default OtpSendForm;
