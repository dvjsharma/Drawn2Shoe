import React from "react";
import Productcard from "../../components/Product-card";
const Shop = () => {
    // const [data, setData] = React.useState([]);
    // React.useEffect(() => {
    //     fetch("http://localhost:3000/api/products/shop")
    //         .then((res) => res.json())
    //         .then((data) => setData(data));
    // }, []);
    const data = [
        {
            shoeImage:
                "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            shoeName: "Air Force One",
            brand: "Nike",
            pId: 1,
            price: 2500,
        },
        {
            shoeImage:
                "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            shoeName: "Air Force One",
            brand: "Nike",
            pId: 2,
            price: 2500,
        },
        {
            shoeImage:
                "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            shoeName: "Crocs",
            brand: "Crocs",
            pId: 3,
            price: 2500,
        },
    ];
    const todisplay = data.map((item) => <Productcard {...item} />);

    return (
        <div
            id="Projects"
            className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
            {todisplay}
        </div>
    );
};

export default Shop;
