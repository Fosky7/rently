import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-card text-card-foreground py-20 md:py-32">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Unlock Your Team's Full Potential
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Acme Corp provides innovative solutions to streamline your workflow, boost productivity, and drive success. Get started today!
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg">
            Get Started Free
          </button>
          <button className="bg-secondary text-secondary-foreground border border-border px-8 py-3 rounded-lg text-lg font-semibold hover:bg-secondary/90 transition-colors shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};
