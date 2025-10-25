import React from "react";

interface FeatureCardProps {
  icon: string; // Placeholder for an icon, could be a React component or an image URL
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-card p-6 rounded-lg shadow-md border border-border text-card-foreground">
      <div className="text-4xl text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: "⚡",
      title: "Blazing Fast Performance",
      description: "Experience unparalleled speed and efficiency with our optimized infrastructure.",
    },
    {
      icon: " securely ",
      title: "Secure & Reliable",
      description: "Your data is protected with enterprise-grade security and 99.9% uptime.",
    },
    {
      icon: " intuitive ",
      title: "Intuitive User Interface",
      description: "Work smarter, not harder, with a beautifully designed and easy-to-use platform.",
    },
    {
      icon: " 🤝 ",
      title: "Seamless Collaboration",
      description: "Foster teamwork and communication with integrated collaboration tools.",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-background px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Powerful Features Designed for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
