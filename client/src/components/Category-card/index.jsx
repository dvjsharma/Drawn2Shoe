import { Link } from "react-router-dom";

const Productcard = ({ shoeImage, shoename, id, brand, categoryId }) => {
    return (
        <div
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            key={categoryId}
        >
            <Link to={`./../shop?type=${categoryId}`}>
                <img
                    src={shoeImage}
                    alt="Product"
                    className="h-80 w-72 object-cover rounded-t-xl"
                />
                <div className="flex flex-col items-center justify-center mt-3">
                    <span className="text-gray-400 mr-3 uppercase text-xs">
                        {brand}
                    </span>
                    <p className="text-lg font-bold text-black truncate block capitalize">
                        {shoename}
                    </p>
                </div>
                <div className="px-2 py-1 w-72 flex">
                    <div className="flex items-center"></div>
                </div>
            </Link>
        </div>
    );
};

export default Productcard;
