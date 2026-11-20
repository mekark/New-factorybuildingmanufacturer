import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Footer from "../components/Footer";
import DeferredGoogleTagManager from "../components/DeferredGoogleTagManager";
import MobileStickyBar from "../components/MobileStickyBar";
import MobileZoom from "../components/MobileZoom";
import "./globals.css";

const GTM_ID = "GTM-5SBMM86H";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Industrial Factory Construction & Expansion Company",
  description:
    "Leading Industrial Factory Construction & Expansion Company – Turnkey EPC expertise in In House PEB Manufacturing, Civil, PEB, MEP and Seamless Execution servicing the needs of Industrial factory Building Contractor & Industrial Factory Building Expansion Company.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document.documentElement,w=d.clientWidth,z=Math.min(Math.max(w/390,0.82),1.5);d.style.setProperty('--mobile-zoom',String(z))})();`,
          }}
        />
        <link
          rel="preload"
          as="image"
          href="/hero/mobile/design-banner-lcp.webp"
          media="(max-width: 1279px)"
        />
        <link rel="preload" as="image" href="/hero/hero-bg.webp" media="(min-width: 1280px)" />
      </head>
      <body
        className={`${manrope.variable} relative overflow-x-hidden pb-16 font-sans antialiased md:pb-0`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <MobileZoom />
        <div className="relative">{children}</div>
        <Footer />
        <MobileStickyBar />
        <DeferredGoogleTagManager gtmId={GTM_ID} />
      </body>
    </html>
  );
}