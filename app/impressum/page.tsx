export default function Impressum() {
    return (
        <section className="py-20 bg-brand-black">
            <div className="max-w-3xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-brand-white mb-12">
                    Impressum
                </h1>

                <div className="space-y-8 text-brand-white/80">

                    {/* Angaben */}
                    <div>
                        <h2 className="text-xl font-bold text-brand-gold mb-2">
                            Angaben gemäß § 5 DDG
                        </h2>
                        <p>FIX & BLITZ</p>
                        <p>Mohammad Hasan</p>
                        <p>Ruwestr. 2</p>
                        <p>49084 Osnabrück</p>
                    </div>

                    {/* Kontakt */}
                    <div>
                        <h2 className="text-xl font-bold text-brand-gold mb-2">
                            Kontakt
                        </h2>
                        <p>Telefon: +49 1571 513109</p>
                        <p>E-Mail: info@fixundblitz.de</p>
                    </div>

                    {/* USt-ID */}
                    <div>
                        <h2 className="text-xl font-bold text-brand-gold mb-2">
                            Umsatzsteuer-ID
                        </h2>
                        <p>
                            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                        </p>
                        <p>USt-ID: DE457338665</p>
                    </div>

                    {/* Berufsbezeichnung */}
                    <div>
                        <h2 className="text-xl font-bold text-brand-gold mb-2">
                            Berufsbezeichnung und berufsrechtliche Regelungen
                        </h2>
                        <p>Berufsbezeichnung: Dienstleister</p>
                        <p>Zuständige Kammer: Handwerkskammer Osnabrück - Emsland - Grafschaft Bentheim</p>
                        <p>Verliehen in: Deutschland</p>
                    </div>

                    {/* Verbraucherstreitbeilegung */}
                    <div>
                        <h2 className="text-xl font-bold text-brand-gold mb-2">
                            Verbraucherstreitbeilegung / Universalschlichtungsstelle
                        </h2>
                        <p>
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </div>

                    {/* Bildnachweise */}
                    <div>
                        <h2 className="text-xl font-bold text-brand-gold mb-2">
                            Bildnachweise
                        </h2>
                        <p>
                            Die Illustrationen und das Maskottchen auf dieser Website wurden mithilfe von künstlicher Intelligenz (KI) erstellt.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}