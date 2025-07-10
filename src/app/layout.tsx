import "@/styles/globals.scss";
import type { Metadata } from "next";
import { TopProgressBar } from "@/components/topProgressBar";
import { ChildNode } from "@/types";
import MainWrapper from "@/layouts/main/MainWrapper";

export const metadata: Metadata = {
  title: "Ten Twenty Task",
};

export default function RootLayout({ children }: ChildNode) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for better font loading performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <TopProgressBar />
        <MainWrapper>
          <div>{children}</div>
        </MainWrapper>
      </body>
    </html>
  );
}
