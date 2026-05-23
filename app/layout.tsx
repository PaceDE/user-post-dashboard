import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers"
import DashboardLayout from "@/shared/components/layout/dashboard-layout/DashboardLayout";
import { ToastContainer } from "@/shared/components/ui/toast-container/toastContainer";

const manrope = Manrope({
  variable: "--manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "User Post Dashboard",
  description: "User Post Dashboard By Dipesh Shrestha",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const sidebarOpen = (await cookies()).get("sidebar-open")?.value === "true";

  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
    >
      
      <body className="h-full">
      
        <ToastContainer />
        
        <DashboardLayout sidebarOpen={sidebarOpen}>
          {children}
        </DashboardLayout>
      </body>
    </html>
  );
}
