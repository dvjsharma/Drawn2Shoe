import React from "react";
import CategoryCard from "../../components/Category-card";

const Categories = () => {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        fetch("http://localhost:3000/api/products/categories")
            .then((res) => res.json())
            .then((data) => setData(data.data));
    }, []);
    // const data = [
    //     {
    //         shoeImage:
    //             "https://images.unsplash.com/photo-1603145733190-59811e523c72?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //         shoename: "Air Force One",
    //         brand : "Nike",
    //         categoryId : 1,
    //     },
    //     {
    //         shoeImage:
    //             "https://images.unsplash.com/photo-1603145733190-59811e523c72?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //         shoename: "Air Force One",
    //         brand : "Nike",
    //         categoryId : 2,
    //     },
    //     {
    //         shoeImage:
    //             "https://images.unsplash.com/photo-1603145733190-59811e523c72?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //         shoename: "Crocs",
    //         brand : "Crocs",
    //         categoryId : 3,
    //     }
    // ];
    const todisplay = data.map((item) => <CategoryCard {...item} />);
    return (
        <div>
            <div className="text-center p-10">
                <h1 className="categories text-4xl mb-4 font-medium">Explore our amazing Categories!</h1>
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

export default Categories;
