const About = () => {
  return (
    <section className=" py-8 flex flex-col justify-center gap-10 h-auto lg:h-screen" id="about">
      <div className="container mx-auto px-4 md:flex-row items-center flex sm:flex-col lg:flex-row gap-5 ">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Wir sind Haustopia</h2>
          <p className="text-gray-600 mb-8">
          ein führendes Immobilienunternehmen, das sich auf außergewöhnliche Immobilien für jeden Lebensstil spezialisiert hat..
          </p>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Unsere Mission</h3>
            <p className="text-gray-600">
            Bei Haustopia ist es unsere Mission, Menschen bei der Suche nach ihrem Traumhaus zu helfen. Wir sind der Überzeugung, dass Ihr Zuhause nicht nur ein Ort zum Leben ist; es spiegelt auch Ihre Persönlichkeit und Ihre Ziele wider. Deshalb bemühen wir uns, eine breite Palette von Immobilien anzubieten, die den einzigartigen Vorlieben unserer Kunden gerecht werden.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2 pt-4">Unsere Vision</h3>
            <p className="text-gray-600">
            Unsere Vision ist es, die Immobilienbranche zu revolutionieren, indem wir modernste Technologie nutzen und maßgeschneiderte Dienstleistungen anbieten. Unser Ziel ist es, den Prozess des Immobilienkaufs zu vereinfachen und für alle Beteiligten nahtlos und angenehm zu gestalten. Haustopia sieht eine Zukunft, in der das Finden des perfekten Zuhauses ein aufregendes und stressfreies Erlebnis ist.
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <img className="w-full h-auto" src="teampic.jpg" alt="Haustopia" />
        </div>
      </div>
    </section>
  );
};

export default About;
