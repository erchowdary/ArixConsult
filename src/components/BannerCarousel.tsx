import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import image1 from "figma:asset/99157225a2b4cdd7d5714c5efb9464fcd11c28a9.png";
import image2 from "figma:asset/51e58a06fc4ff0f62516608f4085a42768a96cdc.png";
import image3 from "figma:asset/8092c31ca7ea7a9a3ba8d6f25f5183c724211da1.png";
import image4 from "figma:asset/a5d72cb3c886afe8814d57d93f2c3f5a09d562f6.png";
import image5 from "figma:asset/124cb9aabc271ec1dd685e7672f8c16e4568988d.png";
import image6 from "figma:asset/123eddbce80c0fdd0df78c907efe18693ce21abb.png";

export function BannerCarousel() {
  const slides = [
    {
      src: image1,
      alt: "Semiconductor wafer manufacturing process",
      title:
        "Elite Semiconductor Talent for Your Critical Projects",
      description:
        "Connecting industry-leading companies with highly specialized engineers and consultants across chip design, manufacturing, and R&D.",
    },
    {
      src: image5,
      alt: "Automated semiconductor production line",
      title: "Precision Manufacturing Expertise",
      description:
        "Access top talent in automated production, process engineering, and quality control for semiconductor manufacturing.",
    },
    {
      src: image4,
      alt: "Advanced semiconductor chip fabrication",
      title: "Cutting-Edge Technology Partners",
      description:
        "Expert consultants specializing in advanced nodes, EDA tools, and next-generation semiconductor technologies.",
    },
    {
      src: image2,
      alt: "Semiconductor chip innovation",
      title: "From Design to Production",
      description:
        "Comprehensive talent solutions covering IC design, verification, testing, and fab operations.",
    },
    {
      src: image6,
      alt: "Electronic component manufacturing",
      title: "End-to-End Solutions",
      description:
        "Specialized manpower for assembly, packaging, testing, and supply chain management.",
    },
    {
      src: image3,
      alt: "Microchip assembly and testing",
      title: "Quality & Innovation Driven",
      description:
        "500+ successful placements with leading semiconductor companies worldwide.",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-16 relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[500px] sm:h-[300px] md:h-[300px] lg:h-[400px]">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-center"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />

                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-2xl text-white">
                      <h1 className="text-white mb-4 sm:mb-6 drop-shadow-lg">
                        {slide.title}
                      </h1>
                      <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-8 leading-relaxed drop-shadow-md">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-6 bg-white/90 hover:bg-white border-none w-12 h-12" />
        <CarouselNext className="right-6 bg-white/90 hover:bg-white border-none w-12 h-12" />
      </Carousel>
    </section>
  );
}