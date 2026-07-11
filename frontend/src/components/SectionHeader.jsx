import React from 'react';
export default function SectionHeader({ eyebrow, title, text, centered = false }) {
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl`}>
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="page-title mt-3">{title}</h1>
      {text && <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{text}</p>}
    </div>
  );
}
