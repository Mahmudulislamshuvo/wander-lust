const Introduction = () => {
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
        <div className="max-w-2xl">
          <span className="text-emerald-600 font-medium tracking-wide uppercase text-xs mb-3 block">
            Destination Highlights
          </span>
          <h2 className="text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight mb-6">
            Essentials for your <br />
            Parisian Journey
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed">
            We've curated the must-see landmarks, crucial travel tips, and
            culinary experiences into one seamless plan. Don't just visit
            Paris—live it.
          </p>
        </div>
      </div>

      {/* <!-- Grid Features (Mapped from Attractions, Tips, Food) --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {/* <!-- Feature 1: Key Attraction --> */}
        <div className="group">
          <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-emerald-50 mb-6 group-hover:bg-emerald-100 transition-colors">
            <i
              data-lucide="tower-control"
              className="text-emerald-600 w-6 h-6"
            ></i>
          </div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-medium text-slate-900 tracking-tight">
              Eiffel Tower
            </h3>
            <span className="text-xs font-semibold bg-emerald-100 text-emerald-800 px-2 py-1 rounded">
              4.8 ★
            </span>
          </div>
          <p className="text-lg text-slate-500 leading-relaxed">
            The iron lady of Paris. Pre-book tickets to save waiting time and
            catch the sparkling lights at the top of every hour.
          </p>
        </div>

        {/* <!-- Feature 2: Key Attraction --> */}
        <div className="group">
          <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-orange-50 mb-6 group-hover:bg-orange-100 transition-colors">
            <i data-lucide="frame" className="text-orange-500 w-6 h-6"></i>
          </div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-medium text-slate-900 tracking-tight">
              The Louvre
            </h3>
            <span className="text-xs font-semibold bg-orange-100 text-orange-800 px-2 py-1 rounded">
              4.9 ★
            </span>
          </div>
          <p className="text-lg text-slate-500 leading-relaxed">
            Home to the Mona Lisa. Expert tip: Enter through the Carrousel du
            Louvre underground entrance to avoid the main pyramid lines.
          </p>
        </div>

        {/* <!-- Feature 3: Key Attraction --> */}
        <div className="group">
          <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-blue-50 mb-6 group-hover:bg-blue-100 transition-colors">
            <i data-lucide="crown" className="text-blue-500 w-6 h-6"></i>
          </div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-medium text-slate-900 tracking-tight">
              Versailles
            </h3>
            <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded">
              4.7 ★
            </span>
          </div>
          <p className="text-lg text-slate-500 leading-relaxed">
            A royal masterpiece. Explore the Hall of Mirrors and rent a bike to
            traverse the massive, perfectly manicured gardens.
          </p>
        </div>

        {/* <!-- Feature 4: Food Experience --> */}
        <div className="group">
          <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-purple-50 mb-6 group-hover:bg-purple-100 transition-colors">
            <i data-lucide="croissant" className="text-purple-500 w-6 h-6"></i>
          </div>
          <h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">
            Gastronomy
          </h3>
          <p className="text-lg text-slate-500 leading-relaxed">
            Must try: Duck Confit, Crème Brûlée, and Pain au Chocolat. Best
            areas: Le Marais and Latin Quarter. Look for 'Formule' lunch menus.
          </p>
        </div>

        {/* <!-- Feature 5: Travel Tips --> */}
        <div className="group">
          <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-yellow-50 mb-6 group-hover:bg-yellow-100 transition-colors">
            <i data-lucide="lightbulb" className="text-yellow-600 w-6 h-6"></i>
          </div>
          <h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">
            Smart Travel
          </h3>
          <p className="text-lg text-slate-500 leading-relaxed">
            Buy a 'Paris Visite' pass for Metro. Always say "Bonjour" when
            entering shops. Be cautious of bracelet scams near Sacré-Cœur.
          </p>
        </div>

        {/* <!-- Feature 6: Budget --> */}
        <div className="group">
          <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-rose-50 mb-6 group-hover:bg-rose-100 transition-colors">
            <i data-lucide="wallet" className="text-rose-500 w-6 h-6"></i>
          </div>
          <h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">
            Budget Estimate
          </h3>
          <p className="text-lg text-slate-500 leading-relaxed">
            <span className="font-semibold text-slate-900">€500 - €800</span>
            per person. Covers moderate meals, transport, and entry tickets
            (excluding flights/hotels).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
