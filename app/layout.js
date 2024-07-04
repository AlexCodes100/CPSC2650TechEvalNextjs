import Link from "next/link";
import "./globals.css";



export const metadata = {
  title: "Tech Eval", // change the head
  description: "creating a todo app for Tech Eval",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
