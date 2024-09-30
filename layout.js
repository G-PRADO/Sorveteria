import "./globals.css";
import Topo from "./components/Topo";
import Rodape from "./components/Rodape";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Topo/>
        {children}
        <Rodape/>
      </body>
    </html>
  );
}
