'use client';
import { useState } from 'react';

export default function QBHome() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [productCategory, setProductCategory] = useState('todos');
  const [paddleFilter, setPaddleFilter] = useState('todos');
  
  // ESTADOS DE TAMAÑOS
  const [selectedSizeT2, setSelectedSizeT2] = useState('85');
  const [selectedSizeUV, setSelectedSizeUV] = useState('88');
  const [selectedSizeFlyweight, setSelectedSizeFlyweight] = useState('83');
  const [selectedSizeStingray, setSelectedSizeStingray] = useState('72');
  const [selectedSizeVDrive, setSelectedSizeVDrive] = useState('81');

  // CONSTRUCCIONES SELECCIONADAS (all-carbon / hex-flex)
  const [t2Construction, setT2Construction] = useState('all-carbon');
  const [uvConstruction, setUvConstruction] = useState('all-carbon');

  // HOTSPOTS INTERACTIVOS
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [activeUVHotspot, setActiveUVHotspot] = useState(null);

  // REINICIALIZAR SELECCIÓN DE PUNTOS AL IR AL INICIO
  const goToHome = () => {
    setActiveTab('inicio');
    setActiveHotspot(null);
    setActiveUVHotspot(null);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToProducts = (category = 'todos') => {
    setProductCategory(category);
    setActiveTab('productos');
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const t2Hotspots = {
    1: {
      title: "Construcción Rígida y Firme",
      pos: "Frente • Cuello Izquierdo",
      text: "Proporciona una transmisión más directa de la fuerza durante la remada. Ofrece una sensación de ligereza sin perder potencia; una opción de construcción premium para quienes buscan máxima respuesta y eficiencia."
    },
    2: {
      title: "Estructura Alveolar (Honeycomb) & Diamond Elite",
      pos: "Frente • Base Derecha",
      text: "Combina una estructura alveolar liviana con la vara de carbono Diamond Elite para un equilibrio ideal entre flexibilidad y rigidez. Respuesta potente y eficiente con una sensación cómoda en las manos."
    },
    3: {
      title: "Diedro Simple & Cóncavas Progresivas",
      pos: "Dorso • Arista Central",
      text: "Genera una sensación increíblemente estable y suave desde la entrada hasta la salida. Combina características de los modelos anteriores Trifecta y V-Drive para un comportamiento único en el agua."
    },
    4: {
      title: "Entrada Liviana & Potencia Fluida",
      pos: "Dorso • Base Izquierda",
      text: "La pala se siente más liviana al inicio facilitando la entrada. Su diseño progresivo da potencia constante, mientras el diedro mantiene una trayectoria limpia, predecible y controlada."
    }
  };

  const uvHotspots = {
    1: {
      title: "Inclinación de 10° & Conexión Firme",
      pos: "Frente • Base Izquierda",
      text: "La pala presenta un diseño con una inclinación de 10°, que ayuda a lograr una conexión firme con el agua y una remada eficiente y reactiva. En comparación con el T2, el UV ofrece una sensación de mayor potencia y es ideal para quienes buscan acelerar rápidamente y generar la máxima fuerza posible."
    },
    2: {
      title: "Construcción Rígida y Firme",
      pos: "Frente • Cuello Derecho",
      text: "La construcción de la pala proporciona una sensación más rígida y firme, lo que permite transmitir la fuerza de manera más directa durante la remada. Ofrece una sensación de ligereza sin perder potencia y representa una opción de construcción premium para quienes buscan la máxima respuesta y potencia."
    },
    3: {
      title: "Estructura Alveolar (Honeycomb) & Diamond Elite",
      pos: "Dorso • Borde Inferior Derecho",
      text: "La pala cuenta con una estructura alveolar liviana (honeycomb) combinada con una vara de carbono Diamond Elite, diseñada para proporcionar un equilibrio ideal entre flexibilidad y rigidez. Esta combinación permite generar potencia con una respuesta inmediata, manteniendo al mismo tiempo una sensación cómoda en las manos."
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased pb-12 selection:bg-zinc-950 selection:text-white">
      
      {/* SECCIÓN DE ENCABEZADO */}
      <header className="relative h-[55vh] w-full flex flex-col justify-between items-center overflow-hidden bg-zinc-950 pt-6">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80 pointer-events-none"
          style={{ 
            backgroundImage: "url('/header-bg.png')" 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black pointer-events-none" />

        {/* NAVEGACIÓN PRINCIPAL */}
        <nav className="relative z-20 w-full max-w-xl px-4 grid grid-cols-3 gap-2 md:gap-3">
          <button 
            onClick={() => goToProducts('todos')}
            className={`group relative border backdrop-blur-md rounded-2xl py-3 px-2 text-center transition-all duration-300 shadow-lg active:scale-95 select-none cursor-pointer ${
              activeTab === 'productos' && productCategory === 'todos'
                ? 'bg-white border-white text-zinc-950' 
                : 'bg-zinc-900/80 hover:bg-white border-white/20 hover:border-white text-white hover:text-zinc-950'
            }`}
          >
            <span className={`block text-[11px] md:text-xs font-black uppercase tracking-wider transition-colors select-none ${
              activeTab === 'productos' && productCategory === 'todos' ? 'text-zinc-950' : 'text-white group-hover:text-zinc-950'
            }`}>
              Productos
            </span>
            <span className={`block text-[9px] transition-colors mt-0.5 select-none ${
              activeTab === 'productos' && productCategory === 'todos' ? 'text-zinc-600' : 'text-zinc-400 group-hover:text-zinc-600'
            }`}>
              Todo el Catálogo
            </span>
          </button>

          <button 
            onClick={() => {
              setActiveTab('contacto');
              if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`group relative border backdrop-blur-md rounded-2xl py-3 px-2 text-center transition-all duration-300 shadow-lg active:scale-95 select-none cursor-pointer ${
              activeTab === 'contacto' 
                ? 'bg-white border-white text-zinc-950' 
                : 'bg-zinc-900/80 hover:bg-white border-white/20 hover:border-white text-white hover:text-zinc-950'
            }`}
          >
            <span className={`block text-[11px] md:text-xs font-black uppercase tracking-wider transition-colors select-none ${
              activeTab === 'contacto' ? 'text-zinc-950' : 'text-white group-hover:text-zinc-950'
            }`}>
              Contáctanos
            </span>
            <span className={`block text-[9px] transition-colors mt-0.5 select-none ${
              activeTab === 'contacto' ? 'text-zinc-600' : 'text-zinc-400 group-hover:text-zinc-600'
            }`}>
              Atención
            </span>
          </button>

          <button 
            onClick={() => {
              setActiveTab('acerca-de');
              if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`group relative border backdrop-blur-md rounded-2xl py-3 px-2 text-center transition-all duration-300 shadow-lg active:scale-95 select-none cursor-pointer ${
              activeTab === 'acerca-de' 
                ? 'bg-white border-white text-zinc-950' 
                : 'bg-zinc-900/80 hover:bg-white border-white/20 hover:border-white text-white hover:text-zinc-950'
            }`}
          >
            <span className={`block text-[11px] md:text-xs font-black uppercase tracking-wider transition-colors select-none ${
              activeTab === 'acerca-de' ? 'text-zinc-950' : 'text-white group-hover:text-zinc-950'
            }`}>
              Acerca de
            </span>
            <span className={`block text-[9px] transition-colors mt-0.5 select-none ${
              activeTab === 'acerca-de' ? 'text-zinc-600' : 'text-zinc-400 group-hover:text-zinc-600'
            }`}>
              Nuestra Esencia
            </span>
          </button>
        </nav>

        {/* LOGO */}
        <div 
          onClick={goToHome}
          className="relative z-10 text-center px-4 pb-10 my-auto cursor-pointer select-none group"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 border border-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-zinc-100 mb-3 select-none group-hover:bg-white/20 transition-all">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Distribuidores Oficiales
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] uppercase italic select-none group-hover:scale-105 transition-transform">
            QB - PADDLES
          </h1>
          <p className="text-xs md:text-sm font-bold text-zinc-300 tracking-[0.4em] uppercase mt-1 drop-shadow-md select-none">
            QUICKBLADE
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 pointer-events-none">
          <svg className="relative block w-full h-[30px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,54.05,18.88,82,26.2c60,15.75,123.63,26.23,186.1,28.6A543.14,543.14,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
          </svg>
        </div>
      </header>

      {/* CONTENIDO DINÁMICO */}
      <main className="max-w-xl mx-auto px-6 mt-10">

        {/* --- INTERFAZ 1: INICIO --- */}
        {activeTab === 'inicio' && (
          <div className="space-y-12 animate-fade-in">
            <section className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-wider inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-zinc-950 rounded">
                  SOBRE QB
                </h2>
              </div>

              {/* TARJETA 1: ESENCIA QB */}
              <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-6 md:p-8 shadow-sm">
                <p className="text-sm md:text-base text-zinc-700 leading-relaxed text-center font-normal">
                  <strong className="text-zinc-950 font-extrabold">Quickblade</strong> representa mucho más que los remos más rápidos e innovadores del mundo, representa un compromiso con el rendimiento, la calidad y la innovación.
                </p>
                <p className="text-sm md:text-base text-zinc-700 leading-relaxed mt-4 text-center font-normal">
                  Es un compromiso con seguir avanzando y nunca conformarse, con superar los límites de lo posible y una promesa, tanto para nosotros mismos como para nuestros clientes, de dar siempre lo mejor.
                </p>
                <p className="text-sm md:text-base text-zinc-950 font-bold leading-relaxed mt-4 text-center italic">
                  QuickBlade es lo que somos y lo que aspiramos a ser.
                </p>
              </div>

              {/* TARJETA 2: ¿POR QUÉ ELEGIR QUICKBLADE? */}
              <div className="relative overflow-hidden bg-zinc-950 text-white rounded-3xl p-6 md:p-8 shadow-xl border border-zinc-800">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

                <div className="text-center space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
                      Rendimiento & Durabilidad
                    </span>
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-wider text-white italic">
                      ¿Por qué elegir Quickblade?
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-left pt-2">
                    <div className="bg-zinc-900/90 border border-zinc-800 p-3.5 rounded-2xl flex items-center gap-3">
                      <span className="text-lg">🛠️</span>
                      <p className="text-xs font-semibold text-zinc-300">Fabricación artesanal con precisión única</p>
                    </div>

                    <div className="bg-zinc-900/90 border border-zinc-800 p-3.5 rounded-2xl flex items-center gap-3">
                      <span className="text-lg">🚀</span>
                      <p className="text-xs font-semibold text-zinc-300">Materiales de primera calidad enfocado en rendimiento</p>
                    </div>

                    <div className="bg-zinc-900/90 border border-zinc-800 p-3.5 rounded-2xl flex items-center gap-3">
                      <span className="text-lg">⚡</span>
                      <p className="text-xs font-semibold text-zinc-300">Máxima eficiencia y durabilidad comprobada</p>
                    </div>
                  </div>

                  <div className="pt-3">
                    <div className="bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-amber-500/20 border border-amber-500/30 rounded-2xl p-4 text-center">
                      <p className="text-sm md:text-base text-amber-300 font-extrabold italic uppercase tracking-wide">
                        "Un remo diseñado para rendir al máximo y durar toda la vida."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="relative overflow-hidden rounded-3xl border border-zinc-200 shadow-sm bg-zinc-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
                <img 
                  src="https://supracer.com/wp-content/uploads/2013/11/Jim-Terrell-Stand-Up-Paddler.jpg" 
                  alt="Jim Terrell, el olímpico fundador" 
                  className="w-full h-64 md:h-72 object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] font-black uppercase text-zinc-400 tracking-wider">Fundador</span>
                    <h3 className="text-base font-extrabold text-white">Jim Terrell</h3>
                    <p className="text-xs text-zinc-300 font-light">4 veces olímpico y la mente detrás de QB</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] font-black text-white">
                    EST. 1989
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4 max-w-xs mx-auto pt-2">
              <button 
                onClick={() => goToProducts('remos')}
                className="w-full bg-zinc-950 hover:bg-zinc-900 active:scale-[0.98] text-white font-black py-4 px-6 rounded-full shadow-lg shadow-zinc-950/10 flex justify-between items-center group transition-all select-none cursor-pointer"
              >
                <span className="text-xs tracking-widest uppercase pl-3 select-none">🛶 Elegí tu Remo</span>
                <div className="bg-white text-zinc-950 p-2.5 rounded-full group-hover:translate-x-1 transition-transform">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
                </div>
              </button>

              <button 
                onClick={() => goToProducts('accesorios')}
                className="w-full bg-white hover:bg-zinc-50 border-2 border-zinc-950 active:scale-[0.98] text-zinc-950 font-black py-4 px-6 rounded-full flex justify-between items-center group transition-all select-none cursor-pointer"
              >
                <span className="text-xs tracking-widest uppercase pl-3 select-none">🎒 Accesorios</span>
                <div className="bg-zinc-950 text-white p-2.5 rounded-full group-hover:translate-x-1 transition-transform">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
                </div>
              </button>
            </section>
          </div>
        )}

        {/* --- INTERFAZ 2: CATÁLOGO DE PRODUCTOS --- */}
        {activeTab === 'productos' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
              <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-wider inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-zinc-950 rounded">
                CATÁLOGO DE PRODUCTOS
              </h2>
            </div>

            {/* BARRA DE FILTROS PRINCIPAL */}
            <div className="flex justify-center items-center gap-2 bg-zinc-100 p-1.5 rounded-full max-w-sm mx-auto border border-zinc-200">
              <button 
                onClick={() => setProductCategory('todos')}
                className={`flex-1 py-2 rounded-full text-xs font-black transition-all select-none cursor-pointer ${
                  productCategory === 'todos' ? 'bg-zinc-950 text-white shadow-md' : 'text-zinc-700 hover:text-zinc-950'
                }`}
              >
                Todos
              </button>
              <button 
                onClick={() => setProductCategory('remos')}
                className={`flex-1 py-2 rounded-full text-xs font-black transition-all select-none cursor-pointer ${
                  productCategory === 'remos' ? 'bg-zinc-950 text-white shadow-md' : 'text-zinc-700 hover:text-zinc-950'
                }`}
              >
                🛶 Remos
              </button>
              <button 
                onClick={() => setProductCategory('accesorios')}
                className={`flex-1 py-2 rounded-full text-xs font-black transition-all select-none cursor-pointer ${
                  productCategory === 'accesorios' ? 'bg-zinc-950 text-white shadow-md' : 'text-zinc-700 hover:text-zinc-950'
                }`}
              >
                🎒 Accesorios
              </button>
            </div>

            {/* FILTRO SECUNDARIO DE MODELOS DE REMO */}
            {(productCategory === 'todos' || productCategory === 'remos') && (
              <div className="flex flex-wrap justify-center gap-1.5 pt-1 max-w-md mx-auto">
                <span className="w-full text-center text-[10px] font-extrabold uppercase text-zinc-400 tracking-wider mb-1">
                  Filtrar modelo de remo:
                </span>
                {[
                  { id: 'todos', name: 'Todos los modelos' },
                  { id: 'v-drive', name: 'V-Drive' },
                  { id: 't2', name: 'T2 Series' },
                  { id: 'uv', name: 'UV' },
                  { id: 'flyweight', name: 'Flyweight' },
                  { id: 'stingray', name: 'Stingray' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setPaddleFilter(item.id)}
                    className={`px-3.5 py-1.5 rounded-full text-[11px] font-black transition-all select-none cursor-pointer border ${
                      paddleFilter === item.id
                        ? 'bg-zinc-950 text-white border-zinc-950 shadow-md'
                        : 'bg-white text-zinc-700 border-zinc-200 hover:border-zinc-400'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}

            {/* MOSTRAR SECCIÓN DE REMOS */}
            {(productCategory === 'todos' || productCategory === 'remos') && (
              <div className="space-y-12 pt-2">
                <div className="border-b border-zinc-200 pb-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Categoría</span>
                  <h3 className="text-xl font-black text-zinc-950 uppercase italic">Remos de Alto Rendimiento</h3>
                </div>

                {/* ===== MODELO: V-DRIVE ALL CARBON ===== */}
                {(paddleFilter === 'todos' || paddleFilter === 'v-drive') && (
                  <div className="space-y-6 bg-zinc-50 border border-zinc-200 p-6 rounded-3xl shadow-sm">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-red-600">
                          Diseñado por Dave Kalama
                        </span>
                        <h4 className="text-2xl font-black text-zinc-950 uppercase italic tracking-tight">V-DRIVE ALL CARBON</h4>
                        <p className="text-sm text-zinc-500 font-medium mt-0.5">Potencia, estabilidad y tracción perfecta para todas las disciplinas</p>
                      </div>

                      <div className="flex items-center gap-1.5 bg-zinc-200 p-1 rounded-full border border-zinc-300 select-none">
                        <button 
                          onClick={() => setSelectedSizeVDrive('81')}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-black transition-all select-none cursor-pointer ${
                            selectedSizeVDrive === '81' ? 'bg-zinc-950 text-white shadow' : 'text-zinc-600 hover:text-zinc-950'
                          }`}
                        >
                          81
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 bg-zinc-950 p-6 rounded-3xl shadow-xl border border-zinc-800">
                      <div className="flex flex-col items-center">
                        <span className="text-[9px] font-black uppercase tracking-widest text-red-400 mb-2 select-none">FRENTE</span>
                        <div className="w-full max-w-[180px] aspect-[1/2] rounded-2xl overflow-hidden flex items-center justify-center bg-white p-2 border border-zinc-800 shadow-inner">
                          <img src="/vdrive-front.jpeg" alt="V-Drive All Carbon Frente" className="w-full h-full object-contain select-none rounded-xl" />
                        </div>
                      </div>

                      <div className="flex flex-col items-center">
                        <span className="text-[9px] font-black uppercase tracking-widest text-red-400 mb-2 select-none">COMPLETO</span>
                        <div className="w-full max-w-[180px] aspect-[1/2] rounded-2xl overflow-hidden flex items-center justify-center bg-white p-2 border border-zinc-800 shadow-inner">
                          <img src="/vdrive-back.jpeg" alt="V-Drive All Carbon Completo" className="w-full h-full object-contain select-none rounded-xl" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-zinc-200 rounded-2xl p-5 space-y-3">
                      <h5 className="text-base md:text-lg font-black uppercase tracking-wider text-zinc-950">
                        Sección en V Cóncava y Doble Diedro
                      </h5>
                      <p className="text-sm md:text-base text-zinc-800 leading-relaxed font-normal">
                        Creado y perfeccionado por la leyenda <strong className="text-zinc-950 font-black">Dave Kalama</strong>. Su diseño presenta una sección en V cóncava con bordes que forman un doble diedro para una máxima estabilidad durante la tracción.
                      </p>
                      <p className="text-sm md:text-base text-zinc-800 leading-relaxed pt-2 border-t border-zinc-100 font-normal">
                        Permite una tracción limpia y sin esfuerzo, manteniendo una remada suave, fluida y predecible. Cuenta con una estructura alveolar liviana (honeycomb) y eje de carbono Diamond Elite para una excelente relación flex-rigidez y respuesta inmediata.
                      </p>
                    </div>

                    <div className="text-center pt-2">
                      <a 
                        href="https://wa.me/5492235865057"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-zinc-950 hover:bg-zinc-900 active:scale-95 text-white font-black text-xs px-8 py-3.5 rounded-full shadow-lg transition-all uppercase tracking-wider select-none cursor-pointer"
                      >
                        Consultar V-Drive All Carbon ({selectedSizeVDrive} sq in) por WhatsApp
                      </a>
                    </div>
                  </div>
                )}

                {/* ===== MODELO: REMO T2 SERIES ===== */}
                {(paddleFilter === 'todos' || paddleFilter === 't2') && (
                  <div className="space-y-6 bg-zinc-50 border border-zinc-200 p-6 rounded-3xl shadow-sm">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                      <div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-amber-600">
                          {t2Construction === 'all-carbon' ? 'Construcción Premium' : 'Flexibilidad & Accesibilidad'}
                        </span>
                        <h4 className="text-2xl font-black text-zinc-950 uppercase italic tracking-tight">T2 SERIES</h4>
                        <p className="text-sm text-zinc-500 font-medium mt-0.5">
                          {t2Construction === 'all-carbon'
                            ? 'Es una excelente opción para remadores de larga distancia, downwind y agua plana'
                            : 'Flexibilidad suave para menor carga articular'}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 bg-zinc-200 p-1 rounded-full border border-zinc-300 select-none self-end md:self-auto">
                        <button 
                          onClick={() => setSelectedSizeT2('79')}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-black transition-all select-none cursor-pointer ${
                            selectedSizeT2 === '79' ? 'bg-zinc-950 text-white shadow' : 'text-zinc-600 hover:text-zinc-950'
                          }`}
                        >
                          79
                        </button>
                        <button 
                          onClick={() => setSelectedSizeT2('85')}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-black transition-all select-none cursor-pointer ${
                            selectedSizeT2 === '85' ? 'bg-zinc-950 text-white shadow' : 'text-zinc-600 hover:text-zinc-950'
                          }`}
                        >
                          85
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-center items-center gap-2 bg-zinc-200 p-1 rounded-full max-w-xs mx-auto border border-zinc-300 select-none">
                      <button
                        onClick={() => setT2Construction('all-carbon')}
                        className={`flex-1 py-1.5 rounded-full text-xs font-black transition-all select-none cursor-pointer ${
                          t2Construction === 'all-carbon' ? 'bg-amber-600 text-white shadow' : 'text-zinc-700 hover:text-zinc-950'
                        }`}
                      >
                        All Carbon
                      </button>
                      <button
                        onClick={() => setT2Construction('hex-flex')}
                        className={`flex-1 py-1.5 rounded-full text-xs font-black transition-all select-none cursor-pointer ${
                          t2Construction === 'hex-flex' ? 'bg-sky-600 text-white shadow' : 'text-zinc-700 hover:text-zinc-950'
                        }`}
                      >
                        Hex Flex
                      </button>
                    </div>

                    {t2Construction === 'all-carbon' && (
                      <div className="space-y-6 animate-fade-in">
                        <p className="text-sm md:text-base text-zinc-800 leading-relaxed text-center font-medium">
                          El <strong className="text-zinc-950 font-black">T2</strong> es un remo premium de alta gama, diseñado para remadores que pasan períodos prolongados en el agua permitiendo aplicar fuerza de manera suave, constante y controlada, brindando una estabilidad excepcional durante toda la remada.
                        </p>

                        <div className="space-y-3">
                          <span className="block text-[11px] font-extrabold text-center uppercase tracking-widest text-amber-600 bg-amber-50 py-1.5 px-3 rounded-full border border-amber-200 select-none">
                            💡 Toca o pasa el ratón por los puntos naranjas para explorar
                          </span>

                          <div className="grid grid-cols-2 gap-3 md:gap-4 bg-zinc-950 p-4 md:p-6 rounded-3xl shadow-xl border border-zinc-800">
                            <div className="flex flex-col items-center">
                              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-2 select-none">FRENTE</span>
                              <div className="relative w-full max-w-[190px] aspect-[1/2] rounded-2xl overflow-hidden bg-white p-2 border border-zinc-800 shadow-inner flex items-center justify-center">
                                <img 
                                  src="/t2-front.webp" 
                                  alt="T2 Frente" 
                                  className="w-full h-full object-contain pointer-events-none select-none rounded-xl" 
                                />
                                <button 
                                  onMouseEnter={() => setActiveHotspot(1)}
                                  onClick={() => setActiveHotspot(1)}
                                  className={`absolute top-[41%] left-[34%] w-4 h-4 md:w-5 md:h-5 rounded-full bg-amber-500 shadow-md border-2 border-white select-none cursor-pointer hover:scale-125 active:scale-95 transition-all z-10 ${
                                    activeHotspot === 1 ? 'ring-4 ring-amber-400/50 scale-125' : ''
                                  }`}
                                />
                                <button 
                                  onMouseEnter={() => setActiveHotspot(2)}
                                  onClick={() => setActiveHotspot(2)}
                                  className={`absolute bottom-[28%] right-[22%] w-4 h-4 md:w-5 md:h-5 rounded-full bg-amber-500 shadow-md border-2 border-white select-none cursor-pointer hover:scale-125 active:scale-95 transition-all z-10 ${
                                    activeHotspot === 2 ? 'ring-4 ring-amber-400/50 scale-125' : ''
                                  }`}
                                />
                              </div>
                            </div>

                            <div className="flex flex-col items-center">
                              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-2 select-none">DORSO</span>
                              <div className="relative w-full max-w-[190px] aspect-[1/2] rounded-2xl overflow-hidden bg-white p-2 border border-zinc-800 shadow-inner flex items-center justify-center">
                                <img 
                                  src="/t2-back.webp" 
                                  alt="T2 Dorso" 
                                  className="w-full h-full object-contain pointer-events-none select-none rounded-xl" 
                                />
                                <button 
                                  onMouseEnter={() => setActiveHotspot(3)}
                                  onClick={() => setActiveHotspot(3)}
                                  className={`absolute top-[56%] right-[28%] w-4 h-4 md:w-5 md:h-5 rounded-full bg-amber-500 shadow-md border-2 border-white select-none cursor-pointer hover:scale-125 active:scale-95 transition-all z-10 ${
                                    activeHotspot === 3 ? 'ring-4 ring-amber-400/50 scale-125' : ''
                                  }`}
                                />
                                <button 
                                  onMouseEnter={() => setActiveHotspot(4)}
                                  onClick={() => setActiveHotspot(4)}
                                  className={`absolute bottom-[23%] left-[28%] w-4 h-4 md:w-5 md:h-5 rounded-full bg-amber-500 shadow-md border-2 border-white select-none cursor-pointer hover:scale-125 active:scale-95 transition-all z-10 ${
                                    activeHotspot === 4 ? 'ring-4 ring-amber-400/50 scale-125' : ''
                                  }`}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="min-h-[130px]">
                            {activeHotspot ? (
                              <div className="bg-zinc-950 text-white border-2 border-amber-500/80 rounded-3xl p-5 shadow-2xl relative animate-fade-in">
                                <button 
                                  onClick={() => setActiveHotspot(null)}
                                  className="absolute top-4 right-4 text-xs font-black text-zinc-400 hover:text-white select-none cursor-pointer"
                                >
                                  ✕
                                </button>
                                <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-[10px] font-black uppercase mb-2 select-none">
                                  {t2Hotspots[activeHotspot].pos}
                                </div>
                                <h4 className="text-sm font-extrabold uppercase tracking-tight text-white mb-1.5">
                                  {t2Hotspots[activeHotspot].title}
                                </h4>
                                <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
                                  {t2Hotspots[activeHotspot].text}
                                </p>
                              </div>
                            ) : (
                              <div className="bg-white border border-dashed border-zinc-300 rounded-3xl p-4 text-center text-zinc-400">
                                <p className="text-xs font-semibold select-none">
                                  Toca o pasa el ratón por los <span className="text-amber-600 font-bold">puntos naranjas</span> para ver la especificación técnica.
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {t2Construction === 'hex-flex' && (
                      <div className="space-y-6 animate-fade-in">
                        <div className="grid grid-cols-2 gap-4 bg-zinc-950 p-6 rounded-3xl shadow-xl border border-zinc-800">
                          <div className="flex flex-col items-center">
                            <span className="text-[9px] font-black uppercase tracking-widest text-sky-400 mb-2 select-none">FRENTE</span>
                            <div className="w-full max-w-[180px] aspect-[1/2] rounded-2xl overflow-hidden flex items-center justify-center bg-white p-2 border border-zinc-800 shadow-inner">
                              <img src="/t2-blue-front.png" alt="T2 Hex Flex Frente" className="w-full h-full object-contain select-none rounded-xl" />
                            </div>
                          </div>

                          <div className="flex flex-col items-center">
                            <span className="text-[9px] font-black uppercase tracking-widest text-sky-400 mb-2 select-none">DORSO</span>
                            <div className="w-full max-w-[180px] aspect-[1/2] rounded-2xl overflow-hidden flex items-center justify-center bg-white p-2 border border-zinc-800 shadow-inner">
                              <img src="/t2-blue-back.png" alt="T2 Hex Flex Dorso" className="w-full h-full object-contain select-none rounded-xl" />
                            </div>
                          </div>
                        </div>

                        <div className="bg-white border border-zinc-200 rounded-2xl p-5 space-y-3">
                          <h5 className="text-base md:text-lg font-black uppercase tracking-wider text-zinc-950">
                            Tecnología T2 Hex Flex
                          </h5>
                          <p className="text-sm md:text-base text-zinc-800 leading-relaxed font-normal">
                            La construcción <strong className="font-bold text-zinc-950">Hex Flex</strong> con vara de carbono y pala con mezcla de fibra y carbono aporta cierta flexibilidad al remo, lo que ayuda a suavizar la sensación de cada remada y potencialmente reducir la carga sobre las articulaciones.
                          </p>
                          <p className="text-sm md:text-base text-zinc-800 leading-relaxed pt-2 border-t border-zinc-100 font-normal">
                            Además, permite ofrecer el T2 a un precio más accesible, haciendo que este diseño de remo premium esté al alcance de una mayor cantidad de remadores.
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="text-center pt-2">
                      <a 
                        href="https://wa.me/5492235865057"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-zinc-950 hover:bg-zinc-900 active:scale-95 text-white font-black text-xs px-8 py-3.5 rounded-full shadow-lg transition-all uppercase tracking-wider select-none cursor-pointer"
                      >
                        Consultar T2 {t2Construction === 'hex-flex' ? 'Hex Flex' : 'All Carbon'} ({selectedSizeT2} sq in) por WhatsApp
                      </a>
                    </div>
                  </div>
                )}

                {/* ===== MODELO: REMO UV ===== */}
                {(paddleFilter === 'todos' || paddleFilter === 'uv') && (
                  <div className="space-y-6 bg-zinc-50 border border-zinc-200 p-6 rounded-3xl shadow-sm">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                      <div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-violet-600">Aceleración Explosiva</span>
                        <h4 className="text-2xl font-black text-zinc-950 uppercase italic tracking-tight">REMO UV</h4>
                        <p className="text-sm text-zinc-500 font-medium mt-0.5">Potencia máxima e instantánea en el agua</p>
                      </div>

                      <div className="flex items-center gap-1.5 bg-zinc-200 p-1 rounded-full border border-zinc-300 select-none self-end md:self-auto">
                        <button 
                          onClick={() => setSelectedSizeUV('77')}
                          className={`px-3 py-1.5 rounded-full text-xs font-black transition-all select-none cursor-pointer ${
                            selectedSizeUV === '77' ? 'bg-zinc-950 text-white shadow' : 'text-zinc-600 hover:text-zinc-950'
                          }`}
                        >
                          77
                        </button>
                        <button 
                          onClick={() => setSelectedSizeUV('82')}
                          className={`px-3 py-1.5 rounded-full text-xs font-black transition-all select-none cursor-pointer ${
                            selectedSizeUV === '82' ? 'bg-zinc-950 text-white shadow' : 'text-zinc-600 hover:text-zinc-950'
                          }`}
                        >
                          82
                        </button>
                        <button 
                          onClick={() => setSelectedSizeUV('88')}
                          className={`px-3 py-1.5 rounded-full text-xs font-black transition-all select-none cursor-pointer ${
                            selectedSizeUV === '88' ? 'bg-zinc-950 text-white shadow' : 'text-zinc-600 hover:text-zinc-950'
                          }`}
                        >
                          88
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-center items-center gap-2 bg-zinc-200 p-1 rounded-full max-w-xs mx-auto border border-zinc-300 select-none">
                      <button
                        onClick={() => setUvConstruction('all-carbon')}
                        className={`flex-1 py-1.5 rounded-full text-xs font-black transition-all select-none cursor-pointer ${
                          uvConstruction === 'all-carbon' ? 'bg-violet-600 text-white shadow' : 'text-zinc-700 hover:text-zinc-950'
                        }`}
                      >
                        All Carbon
                      </button>
                      <button
                        onClick={() => setUvConstruction('hex-flex')}
                        className={`flex-1 py-1.5 rounded-full text-xs font-black transition-all select-none cursor-pointer ${
                          uvConstruction === 'hex-flex' ? 'bg-emerald-600 text-white shadow' : 'text-zinc-700 hover:text-zinc-950'
                        }`}
                      >
                        Hex Flex
                      </button>
                    </div>

                    <p className="text-sm md:text-base text-zinc-800 leading-relaxed text-center font-medium">
                      El <strong className="text-zinc-950 font-black">UV</strong> es un remo premium de alta gama, diseñado para remadores que buscan potencia inmediata, una entrada firme en el agua y una sensación agresiva durante toda la remada. Está especialmente destinado para sprints, SUP surf, downwind y otras modalidades de remo en las que la aceleración rápida y las remadas potentes son fundamentales.
                    </p>

                    {uvConstruction === 'all-carbon' && (
                      <div className="space-y-3 animate-fade-in">
                        <span className="block text-[11px] font-extrabold text-center uppercase tracking-widest text-violet-600 bg-violet-50 py-1.5 px-3 rounded-full border border-violet-200 select-none">
                          💡 Toca o pasa el ratón por los puntos para explorar la tecnología UV All Carbon
                        </span>

                        <div className="grid grid-cols-2 gap-4 bg-zinc-950 p-6 rounded-3xl shadow-xl border border-zinc-800">
                          <div className="relative flex flex-col items-center">
                            <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-2 select-none">FRENTE</span>
                            <div className="relative w-full max-w-[180px] aspect-[1/2] rounded-2xl overflow-hidden flex items-center justify-center bg-white p-2 border border-zinc-850 shadow-inner">
                              <img src="/uv-front.png" alt="UV Frente" className="w-full h-full object-contain select-none animate-fade-in rounded-xl" />
                              <button 
                                onMouseEnter={() => setActiveUVHotspot(2)}
                                onClick={() => setActiveUVHotspot(2)}
                                className={`absolute top-[42.5%] right-[29%] w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-violet-600 shadow-md border-2 border-white select-none cursor-pointer hover:scale-125 transition-all z-10 ${
                                  activeUVHotspot === 2 ? 'ring-4 ring-violet-500/50 scale-125' : ''
                                }`}
                              />
                              <button 
                                onMouseEnter={() => setActiveUVHotspot(1)}
                                onClick={() => setActiveUVHotspot(1)}
                                className={`absolute bottom-[31.2%] left-[17.5%] w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-violet-600 shadow-md border-2 border-white select-none cursor-pointer hover:scale-125 transition-all z-10 ${
                                  activeUVHotspot === 1 ? 'ring-4 ring-violet-500/50 scale-125' : ''
                                }`}
                              />
                            </div>
                          </div>

                          <div className="relative flex flex-col items-center">
                            <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-2 select-none">DORSO</span>
                            <div className="relative w-full max-w-[180px] aspect-[1/2] rounded-2xl overflow-hidden flex items-center justify-center bg-white p-2 border border-zinc-850 shadow-inner animate-fade-in">
                              <img src="/uv-back.png" alt="UV Dorso" className="w-full h-full object-contain select-none rounded-xl" />
                              <button 
                                onMouseEnter={() => setActiveUVHotspot(3)}
                                onClick={() => setActiveUVHotspot(3)}
                                className={`absolute bottom-[32%] right-[19.5%] w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-violet-600 shadow-md border-2 border-white select-none cursor-pointer hover:scale-125 transition-all z-10 ${
                                  activeUVHotspot === 3 ? 'ring-4 ring-violet-500/50 scale-125' : ''
                                }`}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="min-h-[130px]">
                          {activeUVHotspot ? (
                            <div className="bg-zinc-950 text-white border-2 border-violet-500/80 rounded-3xl p-5 shadow-2xl relative animate-fade-in">
                              <button 
                                onClick={() => setActiveUVHotspot(null)}
                                className="absolute top-4 right-4 text-xs font-black text-zinc-400 hover:text-white select-none cursor-pointer"
                              >
                                ✕
                              </button>
                              <div className="inline-flex items-center gap-2 bg-violet-500/20 text-violet-400 px-3 py-1 rounded-full text-[10px] font-black uppercase mb-2 select-none">
                                {uvHotspots[activeUVHotspot].pos}
                              </div>
                              <h4 className="text-sm font-extrabold uppercase tracking-tight text-white mb-1.5">
                                {uvHotspots[activeUVHotspot].title}
                              </h4>
                              <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
                                {uvHotspots[activeUVHotspot].text}
                              </p>
                            </div>
                          ) : (
                            <div className="bg-white border border-dashed border-zinc-300 rounded-3xl p-4 text-center text-zinc-400">
                              <p className="text-xs font-semibold select-none">
                                Toca o pasa el ratón por los <span className="text-violet-600 font-bold">puntos violetas</span> para ver la especificación técnica.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {uvConstruction === 'hex-flex' && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="grid grid-cols-2 gap-4 bg-zinc-950 p-6 rounded-3xl shadow-xl border border-zinc-800">
                          <div className="flex flex-col items-center">
                            <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400 mb-2 select-none">FRENTE</span>
                            <div className="w-full max-w-[180px] aspect-[1/2] rounded-2xl overflow-hidden flex items-center justify-center bg-white p-2 border border-zinc-800 shadow-inner">
                              <img src="/uv-hex-front.webp" alt="UV Hex Flex Frente" className="w-full h-full object-contain select-none rounded-xl" />
                            </div>
                          </div>

                          <div className="flex flex-col items-center">
                            <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400 mb-2 select-none">DORSO</span>
                            <div className="w-full max-w-[180px] aspect-[1/2] rounded-2xl overflow-hidden flex items-center justify-center bg-white p-2 border border-zinc-800 shadow-inner">
                              <img src="/uv-hex-back.webp" alt="UV Hex Flex Dorso" className="w-full h-full object-contain select-none rounded-xl" />
                            </div>
                          </div>
                        </div>

                        <div className="bg-white border border-zinc-200 rounded-2xl p-5 space-y-3">
                          <h5 className="text-base md:text-lg font-black uppercase tracking-wider text-zinc-950">
                            Construcción UV Hex Flex
                          </h5>
                          <p className="text-sm md:text-base text-zinc-800 leading-relaxed font-normal">
                            La construcción <strong className="font-bold text-zinc-950">Hex Flex</strong> con vara de carbono y pala con mezcla de fibra y carbono, aporta cierta flexibilidad al remo, lo que ayuda a suavizar la sensación de cada remada y potencialmente reducir la carga sobre las articulaciones.
                          </p>
                          <p className="text-sm md:text-base text-zinc-800 leading-relaxed pt-2 border-t border-zinc-100 font-normal">
                            Además, permite ofrecer el <strong className="font-bold text-zinc-950">UV</strong> a un precio más accesible, haciendo que este diseño de remo premium esté al alcance de una mayor cantidad de remadores.
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="text-center pt-2">
                      <a 
                        href="https://wa.me/5492235865057"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-zinc-950 hover:bg-zinc-900 active:scale-95 text-white font-black text-xs px-8 py-3.5 rounded-full shadow-lg transition-all uppercase tracking-wider select-none cursor-pointer"
                      >
                        Consultar Remo UV {uvConstruction === 'hex-flex' ? 'Hex Flex' : 'All Carbon'} ({selectedSizeUV} sq in) por WhatsApp
                      </a>
                    </div>
                  </div>
                )}

                {/* ===== MODELO: FLYWEIGHT ALL CARBON ===== */}
                {(paddleFilter === 'todos' || paddleFilter === 'flyweight') && (
                  <div className="space-y-6 bg-zinc-50 border border-zinc-200 p-6 rounded-3xl shadow-sm">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-emerald-600">Ligereza & Accesibilidad</span>
                        <h4 className="text-2xl font-black text-zinc-950 uppercase italic tracking-tight">FLYWEIGHT - ALL CARBON</h4>
                        <p className="text-sm text-zinc-500 font-medium mt-0.5">Resistente, liviano, ágil y económico</p>
                      </div>

                      <div className="flex items-center gap-1.5 bg-zinc-200 p-1 rounded-full border border-zinc-300 select-none">
                        <button 
                          onClick={() => setSelectedSizeFlyweight('83')}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-black transition-all select-none cursor-pointer ${
                            selectedSizeFlyweight === '83' ? 'bg-zinc-950 text-white shadow' : 'text-zinc-600 hover:text-zinc-950'
                          }`}
                        >
                          83
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 bg-zinc-950 p-6 rounded-3xl shadow-xl border border-zinc-800">
                      <div className="flex flex-col items-center">
                        <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400 mb-2 select-none">FRENTE</span>
                        <div className="w-full max-w-[180px] aspect-[1/2] rounded-2xl overflow-hidden flex items-center justify-center bg-white p-2 border border-zinc-800 shadow-inner">
                          <img src="/flyweight-front.webp" alt="Flyweight All Carbon Frente" className="w-full h-full object-contain select-none rounded-xl" />
                        </div>
                      </div>

                      <div className="flex flex-col items-center">
                        <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400 mb-2 select-none">DORSO</span>
                        <div className="w-full max-w-[180px] aspect-[1/2] rounded-2xl overflow-hidden flex items-center justify-center bg-white p-2 border border-zinc-800 shadow-inner">
                          <img src="/flyweight-back.webp" alt="Flyweight All Carbon Dorso" className="w-full h-full object-contain select-none rounded-xl" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-zinc-200 rounded-2xl p-5 space-y-3">
                      <h5 className="text-base md:text-lg font-black uppercase tracking-wider text-zinc-950">
                        Rendimiento Profesional para Todos
                      </h5>
                      <p className="text-sm md:text-base text-zinc-800 leading-relaxed font-normal">
                        Elegido por quienes practican el deporte de manera recreativa o están empezando a competir y desean adquirir un remo de excelente calidad, resistente, liviano y económico. Aunque no seas un profesional, este remo te hará sentir como uno.
                      </p>
                      <p className="text-sm md:text-base text-zinc-800 leading-relaxed pt-2 border-t border-zinc-100 font-normal">
                        La pala íntegramente de carbono permite aprovechar al máximo las cuatro fases de la remada, mientras que la vara de carbono mantiene el remo liviano y resistente. Ofrece una remada suave y una respuesta ágil. Es una excelente opción para palistas de menor peso que buscan un remo cómodo, liviano, resistente y fácil de usar.
                      </p>
                    </div>

                    <div className="text-center pt-2">
                      <a 
                        href="https://wa.me/5492235865057"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-zinc-950 hover:bg-zinc-900 active:scale-95 text-white font-black text-xs px-8 py-3.5 rounded-full shadow-lg transition-all uppercase tracking-wider select-none cursor-pointer"
                      >
                        Consultar Flyweight All Carbon ({selectedSizeFlyweight} sq in) por WhatsApp
                      </a>
                    </div>
                  </div>
                )}

                {/* ===== MODELO: STINGRAY 72 ===== */}
                {(paddleFilter === 'todos' || paddleFilter === 'stingray') && (
                  <div className="space-y-6 bg-zinc-50 border border-zinc-200 p-6 rounded-3xl shadow-sm">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-cyan-600">Diseño Revolucionario & Foil</span>
                        <h4 className="text-2xl font-black text-zinc-950 uppercase italic tracking-tight">STINGRAY 72</h4>
                        <p className="text-sm text-zinc-500 font-medium mt-0.5">Efecto ala con inclinación de 12° para remadas ultra ágiles</p>
                      </div>

                      <div className="flex items-center gap-1.5 bg-zinc-200 p-1 rounded-full border border-zinc-300 select-none">
                        <button 
                          onClick={() => setSelectedSizeStingray('72')}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-black transition-all select-none cursor-pointer ${
                            selectedSizeStingray === '72' ? 'bg-zinc-950 text-white shadow' : 'text-zinc-600 hover:text-zinc-950'
                          }`}
                        >
                          72
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 bg-zinc-950 p-6 rounded-3xl shadow-xl border border-zinc-800">
                      <div className="flex flex-col items-center">
                        <span className="text-[9px] font-black uppercase tracking-widest text-cyan-400 mb-2 select-none">FRENTE</span>
                        <div className="w-full max-w-[180px] aspect-[1/2] rounded-2xl overflow-hidden flex items-center justify-center bg-white p-2 border border-zinc-800 shadow-inner">
                          <img src="/stingray-front.jpg" alt="Stingray 72 Frente" className="w-full h-full object-contain select-none rounded-xl" />
                        </div>
                      </div>

                      <div className="flex flex-col items-center">
                        <span className="text-[9px] font-black uppercase tracking-widest text-cyan-400 mb-2 select-none">DORSO</span>
                        <div className="w-full max-w-[180px] aspect-[1/2] rounded-2xl overflow-hidden flex items-center justify-center bg-white p-2 border border-zinc-800 shadow-inner">
                          <img src="/stingray-back.webp" alt="Stingray 72 Dorso" className="w-full h-full object-contain select-none rounded-xl" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-zinc-200 rounded-2xl p-5 space-y-3">
                      <h5 className="text-base md:text-lg font-black uppercase tracking-wider text-zinc-950">
                        Innovación para Foil & SUP
                      </h5>
                      <p className="text-sm md:text-base text-zinc-800 leading-relaxed font-normal">
                        Ideal para riders de foil o SUP que buscan una pala rápida y eficiente que permita realizar remadas ágiles y transiciones rápidas.
                      </p>
                      <p className="text-sm md:text-base text-zinc-800 leading-relaxed pt-2 border-t border-zinc-100 font-normal">
                        Presenta una forma de pala revolucionaria, diseñada para reducir drásticamente el tiempo que tarda en entrar y salir del agua. Es delgada, con perfil hidrodinámico y una inclinación de 12° respecto del eje del remo, generando un efecto “ala” al entrar al agua, lo que ayuda a avanzar mientras se inicia la remada y prolonga la fase de aplicación de fuerza.
                      </p>
                    </div>

                    <div className="text-center pt-2">
                      <a 
                        href="https://wa.me/5492235865057"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-zinc-950 hover:bg-zinc-900 active:scale-95 text-white font-black text-xs px-8 py-3.5 rounded-full shadow-lg transition-all uppercase tracking-wider select-none cursor-pointer"
                      >
                        Consultar Stingray 72 ({selectedSizeStingray} sq in) por WhatsApp
                      </a>
                    </div>
                  </div>
                )}

              </div>
            )}

            {/* MOSTRAR SECCIÓN DE ACCESORIOS */}
            {(productCategory === 'todos' || productCategory === 'accesorios') && (
              <div className="space-y-6 pt-6 border-t border-zinc-200">
                <div className="border-b border-zinc-200 pb-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Categoría</span>
                  <h3 className="text-xl font-black text-zinc-950 uppercase italic">Accesorios & Indumentaria</h3>
                </div>

                <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-6 text-center space-y-4 shadow-sm">
                  <span className="text-3xl block select-none">🎒</span>
                  <h4 className="text-base font-black text-zinc-955 uppercase tracking-wider">Accesorios QuickBlade Oficiales</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed max-w-sm mx-auto">
                    Próximamente publicaremos el catálogo completo de gorras, fundas y accesorios disponibles para envío inmediato a todo el país.
                  </p>
                  <div>
                    <a 
                      href="https://wa.me/5492235865057"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white border-2 border-zinc-950 hover:bg-zinc-50 active:scale-95 text-zinc-950 font-black text-xs px-6 py-2.5 rounded-full transition-all uppercase tracking-wider select-none cursor-pointer"
                    >
                      Consultar Accesorios por WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            )}

            <div className="text-center pt-6">
              <button 
                onClick={goToHome}
                className="text-xs font-black uppercase text-zinc-400 hover:text-zinc-950 transition-colors select-none cursor-pointer"
              >
                ← Volver al inicio
              </button>
            </div>
          </div>
        )}

        {/* --- INTERFAZ 3: CONTACTANOS --- */}
        {activeTab === 'contacto' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
              <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-wider inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-zinc-950 rounded">
                CONTÁCTANOS
              </h2>
            </div>

            <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-6 md:p-8 text-center space-y-6 shadow-sm">
              <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
                En <strong className="text-zinc-950">Mar del Plata</strong> y todo el país, estamos a tu disposición para asesorarte en la elección de tu remo o equipamiento.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                <a 
                  href="https://wa.me/5492235865057" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-black text-xs px-8 py-3.5 rounded-full shadow-lg transition-all uppercase tracking-wider select-none cursor-pointer"
                >
                  WhatsApp: 223 586-5057
                </a>

                <a 
                  href="https://instagram.com/qbpaddles_ar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-950 hover:bg-zinc-900 active:scale-95 text-white font-black text-xs px-8 py-3.5 rounded-full shadow-lg transition-all uppercase tracking-wider select-none cursor-pointer"
                >
                  Instagram: @qbpaddles_ar
                </a>
              </div>
            </div>

            <div className="text-center pt-4">
              <button 
                onClick={goToHome}
                className="text-xs font-black uppercase text-zinc-400 hover:text-zinc-950 transition-colors select-none cursor-pointer"
              >
                ← Volver al inicio
              </button>
            </div>
          </div>
        )}

        {/* --- INTERFAZ 4: ACERCA DE --- */}
        {activeTab === 'acerca-de' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
              <h2 className="text-2xl font-black text-zinc-955 uppercase tracking-wider inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-zinc-950 rounded">
                ACERCA DE
              </h2>
            </div>

            {/* TARJETA PRINCIPAL CON LA FOTO DE JIM EN EL TALLER */}
            <div className="bg-zinc-950 text-white rounded-3xl overflow-hidden shadow-2xl border border-zinc-800">
              <div className="relative h-64 md:h-80 w-full overflow-hidden bg-zinc-900">
                <img 
                  src="/jim-workshop.png" 
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.squarespace-cdn.com/content/v1/5681c609c21b86e0da80cf05/1542152661271-B8I3W21X90JHQ5N0C2Q3 font-bold-Workshop.jpg";
                  }}
                  alt="Jim Terrell trabajando en su taller artesanal de remos QuickBlade" 
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] font-black uppercase text-amber-400 tracking-widest block">
                      Innovación & Artesanía
                    </span>
                    <h3 className="text-xl font-black uppercase italic tracking-tight text-white">
                      El Origen de QuickBlade
                    </h3>
                  </div>
                  <span className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[9px] font-black text-zinc-200">
                    Milford, Ohio
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-4">
                <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-light">
                  <strong className="text-white font-bold">Quickblade</strong> es una creación de <span className="text-white font-semibold">Jim Terrell</span>, cuatro veces atleta olímpico de canotaje. A lo largo de su carrera, ha recibido innumerables premios y títulos nacionales e internacionales. Su pasión por fabricar los mejores remos de competición comenzó a los 11 años, en el garaje de su padre, en Milford, Ohio.
                </p>

                <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-light">
                  Hasta el día de hoy, Jim mantiene una fascinación constante por la hidrodinámica. A lo largo de los años, Jim ha participado activamente en investigaciones sobre la mecánica de las palas, utilizando técnicas como la fotografía subacuática de alta velocidad y el análisis de fuerzas mediante galgas extensométricas. También cuenta con una amplia experiencia en distintas aplicaciones de materiales compuestos, incluyendo las industrias aeroespacial y del automovilismo deportivo.
                </p>

                <div className="p-4 bg-zinc-900/90 border-l-4 border-amber-500 rounded-r-2xl my-2">
                  <p className="text-sm md:text-base text-amber-200 font-medium italic leading-relaxed">
                    "En términos sencillos, cuanto más trabajo y conocimiento pone Jim en cada diseño, más rendimiento obtenés vos al remar."
                  </p>
                </div>

                <p className="text-sm md:text-base text-zinc-300 leading-relaxed pt-2">
                  Jim aplica toda esa experiencia y conocimiento al desarrollo de diseños y formas innovadoras, utilizando los materiales y las tecnologías aeroespaciales más avanzados disponibles en el mercado.
                </p>
              </div>

            </div>

            <div className="text-center pt-4">
              <button 
                onClick={goToHome}
                className="text-xs font-black uppercase text-zinc-400 hover:text-zinc-950 transition-colors select-none cursor-pointer"
              >
                ← Volver al inicio
              </button>
            </div>
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="text-center mt-16 text-[9px] text-zinc-400 font-bold uppercase tracking-widest select-none">
        © 2026 QB Paddles Argentina • Mar del Plata
      </footer>

    </div>
  );
}