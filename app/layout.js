import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata = {
  title: "Muxriddin Toshboyev - Portfolio",
  description: "Front-end Developer Portfolio",
  icons: {
    icon: "https://velog.velcdn.com/images/jh0152park/post/3cf084b5-8faa-4875-9267-9d32a1d729ec/image.png",
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
