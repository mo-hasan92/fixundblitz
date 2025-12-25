import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Galerie | FIX & BLITZ",
    description: "Einblicke in unsere Arbeit: Gartenpflege, Reinigung und Entrümpelungen. Vorher-Nachher Bilder unserer Projekte.",
};

export default function Galerie() {
    const images = [
        { src: "/images/maskottchen-full.png", alt: "Gartenpflege Beispiel" },
        { src: "/images/maskottchen-half.png", alt: "Reinigung Beispiel" },
        { src: "/images/maskottchen-full.png", alt: "Transport Beispiel" },
        { src: "/images/maskottchen-half.png", alt: "Entrümpelung Beispiel" },
        { src: "/images/maskottchen-full.png", alt: "Team bei der Arbeit" },
        { src: "/images/maskottchen-half.png", alt: "Vorher / Nachher" },
    ];

    return (
        <>
            {/* Hero */}
            <section className="py-20 bg-brand-black">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-white text-center mb-4">
                        Unsere <span className="text-brand-gold">Galerie</span>
                    </h1>
                    <p className="text-brand-white/70 text-center max-w-2xl mx-auto">
                        Einblicke in unsere Arbeit und abgeschlossene Projekte.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20 bg-zinc-900">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {images.map((img, index) => (
                            <div key={index} className="relative group overflow-hidden rounded-xl aspect-[4/5] bg-brand-black/50 border border-brand-gold/10">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                                    <span className="text-brand-gold font-bold text-xl text-center">{img.alt}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-brand-white/50 text-center mt-12 italic">
                        (Dies sind Platzhalter-Bilder. Echte Projektfotos folgen in Kürze.)
                    </p>
                </div>
            </section>
        </>
    );
}
