import { FaAirbnb, FaApple, FaAws, FaBitcoin, FaCcAmex, FaDhl, FaEthereum, FaFedex, FaFlipboard, FaGoogle, FaMicrosoft, FaPlaystation, FaSalesforce } from "react-icons/fa";

export default function Partner() {
    return (
        <>
            <div className="bg-base-200 pt-10">
                <div className="mx-auto flex justify-center pt-8 mb-4 gap-2">
                    <img height="50" width="75" src="src/assets/f1-logo/F1 Logo Red.png" alt="F1 Logo Red" />
                    <h2 className="text-gray-300 font-bold">Our Partners</h2>
                </div>
                <footer className="footer items-center px-10 py-4 text-neutral-content">
                    <div className="grid-flow-row gap-4 md:place-self-center md:justify-self-center">
                        <div className="flex justify-center space-x-8 space-y-4 flex-wrap">
                            <FaAws className="text-gray-300" size={45} />
                            <FaDhl className="text-gray-300" size={45} />
                            <FaSalesforce className="text-gray-300" size={45} />
                            <FaGoogle className="text-gray-300" size={45} />
                            <FaApple className="text-gray-300" size={45} />
                            <FaFlipboard className="text-gray-300" size={45} />
                            <FaFedex className="text-gray-300" size={45} />
                            <FaCcAmex className="text-gray-300" size={45} />
                            <FaAirbnb className="text-gray-300" size={45} />
                            <FaBitcoin className="text-gray-300" size={45} />
                            <FaEthereum className="text-gray-300" size={45} />
                            <FaPlaystation className="text-gray-300" size={45} />
                            <FaMicrosoft className="text-gray-300" size={45} />
                        </div>
                        <div className="divider w-full mx-auto text-white"></div>
                    </div>
                </footer>
            </div>
        </>
    );
}