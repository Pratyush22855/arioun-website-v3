import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arioun AI — AI Infrastructure for Local Business",
  description:
    "We build custom AI automation systems and intelligent agents that eliminate repetitive work and scale your local business operations.",
  openGraph: {
    title: "Arioun AI — AI Infrastructure for Local Business",
    description:
      "We build AI automation systems that eliminate repetitive work and scale your operations.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07050F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}

        {/* Voiceflow Chat Widget */}
        <Script
          id="voiceflow-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, t) {
                var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                v.onload = function() {
                  window.voiceflow.chat.load({
                    verify: { projectID: '69c2517a42b292115919d704' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production',
                    voice: { url: 'https://runtime-api.voiceflow.com' }
                  });
                }
                v.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
                v.type = 'text/javascript';
                s.parentNode.insertBefore(v, s);
              })(document, 'script');
            `,
          }}
        />

        {/* Calendly */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
