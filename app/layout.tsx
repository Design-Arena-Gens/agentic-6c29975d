import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Rezervo Tani | Video Prezantim",
  description:
    "Video marketing për sallonin e bukurisë me rezervime online përmes RezervoTani.com.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="sq">
      <body>{children}</body>
    </html>
  );
}
