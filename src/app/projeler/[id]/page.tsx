import React from "react";
import { projeler } from "../../utils/data";
import { notFound } from "next/navigation";
import ProjeDetayClient from "./ProjeDetayClient";
import { Metadata } from "next";

// Sayfa parametrelerini tipini tanımlama
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// Sayfa başlığı ve meta verileri için dinamik oluşturma
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = parseInt(params.id);
  const proje = projeler.find((p) => p.id === id);

  if (!proje) {
    return {
      title: "Proje Bulunamadı",
    };
  }

  return {
    title: `${proje.title} | Mimar Yusuf Özdamar`,
    description: proje.description,
  };
}

// Proje detay sayfası bileşeni - Server Component
export default function ProjeDetay({ params }: Props) {
  const id = parseInt(params.id);
  const proje = projeler.find((p) => p.id === id);

  // WhatsApp bağlantısı için telefon numarasını formatlıyoruz
  const phoneNumber = "905446932627";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  // Proje bulunamazsa 404 sayfasına yönlendir
  if (!proje) {
    notFound();
  }

  return <ProjeDetayClient proje={proje} whatsappUrl={whatsappUrl} />;
} 