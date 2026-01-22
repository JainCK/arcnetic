import { NavigationMinimal } from "@/components/common/navigation";
import { FooterMinimal } from "@/components/common/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <NavigationMinimal />
      <main>{children}</main>
      <FooterMinimal />
    </div>
  );
}
