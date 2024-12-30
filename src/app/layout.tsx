import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ricobot",
  description: "RICO IS BACK!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang='en' style={{}}>
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1"/>
        </head>
        <body style={{ height: '100%', width: '100%', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
