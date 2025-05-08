import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/globals.css";

let title = "DecoCraft";
let description = "Generate your dream room in seconds.";
let ogimage = "/DC_icon.png";


export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/DC_icon.svg",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    locale: "en_US",
    type: "website",
  },
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#000000] text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
