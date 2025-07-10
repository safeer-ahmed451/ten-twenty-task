import "@/styles/globals.scss";
import type { Metadata } from "next";
import { TopProgressBar } from "@/components/topProgressBar";
import { ChildNode } from "@/types";
import MainWrapper from "@/layouts/main/MainWrapper";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Ten Twenty Task",
};

export default function RootLayout({ children }: ChildNode) {
  return (
    <html lang="en" className={workSans.className}>
      <head></head>
      <body>
        <TopProgressBar />
        <MainWrapper>
          <div>{children}</div>
        </MainWrapper>
      </body>
    </html>
  );
}
