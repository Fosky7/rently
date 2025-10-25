import React, { useState } from "react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-foreground text-2xl font-bold">Acme Corp</a>
        <div className="hidden md:flex space-x-4">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">Sign In</button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background mt-2">
          <a href="#features" className="block px-4 py-2 text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#pricing" className="block px-4 py-2 text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          <a href="#contact" className="block px-4 py-2 text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors mt-2">Sign In</button>
        </div>
      )}
    </nav>
  );
};
