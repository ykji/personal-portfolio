import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white md:h-screen pt-20 md:pt-0"
    >
      <div className="max-w-screen-lg flex flex-col justify-center mx-auto h-full p-4">
        <div className="py-4">
          <h2 className="text-4xl border-b-4 border-gray-500 inline">About</h2>
        </div>
        <p className="text-xl mt-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis, cumque. Incidunt, adipisci. Molestiae soluta illo
          eveniet cumque in minima nesciunt qui expedita modi veritatis quasi
          porro vero unde maiores officiis, officia eligendi ipsam, adipisci
          deleniti quibusdam voluptas! Aliquid vitae officiis repudiandae non,
          optio ex eum, enim incidunt totam sit atque.
        </p>
        <p className="text-xl mt-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis, cumque. Incidunt, adipisci. Molestiae soluta illo
          eveniet cumque in minima nesciunt qui expedita modi veritatis quasi
          porro vero unde maiores officiis, officia eligendi ipsam, adipisci
          deleniti quibusdam voluptas! Aliquid vitae officiis repudiandae non,
          optio ex eum, enim incidunt totam sit atque.
        </p>
      </div>
    </div>
  );
};

export default About;
