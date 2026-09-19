import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="bg-white text-text-dark">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
