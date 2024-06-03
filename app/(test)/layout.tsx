import { Metadata } from 'next';
import React, { ReactNode } from 'react';
import { Inter } from "next/font/google";
import "../globals.css";
import {
  TooltipProvider,
} from "@/components/ui/tooltip"

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Yoom",
//   description: "Video calling app",
//   icons: {
//     icon: '/icons/logo.svg'
//   }
// };

const TestLayout = ({ children}: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TooltipProvider>
            <main>
                {children}
            </main>
        </TooltipProvider>
        </body>
    </html>
  )
}

export default TestLayout