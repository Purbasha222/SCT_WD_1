import ChickenPasta from "../assets/ChickenPasta.avif";
import MeatBalls from "../assets/MeatBalls.avif";
import TomatoSalad from "../assets/TomatoSalad.avif";
import TomatoSandwich from "../assets/TomatoSandwich.avif";
import HamPizza from "../assets/HamPizza.avif";
import Margareita from "../assets/Margareita.avif";
import Spaghetti from "../assets/Spaghetti.avif";
import Alfredo from "../assets/Alfredo.avif";
import Wine from "../assets/Wine.avif";

function AboutPage() {
  return (
    <div className="mt-15 bg-amber-100">
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-5">Flavours</h1>
        <p className="font-semibold font-sans text-sm md:text-2xl mt-10">
          At Flavours, we celebrate the heart of Italy through dishes crafted
          with tradition, passion, and the freshest ingredients. From rich,
          creamy pastas to hand-tossed pizzas and classic Italian entrées, every
          plate is inspired by the flavors of authentic home-style cooking. Our
          chefs take pride in blending old-world recipes with a modern touch,
          creating meals that are both comforting and unforgettable. Whether
          you're joining us for a cozy dinner, a family gathering, or a casual
          meal with friends, our warm, rustic atmosphere and welcoming
          hospitality promise an experience straight from the heart of Italy.
          Buon appetito!
        </p>
      </div>

      <h1 className="text-4xl text-center font-bold pt-5 md:pt-15">Our Menu</h1>

      <div className="flex flex-wrap items-center justify-evenly gap-5 p-5 mt-10">
        <div className="h-100 w-100 mb-15">
          <img
            src={ChickenPasta}
            alt="ChickenPasta"
            className="w-full h-full object-cover rounded-2xl"
          />
          <p className="text-2xl font-semibold text-center mt-3">
            Chicken Pasta
          </p>
        </div>

        <div className="h-100 w-100 mb-15">
          <img
            src={MeatBalls}
            alt="MeatBalls"
            className="w-full h-full object-cover rounded-2xl"
          />
          <p className="text-2xl font-semibold text-center mt-3">Meat Balls</p>
        </div>

        <div className="h-100 w-100 mb-15">
          <img
            src={TomatoSalad}
            alt="TomatoSalad"
            className="w-full h-full object-cover rounded-2xl"
          />
          <p className="text-2xl font-semibold text-center mt-3">
            Tomato Salad
          </p>
        </div>

        <div className="h-100 w-100 mb-15">
          <img
            src={TomatoSandwich}
            alt="TomatoSandwich"
            className="w-full h-full object-cover rounded-2xl"
          />
          <p className="text-2xl font-semibold text-center mt-3">
            Tomato Sandwich
          </p>
        </div>

        <div className="h-100 w-100 mb-15">
          <img
            src={HamPizza}
            alt="HamPizza"
            className="w-full h-full object-cover rounded-2xl"
          />
          <p className="text-2xl font-semibold text-center mt-3">Ham Pizza</p>
        </div>

        <div className="h-100 w-100 mb-15">
          <img
            src={Margareita}
            alt="Margareita"
            className="w-full h-full object-cover rounded-2xl"
          />
          <p className="text-2xl font-semibold text-center mt-3">
            Margareita Pizza
          </p>
        </div>

        <div className="h-100 w-100 mb-15">
          <img
            src={Spaghetti}
            alt="Margareita"
            className="w-full h-full object-cover rounded-2xl"
          />
          <p className="text-2xl font-semibold text-center mt-3">Spaghetti</p>
        </div>

        <div className="h-100 w-100 mb-15">
          <img
            src={Alfredo}
            alt="Margareita"
            className="w-full h-full object-cover rounded-2xl"
          />
          <p className="text-2xl font-semibold text-center mt-3">
            Chicken Alfredo
          </p>
        </div>

        <div className="h-100 w-100 mb-15">
          <img
            src={Wine}
            alt="Margareita"
            className="w-full h-full object-cover rounded-2xl"
          />
          <p className="text-2xl font-semibold text-center mt-3">Wine</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
