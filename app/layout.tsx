import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cn-derpflegedienst.de"),
  title: "CN – Der Pflegedienst | Ambulante Pflege in Frankfurt",
  description: "Ambulante Pflege in Frankfurt am Main: Grundpflege, Betreuung und hauswirtschaftliche Unterstützung – persönlich und zuhause.",
  openGraph: {
    title: "CN – Der Pflegedienst | Pflege, die zuhause ankommt",
    description: "Persönliche ambulante Pflege in Frankfurt am Main – für mehr Sicherheit, Selbstständigkeit und Lebensqualität zuhause.",
    type: "website",
    locale: "de_DE"
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HomeHealthCareService",
  name: "CN – Der Pflegedienst Christoph Strobel und Nikola Banicevic GbR",
  url: "https://www.cn-derpflegedienst.de",
  telephone: "+49 69 96237272",
  email: "info@cn-derpflegedienst.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mörfelder Landstr. 64",
    postalCode: "60598",
    addressLocality: "Frankfurt am Main",
    addressCountry: "DE"
  },
  areaServed: "Frankfurt am Main"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        {children}
      </body>
    </html>
  );
}
