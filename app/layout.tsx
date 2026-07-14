import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.junkawaypro.ca"),
  title: { default: "JunkAway Pro | #1 Junk Removal in GTA Ontario", template: "%s | JunkAway Pro" },
  description: "Fast, affordable, eco-friendly junk removal across Toronto, Mississauga, Brampton, Oakville & the GTA. Same-day available. Free estimates. 4.9★ rated by 1,800+ customers.",
  keywords: ["junk removal GTA","junk removal Toronto","same-day junk pickup Ontario","furniture removal Mississauga","estate cleanout Brampton","appliance disposal GTA"],
  authors: [{ name: "JunkAway Pro" }],
  creator: "SI Infotech",
  openGraph: {
    type: "website", locale: "en_CA", url: "https://www.junkawaypro.ca", siteName: "JunkAway Pro",
    title: "JunkAway Pro | Professional Junk Removal GTA Ontario",
    description: "Same-day junk removal across the Greater Toronto Area. Free estimates. 4.9★ rated.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "JunkAway Pro Junk Removal GTA" }],
  },
  twitter: { card: "summary_large_image", title: "JunkAway Pro | Junk Removal GTA", description: "Same-day junk removal across the GTA. Free estimates." },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.junkawaypro.ca" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
