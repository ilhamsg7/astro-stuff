import Carousel from "./carousel";
import Hero from "./hero";
export default function Index() {
    return (
        <>
            <div
                className="hero min-h-screen"
                style={{ backgroundImage: `url("src/assets/images/Hero-Image.jpeg")` }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">Drive to Survive</h1>
                        <p className="mb-5 text-gray-200">
                            Formula One is Highest class of international racing for open-wheel single-seater
                            formula racing cars sanctioned by the Fédération Internationale de
                            l'Automobile (FIA)
                        </p>
                        <button className="btn bg-red-600 text-white hover:bg-red-800 border-none">And Lights Out</button>
                    </div>
                </div>
            </div>
            <Hero />
            <Carousel />
        </>
    );
}