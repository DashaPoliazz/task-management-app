import "../../../styles/global.css";
import { ReactElement } from "react";
import GlassPane from "../../../components/GlassPane";

type Props = {
  children: ReactElement;
};

export default function DashboardRootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head></head>
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane classNames="w-full h-full flex item-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
}
