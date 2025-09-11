import { Navigation } from "@/components/common/navigation";
import Footer from "@/components/common/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-5">{children}</main>
      <Footer />
    </div>
  );
}
