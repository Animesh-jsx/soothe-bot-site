import { Button } from "@/components/ui/button";
import { ChatInterface } from "@/components/ChatInterface";
import { Heart, Shield, Users, Clock, Phone, Mail, MapPin } from "lucide-react";
import heroImage from "@/assets/therapy-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary-light/80 to-primary/70" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        <div className="relative container mx-auto px-6 py-20 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Your Mental Health Journey Starts Here
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              Compassionate, evidence-based psychiatric care tailored to your unique needs. 
              Take the first step towards healing and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-primary-glow hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                <Phone className="mr-2" size={20} />
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose Our Practice</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive mental health care with a focus on healing, growth, and lasting wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Compassionate Care",
                description: "Evidence-based treatment delivered with empathy and understanding"
              },
              {
                icon: Shield,
                title: "Safe Environment",
                description: "Confidential, judgment-free space for healing and personal growth"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Licensed psychiatrists and therapists with specialized training"
              },
              {
                icon: Clock,
                title: "Flexible Scheduling",
                description: "In-person and virtual sessions to fit your lifestyle and needs"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Chat Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Have Questions?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Chat with our assistant to learn more about our services, treatment approaches, and how we can help you on your mental health journey.
            </p>
          </div>
          
          <ChatInterface />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-foreground">Ready to Take the Next Step?</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Contact us today to schedule your consultation and begin your journey toward better mental health.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mb-4">
                  <Phone className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground">(555) 123-4567</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mb-4">
                  <Mail className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">info@mentalhealth.com</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mb-4">
                  <MapPin className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-muted-foreground">123 Wellness Ave<br />Suite 200</p>
              </div>
            </div>
            
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-light hover:shadow-lg transition-all duration-300 px-8">
              Schedule Your Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Your Mental Health Matters</h3>
          <p className="text-primary-foreground/80 mb-6">
            Professional psychiatric care with compassion and expertise
          </p>
          <p className="text-sm text-primary-foreground/60">
            © 2024 Mental Health Practice. All rights reserved. | Licensed Professional Counselors
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;