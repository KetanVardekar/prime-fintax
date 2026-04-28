import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prime Fintax Consultancy Services | Tax & Financial Experts Mumbai",
  description:
    "Prime Fintax Consultancy Services offers expert income tax filing, GST compliance, TDS, payroll, accounting, and business registration services in Borivali, Mumbai.",
  keywords:
    "income tax filing Mumbai, GST consultancy Borivali, TDS returns, payroll processing, accounting services, business registration, housing society accounting",
  authors: [{ name: "Prime Fintax Consultancy Services" }],
  openGraph: {
    title: "Prime Fintax Consultancy Services",
    description: "Your Trusted Partner in Financial Excellence",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
