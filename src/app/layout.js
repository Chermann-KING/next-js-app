import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Application Next.js",
  description:
    "Application Next.js généré lors de l'apprentissage des fondamentaux de du framework. Origine de la formation 'Lama Dev'.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
