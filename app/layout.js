import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata = {
  title: "Muxriddin Toshboyev - Portfolio",
  description: "Front-end Developer Portfolio",
  icons: {
    icon: "/Next-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
