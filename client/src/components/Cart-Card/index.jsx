const Cartcard = (props) => {
    return (
        <>
            <div
                className="justify-between mb-6 rounded-lg bg-white dark:bg-slate-700 dark:shadow-gray-800 p-6 shadow-md sm:flex sm:justify-start"
                
            >
                <img
                    src={props.productImage}
                    alt="product-image"
                    className="w-full rounded-lg sm:w-40"
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                            {props.shoename}
                        </h2>
                        <p className="mt-1 text-xs text-gray-700 dark:text-gray-400">
                            {props.shoeSize}
                        </p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center border-gray-100 dark:border-gray-500">
                            <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                                {" "}
                                -{" "}
                            </span>
                            <input
                                className="h-8 w-8 border bg-white dark:text-blue-500 text-center text-xs outline-none"
                                type="number"
                                defaultValue={props.quantity}
                                min="1"
                            />
                            <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                                {" "}
                                +{" "}
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <p className="text-sm dark:text-white">{props.price}</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cartcard;
