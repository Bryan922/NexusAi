import React, { Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import Footer from './components/Footer';

function App() {
  return (
    <Suspense fallback={
      <div className="min-h-screen w-full bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    }>
      <main className="min-h-screen w-full bg-black text-white overflow-x-hidden">
        <Header />
        <Hero />
        <Features />
        <Demo />
        <Footer />
      </main>
    </Suspense>
  );
}

export default App;