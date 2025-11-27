import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Convobelt | Intelligent Footwear Production Tracking",
  description: "Eliminate 'Cut Sizes' and take control of your footwear production with Convobelt's intelligent tracking system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T6CJNRBZ');`,
        }}
      />
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-white text-slate-900`}
      >
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T6CJNRBZ" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
          }}
        />
        {children}
      </body>
    </html>
  );
}
