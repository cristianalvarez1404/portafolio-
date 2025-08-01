const Home = () => {
  return (
    <div
      id="home"
      className="w-[60%] h-screen m-auto flex flex-col items-center justify-start lg:justify-center text-center mt-5"
    >
      <h1 className="text-2xl mb-3 font-bold lg:text-5xl lg:mb-5">
        Hola, soy{" "}
        <span className="text-emerald-500 ">Cristian Andrés Alvarez.</span>
      </h1>
      <p className="mb-5 text-gray-700">
        Después de varios años formándome de manera autodidacta en el mundo de
        la programación, he adquirido las habilidades necesarias para afrontar
        proyectos de manera profesional. Me apasiona el desarrollo de software y
        busco nuevas oportunidades donde pueda aplicar mis conocimientos y
        contribuir a la creación de soluciones efectivas. Estoy entusiasmado por
        colaborar en proyectos que me permitan seguir creciendo y aportar valor.
      </p>
      <a
        href="https://github.com/cristianalvarez1404?tab=repositories"
        target="blank"
        className="text-sm lg:text-2xl bg-emerald-200 rounded-2xl p-3 cursor-pointer text-gray-600 hover:bg-emerald-600 hover:text-white transition-colors duration-300"
      >
        Ver mis proyectos
      </a>
    </div>
  );
};

export default Home;
