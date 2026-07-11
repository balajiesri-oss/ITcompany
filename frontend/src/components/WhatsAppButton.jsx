import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%20TechNova%20Solutions%2C%20I%20want%20a%20free%20consultation."
      className="fixed bottom-6 left-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#128C7E] text-white shadow-xl transition hover:scale-105 focus-visible:ring-4 focus-visible:ring-[#128C7E]/30 sm:left-6"
      aria-label="Chat on WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle size={24} />
    </a>
  );
}
