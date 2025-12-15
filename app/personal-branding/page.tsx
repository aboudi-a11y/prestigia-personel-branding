"use client"

import { useState } from "react"
import Image from "next/image"
import { CheckCircle2, Play, Star } from "lucide-react"
import QuoteModal from "@/components/quote-modal"

export default function PersonalBrandingPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)

  const [quantities, setQuantities] = useState({
    simple: 8,
    professional: 8,
    premium: 8,
  })

  const pricePerVideo = {
    simple: 500, // 500 DH per video (Video + Montage)
    professional: 700, // 700 DH per video (Video + Montage + Script)
    premium: 1000, // 1000 DH per video (Video + Montage + Script + Ads)
  }

  const calculatePrice = (basePrice: number, quantity: number) => {
    let pricePerUnit = basePrice

    // Réduction de 150 DH pour 20+ vidéos
    if (quantity >= 20) {
      pricePerUnit = basePrice - 150
    }
    // Réduction de 100 DH pour 15+ vidéos
    else if (quantity >= 15) {
      pricePerUnit = basePrice - 100
    }

    return pricePerUnit * quantity
  }

  const handleWhatsAppContact = (packageName: string, quantity: number, price: number) => {
    const phoneNumber = "212669017250" // Replace with your WhatsApp number
    const message = encodeURIComponent(
      `Bonjour Prestigia Agency ! Je suis intéressé(e) par le pack "${packageName}" avec ${quantity} vidéos pour ${price} DH. Pouvez-vous me donner plus d'informations ?`,
    )
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  const packages = [
    {
      id: "simple",
      name: "Pack Simple",
      basePrice: pricePerVideo.simple,
      features: [
        "Vidéo professionnelle",
        "Montage vidéo de qualité",
        "Effets et transitions",
        "Musique et sound design",
        "Optimisation pour réseaux sociaux",
        "Livraison en HD",
      ],
      popular: false,
    },
    {
      id: "professional",
      name: "Pack Professional",
      basePrice: pricePerVideo.professional,
      features: [
        "Vidéo professionnelle",
        "Montage vidéo premium",
        "Script personnalisé",
        "Storytelling optimisé",
        "Sous-titres inclus",
        "Effets visuels avancés",
        "Musique et sound design",
        "Livraison en Full HD",
      ],
      popular: true,
    },
    {
      id: "premium",
      name: "Pack Premium",
      basePrice: pricePerVideo.premium,
      features: [
        "Vidéo professionnelle",
        "Montage vidéo premium",
        "Script professionnel",
        "Storytelling avancé",
        "Campagne publicitaire (Ads)",
        "Ciblage et stratégie média",
        "A/B Testing",
        "Sous-titres et traductions",
        "Effets visuels professionnels",
        "Reporting et analytics",
        "Support prioritaire",
        "Livraison en 4K",
      ],
      popular: false,
    },
  ]

  const videos = [
    {
      id: "rw-IeGZ0IUo",
      title: "ProfFrancais zineb",
    },
    {
      id: "uCg0wnRc3Mw",
      title: "ProfSvt imad",
    },
    {
      id: "NXtQ-jJ56h4",
      title: "ProfPhysique oussama",
    },
  ]

  const testimonials = [
   {
      name: "imad",
      role: "CEO, Tech Startup",
      image: "/imad.jpg",
      rating: 5,
      text: "Une très bonne expérience. Studio bien équipé, équipe professionnelle et accompagnement sérieux pour produire un contenu de qualité.",
    },
    {
      name: "oussama",
      role: "Coach Business",
      image: "/oussama.jpg",
      rating: 5,
      text: "Pour les profs li baghyin ysawro les cours dyalhom, lkhedma m3a Prestigia hia ahsan choix. Travail professionnel, respect du temps, w un résultat de qualité.",
    },
    {
      name: " zineb ",
      role: "Influenceur Mode",
      image: "/zineb.jpg",
      rating: 5,
      text: "Studio professionnel zt pro, bonne organisation, accompagnement clair.W l résultat Kayban men lmara lawla o kayhder 3la raso ✅",
    },
  ]

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-purple-500/10" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-accent via-purple-400 to-accent bg-clip-text text-transparent">
                Personal Branding
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">
                Développez votre marque personnelle et devenez une référence dans votre domaine
              </p>
            </div>
          </div>
        </section>

        {/* Service Description */}
        <section className="py-20 px-4 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-foreground">Qu'est-ce que le Personal Branding ?</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  Le personal branding est l'art de construire et gérer votre image de marque personnelle. C'est la
                  manière dont vous vous présentez au monde professionnel et dont vous êtes perçu par votre audience.
                </p>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  Notre approche combine stratégie de contenu, design créatif et expertise des réseaux sociaux pour vous
                  aider à vous démarquer, attirer les bonnes opportunités et construire une communauté engagée autour de
                  votre expertise.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Stratégie personnalisée</h3>
                      <p className="text-foreground/70">
                        Analyse approfondie de votre positionnement et création d'une stratégie sur mesure
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Contenu de qualité</h3>
                      <p className="text-foreground/70">
                        Création de contenu visuel et rédactionnel qui reflète votre identité
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Résultats mesurables</h3>
                      <p className="text-foreground/70">
                        Suivi des performances et optimisation continue pour maximiser votre impact
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/slide.jpg"
                  alt="Personal branding showcase"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Specialist Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-foreground">Votre Expert Marketing</h2>
              <p className="text-lg text-foreground/70">Un expert dédié pour transformer votre présence en ligne</p>
            </div>
            <div className="bg-gradient-to-br from-accent/10 via-card to-purple-500/10 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/mounaim.jpg"
                    alt="Spécialiste en Création de Contenu"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2 text-foreground">Abdelmounaim elhani</h3>
                  <p className="text-xl text-accent mb-6">Spécialiste en Création de Contenu</p>
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    Filmmaker professionnel avec plus de 7 ans d’expérience dans la réalisation vidéo, la création de
                    contenu et le personal branding. Spécialisé dans la conception de vidéos de haute qualité, de l’idée
                    à la post-production, avec une grande attention portée aux détails et à l’impact visuel.
                    J’accompagne également les personnes et les marques dans la construction d’une identité forte,
                    authentique et cohérente, afin de renforcer leur image et leur présence sur les réseaux sociaux.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-foreground/80">Expert en stratégie de contenu multi-plateformes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-foreground/80">Spécialiste LinkedIn & Instagram</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-foreground/80">Expert shoting</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20 px-4 bg-card/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-foreground">Nos Packs prof</h2>
              <p className="text-lg text-foreground/70">Choisissez la quantité de vidéos adaptée à vos besoins</p>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-accent font-semibold">💰 Réductions disponibles :</p>
                <p className="text-sm text-red-500">
                  15-19 vidéos : -100 DH par vidéo | 20+ vidéos : -150 DH par vidéo
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pack, index) => {
                const quantity = quantities[pack.id as keyof typeof quantities]
                const totalPrice = calculatePrice(pack.basePrice, quantity)
                const pricePerUnit = totalPrice / quantity
                const hasDiscount = quantity >= 15

                return (
                  <div
                    key={index}
                    className={`relative rounded-3xl p-8 ${
                      pack.popular
                        ? "bg-gradient-to-br from-accent/20 via-card to-purple-500/20 border-2 border-accent"
                        : "bg-card border border-border"
                    } hover:scale-105 transition-transform duration-300`}
                  >
                    {pack.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-background px-4 py-1 rounded-full text-sm font-semibold">
                        Plus Populaire
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-4 text-foreground">{pack.name}</h3>

                      <div className="mb-6">
                        <label className="block text-sm text-foreground/70 mb-2">Nombre de vidéos</label>
                        <div className="flex items-center justify-center gap-3">
                          <button
                            onClick={() =>
                              setQuantities((prev) => ({
                                ...prev,
                                [pack.id]: Math.max(8, prev[pack.id as keyof typeof prev] - 1),
                              }))
                            }
                            className="w-10 h-10 rounded-full bg-card border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 font-bold"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={quantity}
                            onChange={(e) => {
                              const value = Math.max(8, Math.min(50, Number.parseInt(e.target.value) || 8))
                              setQuantities((prev) => ({
                                ...prev,
                                [pack.id]: value,
                              }))
                            }}
                            className="w-20 h-10 text-center bg-background border-2 border-border rounded-lg text-lg font-semibold text-foreground focus:border-accent focus:outline-none"
                            min="8"
                            max="50"
                          />
                          <button
                            onClick={() =>
                              setQuantities((prev) => ({
                                ...prev,
                                [pack.id]: Math.min(50, prev[pack.id as keyof typeof prev] + 1),
                              }))
                            }
                            className="w-10 h-10 rounded-full bg-card border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="bg-background/50 rounded-xl p-4 mb-4">
                        {hasDiscount && (
                          <div className="text-sm text-foreground/40 line-through mb-1">
                            {pack.basePrice} DH × {quantity} vidéos = {pack.basePrice * quantity} DH
                          </div>
                        )}
                        <div className="text-sm text-foreground/60 mb-1">
                          {Math.round(pricePerUnit)} DH × {quantity} vidéos
                          {hasDiscount && (
                            <span className="ml-2 text-accent font-semibold">
                              ({quantity >= 20 ? "-150" : "-100"} DH/vidéo)
                            </span>
                          )}
                        </div>
                        <div className="flex items-end justify-center gap-1">
                          <span className="text-5xl font-bold text-accent">{totalPrice}</span>
                          <span className="text-xl text-accent mb-2">DH</span>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {pack.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="text-accent mt-0.5 flex-shrink-0" size={20} />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => handleWhatsAppContact(pack.name, quantity, totalPrice)}
                      className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                        pack.popular
                          ? "bg-accent text-background hover:bg-accent/90"
                          : "bg-card border-2 border-accent text-accent hover:bg-accent hover:text-background"
                      }`}
                    >
                      Commencer
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-foreground">Nos Réussites en Vidéo</h2>
              <p className="text-lg text-foreground/70">
                Découvrez comment nous avons aidé nos clients à développer leur marque personnelle
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="group rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  {playingVideo === video.id ? (
                    <div className="relative aspect-video">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-t-2xl"
                      />
                    </div>
                  ) : (
                    <div className="relative h-[300px] cursor-pointer" onClick={() => setPlayingVideo(video.id)}>
                      <Image
                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                        alt={video.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play size={28} fill="currentColor" className="text-background ml-1" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="bg-card p-6 border-t-4 border-accent">
                    <h3 className="font-bold text-lg text-foreground mb-1">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-card/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-foreground">Ce que disent nos clients</h2>
              <p className="text-lg text-foreground/70">
                Des témoignages authentiques de professionnels qui nous font confiance
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 border border-border hover:border-accent transition-colors duration-300"
                >
                  <Star className="text-accent/30 mb-4" size={40} />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" className="text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Prêt à développer votre Personal Branding ?
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Discutons de votre projet et créons ensemble la stratégie qui fera décoller votre marque personnelle
            </p>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-accent text-background px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-105"
            >
              Demander un Devis Gratuit
            </button>
          </div>
        </section>

        <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      </div>
    </>
  )
}
