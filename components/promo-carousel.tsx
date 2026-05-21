'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const promos = [
  {
    id: 1,
    title: 'WIN UP TO',
    highlight: '3,000',
    subtitle: 'CEDIS',
    description: 'BIGGER WEEKEND!',
    cta: 'Claim Now',
    bgGradient: 'from-amber-500/20 via-red-500/20 to-purple-500/20',
    accentColor: 'text-amber-400',
  },
  {
    id: 2,
    title: 'REFER A FRIEND',
    highlight: '300',
    subtitle: 'CEDIS',
    description: 'GET UP TO',
    cta: 'Enter Now',
    bgGradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
    accentColor: 'text-emerald-400',
  },
  {
    id: 3,
    title: 'FIRST BET',
    highlight: '100%',
    subtitle: 'BONUS',
    description: 'UP TO GH¢500',
    cta: 'Get Bonus',
    bgGradient: 'from-blue-500/20 via-indigo-500/20 to-purple-500/20',
    accentColor: 'text-blue-400',
  },
]

export function PromoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % promos.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => setCurrentIndex(index)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + promos.length) % promos.length)
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % promos.length)

  return (
    <div className="relative rounded-xl overflow-hidden">
      {/* Slides */}
      <div className="relative h-[200px] md:h-[240px]">
        {promos.map((promo, index) => (
          <div
            key={promo.id}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? 'opacity-100 translate-x-0'
                : index < currentIndex
                  ? 'opacity-0 -translate-x-full'
                  : 'opacity-0 translate-x-full'
            }`}
          >
            <div className={`h-full bg-gradient-to-r ${promo.bgGradient} bg-card border border-border rounded-xl p-6 md:p-8 flex flex-col justify-center`}>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                {promo.description}
              </p>
              <p className="text-xs text-muted-foreground mb-2">{promo.title}</p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className={`text-5xl md:text-6xl font-black ${promo.accentColor}`}>
                  {promo.highlight}
                </span>
                <span className="text-2xl md:text-3xl font-bold text-foreground">
                  {promo.subtitle}
                </span>
              </div>
              <button className="w-fit px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                {promo.cta}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {promos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-primary w-6'
                : 'bg-muted-foreground/50 hover:bg-muted-foreground'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
