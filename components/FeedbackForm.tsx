"use client";

import { useState } from "react";

export default function FeedbackForm() {
    const [name, setName] = useState("");
    const [rating, setRating] = useState(5);
    const [service, setService] = useState("Allgemein");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = `Feedback von ${name} - ${service}`;
        const body = `Name: ${name}%0D%0ABewertung: ${rating} Sterne%0D%0ADienstleistung: ${service}%0D%0A%0D%0ANachricht:%0D%0A${message}`;

        window.location.href = `mailto:info@fixundblitz.de?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    return (
        <form onSubmit={handleSubmit} className="bg-brand-black p-8 rounded-xl border border-brand-gold/20 text-left max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-white mb-6 text-center">Ihre Meinung ist uns wichtig</h3>

            <div className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-brand-white/70 mb-2 text-sm">Ihr Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                        placeholder="Max Mustermann"
                    />
                </div>

                <div>
                    <label htmlFor="service" className="block text-brand-white/70 mb-2 text-sm">Dienstleistung</label>
                    <select
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                    >
                        <option value="Allgemein">Allgemein</option>
                        <option value="Gartenpflege">Gartenpflege</option>
                        <option value="Reinigung">Reinigung</option>
                        <option value="Transport & Umzug">Transport & Umzug</option>
                        <option value="Entrümpelung">Entrümpelung</option>
                    </select>
                </div>

                <div>
                    <label className="block text-brand-white/70 mb-2 text-sm">Bewertung</label>
                    <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                className={`text-3xl transition-colors ${rating >= star ? "text-brand-gold" : "text-zinc-700 hover:text-brand-gold/50"}`}
                            >
                                ★
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-brand-white/70 mb-2 text-sm">Ihre Nachricht</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={4}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                        placeholder="Was hat Ihnen gefallen? Was können wir besser machen?"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-brand-gold text-brand-black font-bold py-4 rounded-lg hover:bg-yellow-400 transition-colors mt-6 shadow-[0_0_15px_-5px_var(--color-brand-gold)]"
                >
                    Feedback absenden
                </button>

                <p className="text-xs text-brand-white/40 text-center mt-4">
                    Hinweis: Dies öffnet Ihr E-Mail-Programm mit dem vorbereiteten Feedback.
                </p>
            </div>
        </form>
    );
}
