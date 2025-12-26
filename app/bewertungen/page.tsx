
import { Metadata } from "next";
import FeedbackForm from "@/components/FeedbackForm";

export const metadata: Metadata = {
    title: "Bewertungen | FIX & BLITZ",
    description: "Das sagen unsere Kunden über uns. Echte Bewertungen zu Gartenpflege, Reinigung und mehr.",
};

export default function Bewertungen() {
    const reviews = [
        {
            name: "Sabine Müller",
            role: "Privatkunde",
            service: "Gartenpflege",
            stars: 5,
            date: "Oktober 2024",
            text: "Mein Garten war ein Dschungel, jetzt ist er wieder eine Oase! Das Team war super pünktlich, freundlich und hat alles sauber hinterlassen. Klare Empfehlung!",
        },
        {
            name: "Thomas Weber",
            role: "Geschäftskunde",
            service: "Büroreinigung",
            stars: 5,
            date: "September 2024",
            text: "Wir lassen unsere Büros seit 3 Monaten von FIX & BLITZ reinigen und sind extrem zufrieden. Zuverlässig, gründlich und sehr faire Preise.",
        },
        {
            name: "Julia Schneider",
            role: "Umzug",
            service: "Transport",
            stars: 5,
            date: "August 2024",
            text: "Der Umzug lief wie am Schnürchen. Die Jungs haben richtig angepackt und waren dabei immer gut gelaunt. Meine Möbel wurden sorgsam behandelt.",
        },
        {
            name: "Michael Lang",
            role: "Hausbesitzer",
            service: "Entrümpelung",
            stars: 5,
            date: "November 2024",
            text: "Schnelle Terminvergabe für meine Kellerentrümpelung. Innerhalb von einem Tag war alles weg. Super Service!",
        },
        {
            name: "Lisa Bergmann",
            role: "Privatkunde",
            service: "Reinigung",
            stars: 4,
            date: "Dezember 2024",
            text: "Sehr gute Fensterreinigung. Ein kleiner Fleck wurde übersehen, aber nach einem Anruf sofort am nächsten Tag korrigiert. Top Service-Verhalten!",
        },
        {
            name: "Andreas Koch",
            role: "Gartenbesitzer",
            service: "Heckenschnitt",
            stars: 5,
            date: "Juli 2024",
            text: "Endlich sieht meine Hecke wieder akkurat aus. Das Team hat auch das Grüngut direkt mitgenommen. Gerne wieder.",
        },
    ];

    return (
        <>
            {/* Hero */}
            <section className="py-20 bg-brand-black">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-white text-center mb-4">
                        Was unsere Kunden <span className="text-brand-gold">sagen</span>
                    </h1>
                    <p className="text-brand-white/70 text-center max-w-2xl mx-auto">
                        Ihre Zufriedenheit ist unser Maßstab. Hier finden Sie echtes Feedback unserer Kunden.
                    </p>
                </div>
            </section>

            {/* Reviews Grid */}
            <section className="py-20 bg-zinc-900">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.map((review, index) => (
                            <div key={index} className="bg-brand-black border border-brand-gold/20 rounded-xl p-8 hover:border-brand-gold transition-all duration-300 group hover:-translate-y-1">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-brand-white font-bold text-lg">{review.name}</h3>
                                        <p className="text-brand-white/50 text-sm">{review.role}</p>
                                    </div>
                                    <div className="text-brand-gold text-lg tracking-wider">
                                        {"★".repeat(review.stars)}
                                        <span className="text-zinc-600">{"★".repeat(5 - review.stars)}</span>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <span className="bg-brand-gold/10 text-brand-gold text-xs px-2 py-1 rounded inline-block mb-2">
                                        {review.service}
                                    </span>
                                    <p className="text-brand-white/80 italic">
                                        &quot;{review.text}&quot;
                                    </p>
                                </div>

                                <div className="text-brand-white/30 text-xs text-right border-t border-brand-gold/10 pt-4 mt-4">
                                    {review.date}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feedback-Formular Bereich */}
            <section id="feedback-form" className="py-20 bg-brand-black border-t border-brand-gold/20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-brand-white mb-4">
                        Waren Sie auch zufrieden?
                    </h2>
                    <p className="text-brand-white/80 text-lg mb-12">
                        Wir freuen uns über jedes Feedback! Bewerten Sie uns direkt hier.
                    </p>

                    <FeedbackForm />
                </div>
            </section>
        </>
    );
}
