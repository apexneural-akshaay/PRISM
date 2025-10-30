import { Button } from "./ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function CTAFooter() {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="py-24"
        style={{
          background: 'linear-gradient(135deg, #0040FF 0%, #0020A0 100%)'
        }}
      >
        <div className="max-w-[1440px] mx-auto px-20 text-center relative z-10">
          <h2 className="text-[3rem] text-white mb-6" style={{ fontWeight: 700 }}>
            Ready to see PRISM in action?
          </h2>
          
          <p className="text-[1.25rem] text-white/90 mb-4 max-w-3xl mx-auto">
            Experience how PRISM automates your entire recruitment workflow with intelligent AI summaries and smart scheduling.
          </p>
          
          <p className="text-[0.95rem] text-white/70 mb-10 max-w-2xl mx-auto italic">
            Precision Recruitment Intelligence & Selection Mechanism
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              className="bg-[#FF6B4A] text-white hover:bg-[#FF5535] rounded-lg px-10 py-7 h-auto text-lg shadow-xl"
              style={{ fontWeight: 600 }}
              asChild
            >
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@apexneural.com&su=PRISM Demo Request&body=Hi,%0D%0A%0D%0AI would like to book a demo of PRISM.%0D%0A%0D%0AThank you!"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            
            <Button 
              className="bg-white text-[#0052FF] hover:bg-gray-100 rounded-lg px-10 py-7 h-auto text-lg shadow-xl"
              style={{ fontWeight: 600 }}
              asChild
            >
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@apexneural.com&su=PRISM Sales Inquiry&body=Hi,%0D%0A%0D%0AI would like to learn more about PRISM and discuss pricing options.%0D%0A%0D%0AThank you!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Sales
              </a>
            </Button>
          </div>
          
          {/* Footer Bottom */}
          <div className="pt-12 border-t border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <span className="text-white" style={{ fontWeight: 700 }}>A</span>
                </div>
                <div>
                  <p className="text-white text-sm" style={{ fontWeight: 600 }}>
                    ApexNeural
                  </p>
                  <p className="text-white/60 text-xs">
                    AI-Powered Recruitment Solutions
                  </p>
                </div>
              </div>
              
              <p className="text-white/70 text-sm">
                © 2025 ApexNeural. All rights reserved.
              </p>
              
              <div className="flex items-center gap-6 text-sm text-white/70">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>
      
      {/* Mobile Responsive Adjustments */}
      <style>{`
        @media (max-width: 1024px) {
          .max-w-\\[1440px\\] {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }
      `}</style>
    </footer>
  );
}
