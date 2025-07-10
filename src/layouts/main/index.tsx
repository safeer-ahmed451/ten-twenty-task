import { ChildNode } from "@/types";
import MainHeader from "./header";

export default function MainTemplate({ children }: ChildNode) {
  return (
    <>
      <MainHeader />
      {children}
      {/* <MainFooter /> */}
    </>
  );
}
