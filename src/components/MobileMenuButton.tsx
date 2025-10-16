"use client";
import { Menu } from "lucide-react";
import { useMobileMenu } from "@/contexts/MobileMenuContext";

export default function MobileMenuButton() {
  const { toggleSidebar } = useMobileMenu();

  return (
    <button
      onClick={toggleSidebar}
      className="lg:hidden p-2 hover:bg-gray-200 rounded-md transition-colors"
      aria-label="Toggle sidebar"
    >
      <Menu size={24} />
    </button>
  );
}