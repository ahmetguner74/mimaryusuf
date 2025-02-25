import React from "react";
import { Proje, projeler } from "../../utils/data";
import { notFound } from "next/navigation";
import ProjeDetayClient from "./ProjeDetayClient";

// Sayfa parametrelerini tipini tanımlama
interface ProjeDetayProps {
  params: {
    id: string;
  };
}

// Sayfa başlığı ve meta verileri için dinamik oluşturma
export async function generateMetadata({ params }: ProjeDetayProps) {
  const id = parseInt(params.id);
  const proje = projeler.find((p) => p.id === id);

  if (!proje) {
    return {
      title: "Proje Bulunamadı | Mimar Yusuf Özdamar",
      description: "Aradığınız proje bulunamadı.",
    };
  }

  return {
    title: `${proje.title} | Mimar Yusuf Özdamar`,
    description: proje.description,
  };
}

// Proje detay sayfası bileşeni - Server Component
export default function ProjeDetay({ params }: ProjeDetayProps) {
  const id = parseInt(params.id);
  const proje = projeler.find((p) => p.id === id);

  // Proje bulunamazsa 404 sayfasına yönlendir
  if (!proje) {
    notFound();
  }

  // WhatsApp bağlantısı için telefon numarasını formatlıyoruz
  const phoneNumber = "905446932627";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return <ProjeDetayClient proje={proje} whatsappUrl={whatsappUrl} />;
} 