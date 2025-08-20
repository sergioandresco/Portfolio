'use client';

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import AutoScroll from 'embla-carousel-auto-scroll';
import Pictures from "@/data/carousel";

function CarouselImages() {

    const autoScroll = useRef(
        AutoScroll({ 
          speed: 2,
          stopOnInteraction: false,
        })
    );

    return (
        <div className="here">
            <Carousel 
                plugins={[autoScroll.current]}
                opts={{ loop: true }}
            >
                <CarouselContent>
                    {Pictures.map((pic, index) => (
                        <CarouselItem key={index} className="md:basis-1/4">
                            <div className="p-1">
                                <Card
                                    className="border-0"
                                >
                                    <CardContent className="flex items-center justify-center">
                                        <img
                                            src={pic.src}
                                            alt={pic.alt}
                                            className="
                                                object-cover
                                                w-64
                                                h-64
                                                md:w-75
                                                md:h-75
                                                rounded-md     
                                            "
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export default CarouselImages;