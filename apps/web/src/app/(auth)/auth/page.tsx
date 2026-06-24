import AuthComponents from "@/features/auth/components/block/AuthComponents";
import SectionLayout from "@/shared/components/custom/ui/wrapper/SectionLayout";

export default function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <SectionLayout classname="flex justify-center h-screen items-center">
      <AuthComponents searchParams={searchParams} />
    </SectionLayout>
  );
}
