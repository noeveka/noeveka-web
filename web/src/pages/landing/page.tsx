import Navbar from "@/components/common/navbar";
import Hero from "@/components/landing/hero";
import WhatWeDo from "@/components/landing/what-we-do";
import WhoWeAre from "@/components/landing/who-we-are";
import Testimonials from "@/components/landing/testimonials";
import MetricsBar from "@/components/landing/metrics-bar";
import WhyNoeveka from "@/components/landing/why-noeveka";
import CtaStrip from "@/components/landing/cta-strip";
import Faq from "@/components/landing/faq";
import Footer from "@/components/common/footer";

export default function LandingPage() {
    return (
        <div className="bg-white text-text-dark">
            <Navbar />
            <main className="pt-16">
                <Hero />
                <WhatWeDo />
                <WhoWeAre />
                <Testimonials />
                <MetricsBar />
                <WhyNoeveka />
                <Faq />
                <CtaStrip />
            </main>
            <Footer />
        </div>
    );
}
