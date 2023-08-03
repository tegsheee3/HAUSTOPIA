import "./globals.css";
import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Haustopia",
  description: "Finden Sie Ihr Traumhaus hier in unserer Immobilienwelt.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
