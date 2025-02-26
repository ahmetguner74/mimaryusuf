import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projeler | Mimar Yusuf Özdamar",
  description: "Mimar Yusuf Özdamar'ın öne çıkan projeleri ve mimari çalışmaları."
};

export default function ProjelerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 