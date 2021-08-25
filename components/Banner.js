import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[500px] sm:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute top-1/2 w-full text-center">
        <button className="text-purple-500 bg-white px-10 py-4 shadow-lg rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          Sajawal Hassan <br /> Class 5 <br /> s/o Dr. Athar Kharal
        </button>
      </div>
    </div>
  );
}

export default Banner;
