import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import {
  TooltipProvider,
} from "@/components/ui/tooltip"
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TooltipProvider>
          <main className="relative">
            
            <div className="flex">
              <Sidebar />

                <section className="flex flex-col w-full min-h-screen">
                  <Navbar />
                  <div className="w-full min-h-screen p-6 bg-gray-50">
                    {children}
                  </div>
                </section>
              
            </div>

          </main>
        </TooltipProvider>
      </body>
    </html>
  );
}
