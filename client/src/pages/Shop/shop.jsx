import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Productcard from "../../components/Product-card";
const Shop = () => {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        fetch("http://localhost:3000/api/products/shop")
            .then((res) => res.json())
            .then((data) => setData(data.data));
    }, []);
    // const data = [
    //     {
    //         shoeImage:
    //             "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    //         shoeName: "Air Force One",
    //         brand: "Nike",
    //         pId: 1,
    //         price: 2500,
    //         categoryId: 1,
    //     },
    //     {
    //         shoeImage:
    //             "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    //         shoeName: "Air Force One",
    //         brand: "Nike",
    //         pId: 2,
    //         price: 2500,
    //         categoryId: 2,
    //     },
    //     {
    //         shoeImage:
    //             "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    //         shoeName: "Crocs",
    //         brand: "Crocs",
    //         pId: 3,
    //         price: 2500,
    //         categoryId: 3,
    //     },
    // ];

    const [SearchParam, setSearchParam] = useSearchParams();
    const typeFilter = parseInt(SearchParam.get("type"));
    console.log(typeFilter, typeof typeFilter);
    const FilteredArray = typeFilter
        ? data.filter((item) => item.categoryId === typeFilter)
        : data;

    const todisplay = FilteredArray.map((item) => <Productcard {...item} />);

    function handleFilterChange(key, value) {
        setSearchParam((prevParams) => {
            if (value === null) {
                prevParams.delete(key);
            } else {
                prevParams.set(key, value);
            }
            return prevParams;
        });
    }
    const filterButton = (
        <button
            onClick={() => {
                handleFilterChange("type", null);
            }}
            className={`my-3 ml-3 underline underline-offset-8`}
        >
            Clear filter
        </button>
    );
    console.log(todisplay.length);
    return (
        <div>
            <div>
                <button
                    onClick={() => handleFilterChange("type", "1")}
                    className={`my-3 ml-3 underline underline-offset-8`}
                >
                    Crocs
                </button>
                <button
                    onClick={() => handleFilterChange("type", "2")}
                    className={`my-3 ml-3 underline underline-offset-8`}
                >
                    Air Force 1
                </button>
                <button
                    onClick={() => handleFilterChange("type", "3")}
                    className={`my-3 ml-3 underline underline-offset-8`}
                >
                    CDG Converse
                </button>
                {/* conditionally rendering clear button when filter is added */}
                {typeFilter ? filterButton : ""}
            </div>
            <div
                id="Projects"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
            >
                {todisplay}
            </div>
        </div>
    );
};

export default Shop;
