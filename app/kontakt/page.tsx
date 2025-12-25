import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kontakt | FIX & BLITZ",
    description: "Kontaktieren Sie uns für ein kostenloses Angebot. Telefonisch, per WhatsApp oder über unser Kontaktformular.",
};

export default function Kontakt() {
    return (
        <>
            {/* Hero */}
            <section className="py-20 bg-brand-black">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-white text-center mb-4">
                        Kontaktieren Sie <span className="text-brand-gold">uns</span>
                    </h1>
                    <p className="text-brand-white/70 text-center max-w-2xl mx-auto">
                        Wir freuen uns auf Ihre Anfrage und beraten Sie gerne kostenlos.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 bg-zinc-900">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">


                    {/* Formular */}
                    <div className="bg-brand-black p-8 rounded-xl border border-brand-gold/20">
                        <h2 className="text-2xl font-bold text-brand-white mb-6">
                            Schreiben Sie uns
                        </h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-brand-white/70 mb-2 text-sm">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                                    placeholder="Ihr Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-brand-white/70 mb-2 text-sm">E-Mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                                    placeholder="ihre@email.de"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-brand-white/70 mb-2 text-sm">Betreff</label>
                                <select
                                    id="subject"
                                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                                >
                                    <option>Allgemeine Anfrage</option>
                                    <option>Gartenpflege</option>
                                    <option>Reinigung</option>
                                    <option>Transport</option>
                                    <option>Entrümpelung</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-brand-white/70 mb-2 text-sm">Nachricht</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                                    placeholder="Wie können wir Ihnen helfen?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-brand-gold text-brand-black font-bold py-4 rounded-lg hover:bg-yellow-400 transition-colors"
                            >
                                Nachricht senden
                            </button>
                        </form>
                    </div>

                </div>
            </section>
        </>
    );
}
