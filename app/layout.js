import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata = {
  title: "Muxriddin Toshboyev - Portfolio",
  description: "Front-end Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </head>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
