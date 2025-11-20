import PizzaImage from "../assets/PizzaImage.avif";
import Pasta from "../assets/pasta.avif";
import Pizza from "../assets/pizza.avif";
import Hats from "../assets/hats.avif";

function HomePage() {
  return (
    <>
      <div
        className="w-full bg-no-repeat bg-cover md:min-h-screen mt-15"
        style={{
          backgroundImage: `url(${PizzaImage})`,
        }}
      >
        <div className="md:w-1/2 md:p-40 p-5">
          <h1 className="text-2xl md:text-3xl font-semibold">
            The Pleasant Experience To Your Taste Buds
          </h1>
          <p className="mt-5 text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            iusto fugiat, excepturi saepe molestias autem sit voluptatibus?
            Itaque non mollitia cum, culpa inventore nisi et natus debitis porro
            saepe perspiciatis.
          </p>
          <button className="border rounded-full px-5 md:px-10 text-lg md:text-3xl font-bold bg-red-400 p-3 mt-5">
            Order Now
          </button>
        </div>
      </div>
      <div className="bg-amber-100 p-2 md:p-0">
        <h1 className="text-3xl font-bold text-center p-10">
          Top Picks For You
        </h1>
        <div className="flex md:flex-row flex-col items-center justify-evenly md:gap-0 gap-50 md:p-5 md:pt-3 md:pb-80 pb-60">
          <div className="h-50 w-60 md:h-100 md:w-100">
            <img src={Pasta} alt="" className="bg-cover rounded-md w-full" />
          </div>
          <div className="h-50 w-60 md:h-100 md:w-100">
            <img src={Pizza} alt="" className="bg-cover rounded-md w-full" />
          </div>
          <div className="h-50 w-60 md:h-100 md:w-100">
            <img src={Hats} alt="" className="bg-cover rounded-md w-full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
