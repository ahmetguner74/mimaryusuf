import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hakkında | Mimar Yusuf Özdamar",
  description: "Mimar Yusuf Özdamar'ın özgeçmişi, deneyimleri ve mimari yaklaşımı hakkında bilgiler."
};

export default function HakkindaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 