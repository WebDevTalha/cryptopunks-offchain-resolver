import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://gateway.thegraph.com/api/5e72663097a0e3d59ee23d6c3f0eb884/subgraphs/id/6LQQFdRiDHZTnVGJcjMXdUmcWgc3J3J44QMPd5uuQwKB",
  cache: new InMemoryCache(),
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crypto Punks Explorar",
  description: "Crypto Punks Explorar, to show latest Transfers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
