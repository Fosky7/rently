import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border py-8 text-muted-foreground">
      <div className="container mx-auto text-center px-4">
        <p>&copy; {new Date().getFullYear()} Acme Corp. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-foreground transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
