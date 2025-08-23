
import type { Metadata } from "next";
import "./../styles/globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.planterraconstruction.com"),
  title: { default: "Planterra Construction – Prefab Housing for Resilient Communities", template: "%s | Planterra Construction" },
  description: "Dallas, Texas–based builder delivering fast, strong, and sustainable prefab housing across Latin America using SIP technology.",
  openGraph: { title: "Planterra Construction – Prefab Housing for Resilient Communities", description: "Dallas, Texas–based builder delivering prefab housing across Latin America using SIP technology.", images: ["/opengraph-image.png"], url: "https://www.planterraconstruction.com", siteName: "Planterra Construction", type: "website", locale: "en_US" },
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};
export default function RootLayout({ children }: { children: React.ReactNode }) { return (<html lang="en"><body>{children}</body></html>); }
