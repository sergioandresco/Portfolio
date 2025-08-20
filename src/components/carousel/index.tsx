import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Pictures from "@/data/carousel";

function CarouselImages() {
    return (
        <Carousel className="">
            <CarouselContent>
                {Pictures.map((pic, index) => (
                    <CarouselItem key={index} className="lg:basis-1/4">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center">
                                    <img
                                        src={pic.src}
                                        alt={pic.alt}
                                        className="object-cover w-full h-full rounded-lg"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

export default CarouselImages;