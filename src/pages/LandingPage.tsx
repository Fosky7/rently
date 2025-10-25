import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, ShieldCheck, Cpu } from "lucide-react";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="py-4 border-b border-border">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Acme Inc.</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="text-foreground hover:text-primary">Features</a></li>
              <li><a href="#pricing" className="text-foreground hover:text-primary">Pricing</a></li>
              <li><a href="#contact" className="text-foreground hover:text-primary">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero bg-background py-20 md:py-32 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-6">
            Unlock Your Potential with Our Revolutionary Platform
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience a seamless blend of innovation and efficiency, designed to elevate your workflow and productivity to new heights.
          </p>
          <Button size="lg" className="px-8 py-3 text-lg font-semibold">Get Started Now</Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features py-16 md:py-24 bg-card text-card-foreground">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Powerful Features Designed for You</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="flex flex-col items-center text-center p-6">
              <CardHeader>
                <Rocket className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">Blazing Fast Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Our platform is optimized for speed, ensuring a smooth and responsive experience every time.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center p-6">
              <CardHeader>
                <ShieldCheck className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">Robust Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Your data is protected with enterprise-grade security measures and continuous monitoring.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center p-6">
              <CardHeader>
                <Cpu className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">Intelligent Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Automate repetitive tasks and focus on what truly matters with our smart AI capabilities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-secondary text-secondary-foreground py-8 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Acme Inc. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;