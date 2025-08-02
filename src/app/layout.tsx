import type { Metadata } from "next";
import "./globals.css";
import { ReactQueryProviders } from "./provider";

export const metadata: Metadata = {
  title: "Link Saver App",
  description: "Simple project to save link",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
          <main className="flex flex-col gap-[32px] items-center sm:items-start w-[100%]">
            <ReactQueryProviders>{children}</ReactQueryProviders>
          </main>
        </div>
      </body>
    </html>
  );
}
