import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"

type CarouselProps = {
    children: React.ReactNode[]
    autoSlide?: boolean
    autoSlideInterval?: number
}

export default function Carousel({
                                     children: slides,
                                     autoSlide = false,
                                     autoSlideInterval = 3000,
                                 }: CarouselProps) {
    const [curr, setCurr] = useState(0)

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])
    return (
        <div className="overflow-hidden relative">
            <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
                <button
                    onClick={prev}
                    className="p-1 text-gray-800 cursor-pointer pointer-events-auto"
                >
                    <ChevronLeft size={40} />
                </button>
                <button
                    onClick={next}
                    className="p-1 text-gray-800 cursor-pointer pointer-events-auto"
                >
                    <ChevronRight size={40} />
                </button>
            </div>


        </div>
    )
}