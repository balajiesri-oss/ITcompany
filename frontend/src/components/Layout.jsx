import React from 'react';
import { Outlet } from 'react-router-dom';
import ChatbotWidget from './ChatbotWidget.jsx';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import WhatsAppButton from './WhatsAppButton.jsx';

export default function Layout() {
  return (
    <div className="min-h-dvh overflow-x-hidden bg-slate-50 text-slate-900 dark:bg-[#07111f] dark:text-slate-100">
      <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-brand-900" href="#main">
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatbotWidget />
    </div>
  );
}
