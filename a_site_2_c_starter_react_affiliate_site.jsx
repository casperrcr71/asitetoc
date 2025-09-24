/*
A Site 2 C - Single-file React starter app (previewable)

How to use:
1) Replace YOUR_AMAZON_TAG_HERE with your Amazon Associates tag (e.g. mysite-20).
2) Edit siteTitle, description, and products array below with your real content and ASINs.
3) To run locally: create a new React app (Vite recommended) and replace src/App.jsx with this file.
   Commands (on a machine with Node.js installed):
     npm create vite@latest a-site-2c -- --template react
     cd a-site-2c
     npm install
     Replace src/App.jsx with this file content and then:
     npm run dev
4) Deploy to Vercel or Netlify by pushing to GitHub and connecting the repo.

Affiliate link format examples:
 - Product detail link: https://www.amazon.com/dp/ASIN/?tag=YOUR_AMAZON_TAG_HERE
 - Search link (safer for compliance): https://www.amazon.com/s?k=search+terms&tag=YOUR_AMAZON_TAG_HERE

Legal & Amazon rules (short checklist):
 - You must disclose on pages that you receive commissions from qualifying purchases. See the Disclosure component below.
 - Do NOT claim endorsement by Amazon.
 - Read Amazon Associates Program Policies before applying.

This file uses Tailwind classes for quick styling. If your project doesn't have Tailwind, classes will still fall back to basic browser styles.
*/

import React, { useState } from 'react';

const siteTitle = `A Site 2 C`;
const siteDescription = `Helpful product guides and hand-picked gear to help you choose the right items.`;
const AMAZON_TAG = 'YOUR_AMAZON_TAG_HERE'; // <-- Replace with your Amazon Associates tag when approved

// Example products: replace ASINs and data with your own
const initialProducts = [
  {
    id: 'p1',
    title: 'Sample Product One',
    asin: 'B000000000',
    price: '$49.99',
    img: 'https://via.placeholder.com/240x180?text=Product+1',
    short: 'A short blurb about product one.'
  },
  {
    id: 'p2',
    title: 'Sample Product Two',
    asin: 'B000000001',
    price: '$29.99',
    img: 'https://via.placeholder.com/240x180?text=Product+2',
    short: 'A short blurb about product two.'
  }
];

function Disclosure() {
  return (
    <div className="p-3 rounded bg-yellow-50 border border-yellow-200 text-sm">
      <strong>Affiliate disclosure:</strong> Some links on this site are affiliate links. If you click an
      affiliate link and buy something, I may earn a small commission (at no extra cost to you). Thank you for
      supporting {siteTitle}.
    </div>
  );
}

function Header({ onNav }) {
  return (
    <header className="py-6">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold">{siteTitle}</h1>
        <p className="text-sm text-gray-600">{siteDescription}</p>
        <nav className="mt-4 flex gap-3">
          <button onClick={() => onNav('home')} className="underline">Home</button>
          <button onClick={() => onNav('products')} className="underline">Products</button>
          <button onClick={() => onNav('about')} className="underline">About</button>
          <button onClick={() => onNav('privacy')} className="underline">Privacy</button>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-12 py-8 border-t">
      <div className="max-w-3xl mx-auto px-4 text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} {siteTitle}. All rights reserved.</p>
      </div>
    </footer>
  );
}

function Home({ products }) {
  return (
    <main className="max-w-3xl mx-auto px-4">
      <Disclosure />
      <section className="mt-6">
        <h2 className="text-2xl font-bold">Featured Picks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {products.map(p => (
            <article key={p.id} className="p-3 border rounded">
              <img src={p.img} alt={p.title} className="w-full h-44 object-cover rounded" />
              <h3 className="mt-2 font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-600">{p.short}</p>
              <p className="mt-2 font-bold">{p.price}</p>
              <a
                href={`https://www.amazon.com/dp/${p.asin}/?tag=${AMAZON_TAG}`}
                target="_blank" rel="noopener noreferrer nofollow"
                className="inline-block mt-3 px-3 py-2 border rounded">
                View on Amazon
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function Products({ products }) {
  return (
    <main className="max-w-3xl mx-auto px-4">
      <h2 className="text-2xl font-bold">Products</h2>
      <p className="text-sm text-gray-600">Curated product list with short reviews and affiliate links.</p>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map(p => (
          <div key={p.id} className="p-3 border rounded">
            <img src={p.img} alt={p.title} className="w-full h-44 object-cover rounded" />
            <h3 className="mt-2 font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600">{p.short}</p>
            <div className="mt-2 flex gap-2">
              <a href={`https://www.amazon.com/dp/${p.asin}/?tag=${AMAZON_TAG}`} target="_blank" rel="noopener noreferrer nofollow" className="px-3 py-2 border rounded">Buy on Amazon</a>
              <a href={`https://www.amazon.com/s?k=${encodeURIComponent(p.title)}&tag=${AMAZON_TAG}`} target="_blank" rel="noopener noreferrer nofollow" className="px-3 py-2 border rounded">Search on Amazon</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

function About() {
  return (
    <main className="max-w-3xl mx-auto px-4">
      <h2 className="text-2xl font-bold">About {siteTitle}</h2>
      <p className="mt-2 text-sm text-gray-700">We test and recommend products to help you decide quickly. We may receive a small commission from purchases made through our links.</p>
    </main>
  );
}

function Privacy() {
  return (
    <main className="max-w-3xl mx-auto px-4">
      <h2 className="text-2xl font-bold">Privacy Policy</h2>
      <p className="mt-2 text-sm text-gray-700">This is a sample privacy policy. Replace this text with a full policy addressing cookies, analytics, affiliate links, and contact info.</p>
    </main>
  );
}

export default function App() {
  const [route, setRoute] = useState('home');
  const [products] = useState(initialProducts);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="py-8 border-b">
        <Header onNav={setRoute} />
      </div>

      {route === 'home' && <Home products={products} />}
      {route === 'products' && <Products products={products} />}
      {route === 'about' && <About />}
      {route === 'privacy' && <Privacy />}

      <div className="max-w-3xl mx-auto px-4 mt-8">
        <p className="text-xs text-gray-500">Note: Replace placeholders (ASINs, affiliate tag, images) with your real content before publishing.</p>
      </div>

      <Footer />
    </div>
  );
}
