import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import ChatBot from './ChatBot';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-starbucks-green text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Starbucks</h3>
              <p className="text-sm opacity-90">
                Desperte seus sentidos com nossa seleção premium de cafés e bebidas artesanais.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="opacity-90 hover:opacity-100 transition-opacity">Home</a></li>
                <li><a href="/menu" className="opacity-90 hover:opacity-100 transition-opacity">Menu</a></li>
                <li><a href="/contact" className="opacity-90 hover:opacity-100 transition-opacity">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="text-sm space-y-2 opacity-90">
                <p>Av. Paulista, 1000</p>
                <p>São Paulo - SP</p>
                <p>(11) 99999-9999</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-75">
            <p>&copy; 2024 Starbucks. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
      <ChatBot />
    </div>
  );
};

export default Layout;
