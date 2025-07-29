const Home = () => {
  return (
    <div className="w-[60%] h-screen m-auto flex flex-col items-center justify-center text-center">
      <h1 className="font-bold text-5xl mb-5">
        Hi,I'm <span className="text-emerald-500 ">Cristian Alvarez</span>
      </h1>
      <p className="mb-5 text-gray-700">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
        accusantium, molestias necessitatibus nostrum officia cum aut enim
        deserunt.
      </p>
      <button className="bg-emerald-200 rounded-2xl p-3 cursor-pointer text-gray-600 hover:bg-emerald-600 hover:text-white transition-colors duration-300">
        View My work
      </button>
    </div>
  );
};

export default Home;
