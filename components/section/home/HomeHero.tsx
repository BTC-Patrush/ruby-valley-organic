// app/components/section/HomeHero.tsx
import Link from 'next/link'
import Image from 'next/image'

type HomeHeroProps = {
  title: string
  subtitle: string
  heroImageUrl?: string
  primaryCtaText: string
  primaryCtaLink: string
  secondaryCtaText: string
  secondaryCtaLink: string
}

export default function HomeHero({
  title,
  subtitle,
  heroImageUrl,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
}: HomeHeroProps) {
  return (
    <section
      className="hero-bg flex h-[60vh] items-center justify-center text-center md:h-[80vh] bg-cover bg-center relative"
      style={{
        backgroundImage: heroImageUrl ? `url(${heroImageUrl})` : undefined,
      }}
    >
      {/* Optional: Fallback image if no Sanity image */}
      {heroImageUrl && (
        <Image
          src={heroImageUrl}
          alt={title}
          fill
          priority
          className="object-cover -z-10"
        />
      )}

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-4xl px-4">
        <h1 className="font-header mb-4 text-5xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-7xl">
          {title}
        </h1>
        <p className="mb-8 text-xl text-white drop-shadow-md sm:text-2xl">
          {subtitle}
        </p>
        <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
          <Link
            href={primaryCtaLink}
            className="transform rounded-xl bg-ruby px-8 py-3 font-bold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-red-900"
          >
            {primaryCtaText}
          </Link>
          <Link
            href={secondaryCtaLink}
            className="transform rounded-xl bg-white px-8 py-3 font-bold text-charcoal shadow-xl transition duration-300 hover:scale-105 hover:bg-gray-100"
          >
            {secondaryCtaText}
          </Link>
        </div>
      </div>
    </section>
  )
}