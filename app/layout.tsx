
import type { Metadata } from "next";
import "./../styles/globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.planterraconstruction.com"),
  title: { default: "Planterra Construction – Affordable Housing & Energy Infrastructure", template: "%s | Planterra Construction" },
  description: "Dallas, Texas–based builder delivering prefab housing and oil & gas infrastructure across the Americas. SIP technology, HDPE pipe systems, and modular construction solutions.",
  openGraph: { title: "Planterra Construction – Affordable Housing & Energy Infrastructure", description: "Dallas, Texas–based builder delivering prefab housing and oil & gas infrastructure across the Americas.", images: ["/opengraph-image.png"], url: "https://www.planterraconstruction.com", siteName: "Planterra Construction", type: "website", locale: "en_US" },
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};
export default function RootLayout({ children }: { children: React.ReactNode }) { return (<html lang="en"><body>{children}</body></html>); }
