import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollTop";
import SmoothScroll from "@/components/providers/SmoothScroll";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Contrologi | Contrologi es la plataforma digital líder en logística de carga en México. Optimiza, controla y automatiza tus operaciones logísticas, carta porte y gestión de transporte en un solo sistema.",
    template: "%s | Contrologi",
  },
  description: "Contrologi es la plataforma digital líder en logística de carga en México. Optimiza, controla y automatiza tus operaciones logísticas, carta porte y gestión de transporte en un solo sistema.",
  keywords: ['software a la medida', 'plataforma digital', 'contrologi', 'blueservices', 'carta porte', 'logística'],
  openGraph: {
    title: "Contrologi",
    description:
      "Contrologi es la plataforma digital líder en logística de carga en México. Optimiza, controla y automatiza tus operaciones logísticas, carta porte y gestión de transporte en un solo sistema.",
    url: "https://contrologi.vercel.app/",
    siteName: "Contrologi",
    images: [
      {
        url: "https://contrologi.vercel.app/img/contrologi-preview.png",
        width: 1200,
        height: 630,
        alt: "Contrologi",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} antialiased`}>
        <SmoothScroll>
          <Header />
          {children}
          <ScrollToTop />
          <Footer />
        </SmoothScroll>
        <script src="https://unpkg.com/lenis@1.3.16/dist/lenis.min.js"></script>
      </body>
       
    </html>
  );
}
