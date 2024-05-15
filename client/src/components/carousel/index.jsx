import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/carosel/af1.png";
import img2 from "../../assets/carosel/converse1.png";
import img3 from "../../assets/carosel/crocs4.png";
import img4 from "../../assets/carosel/crocs2.png";
import img5 from "../../assets/carosel/crocs1.png";

const Carousel = () => {
    const carousel = useRef();
    const [scrolll, setScrolll] = useState(0);
    useEffect(() => {}, [scrolll]);
    return (
        <div
            ref={carousel}
            className="relative overflow-x-hidden flex w-[100vw] h-[300px]  items-center scroll-auto transition-transform: flex-row my-8"
        >
            <div className="flex animate-marquee">
                <Link to="/categories" className="mx-3 h-[250px] w-[250px]">
                    <img
                        className=" rounded-3xl mx-3 h-[250px] w-[200px] bg-[#fafafa] shadow-[2px_4px_35px_4px_rgba(0,0,0,0.10)]"
                        src={img1}
                        alt=""
                    />
                </Link>
                <Link to="/categories" className="mx-3 h-[250px] w-[250px]">
                    <img
                        className=" rounded-3xl mx-3 h-[250px] w-[200px] bg-[#fafafa] shadow-[2px_4px_35px_4px_rgba(0,0,0,0.10)]"
                        src={img2}
                        alt=""
                    />
                </Link>
                <Link to="/categories" className="mx-3 h-[250px] w-[250px]">
                    <img
                        className=" rounded-3xl mx-3 h-[250px] w-[200px] bg-[#fafafa] shadow-[2px_4px_35px_4px_rgba(0,0,0,0.10)]"
                        src={img3}
                        alt=""
                    />
                </Link>
                <Link to="/categories" className="mx-3 h-[250px] w-[250px]">
                    <img
                        className=" rounded-3xl mx-3 h-[250px] w-[200px] bg-[#fafafa] shadow-[2px_4px_35px_4px_rgba(0,0,0,0.10)]"
                        src={img4}
                        alt=""
                    />
                </Link>
                <Link to="/categories" className="mx-3 h-[250px] w-[250px]">
                    <img
                        className=" rounded-3xl mx-3 h-[250px] w-[200px] bg-[#fafafa] shadow-[2px_4px_35px_4px_rgba(0,0,0,0.10)]"
                        src={img5}
                        alt=""
                    />
                </Link>
            </div>
            <div className="absolute flex animate-marquee2">
                <Link to="/categories" className="mx-3 h-[250px] w-[250px]">
                    <img
                        className=" rounded-3xl mx-3 h-[250px] w-[200px] bg-[#fafafa] shadow-[2px_4px_35px_4px_rgba(0,0,0,0.10)]"
                        src={img1}
                        alt=""
                    />
                </Link>
                <Link to="/categories" className="mx-3 h-[250px] w-[250px]">
                    <img
                        className=" rounded-3xl mx-3 h-[250px] w-[200px] bg-[#fafafa] shadow-[2px_4px_35px_4px_rgba(0,0,0,0.10)]"
                        src={img2}
                        alt=""
                    />
                </Link>
                <Link to="/categories" className="mx-3 h-[250px] w-[250px]">
                    <img
                        className=" rounded-3xl mx-3 h-[250px] w-[200px] bg-[#fafafa] shadow-[2px_4px_35px_4px_rgba(0,0,0,0.10)]"
                        src={img3}
                        alt=""
                    />
                </Link>
                <Link to="/categories" className="mx-3 h-[250px] w-[250px]">
                    <img
                        className=" rounded-3xl mx-3 h-[250px] w-[200px] bg-[#fafafa] shadow-[2px_4px_35px_4px_rgba(0,0,0,0.10)]"
                        src={img4}
                        alt=""
                    />
                </Link>
                <Link to="/categories" className="mx-3 h-[250px] w-[250px]">
                    <img
                        className=" rounded-3xl mx-3 h-[250px] w-[200px] bg-[#fafafa] shadow-[2px_4px_35px_4px_rgba(0,0,0,0.10)]"
                        src={img5}
                        alt=""
                    />
                </Link>
            </div>
        </div>
    );
};

export default Carousel;
