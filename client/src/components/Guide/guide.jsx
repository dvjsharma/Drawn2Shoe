import React from "react";
import { Link } from "react-router-dom";
import step3 from "../../assets/step_1.png";
import step2 from "../../assets/step_2.png";
import step1 from "../../assets/step_3.png";

const Guide = () => {
    return (
        <div className=" flex justify-center my-11 flex-col items-center">
            <div className="w-[80%] flex flex-col gap-6">
                <div className="text-[50px] text-center custom max-md:text-[30px]">
                    Create Custom Shoes in 3 Easy Steps!
                </div>
                <div className="flex gap-4 max-md:flex-col">
                    <div className="rounded-2xl shadow-[2px_4px_35px_4px_rgba(0,0,0,0.10)] px-10 py-5">
                        <img src={step1} alt="" />
                        <br />
                        <p className="font-bold text-[24px] custom">
                            Choose A Shoe Style:
                        </p>
                        <br />
                        <ul className="list-disc text-[15px] text-[#6e6d78]">
                            <li>Choose from over 50 custom shoe styles.</li>
                            <li>Each shoe style comes each gender.</li>
                            <li>The customizable area varies per shoe.</li>
                            <li>Many styles have black or white soles.</li>
                        </ul>
                    </div>
                    <div className="rounded-2xl shadow-[2px_4px_35px_4px_rgba(0,0,0,0.10)] px-10 py-5">
                        <img src={step2} alt="" />
                        <br />
                        <p className="font-bold text-[24px] custom">
                            Upload Image & Logos:
                        </p>
                        <br />
                        <ul className="list-disc text-[15px] text-[#6e6d78]">
                            <li>Choose The Base Shoe Color</li>
                            <li>Upload images, graphic, logos etc.</li>
                            <li>Upload a color square to different pieces</li>
                            <li>View mockup of custom shoes in real time</li>
                        </ul>
                    </div>
                    <div className="rounded-2xl shadow-[2px_4px_35px_4px_rgba(0,0,0,0.10)] px-10 py-5">
                        <img src={step3} alt="" />
                        <br />
                        <p className="font-bold text-[24px] custom">
                            View Mockup & Buy:
                        </p>
                        <br />
                        <ul className="list-disc text-[15px] text-[#6e6d78]">
                            <li>Order and start showing off your style</li>
                            <li>Share mockup pictures on social media</li>
                            <li>Start your own shoe brand</li>
                            <li>Create a branded corporate shoe</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-[40px] shadow-[2px_4px_35px_4px_rgba(0,0,0,0.10)] rounded-full">
                <Link to="/customize">
                    <button className="inline-block bg-black text-white rounded-full border-2 border-black px-5 py-3 text-[25px] font-medium leading-normal transition duration-150 ease-in-out hover:bg-white hover:text-black focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 max-lg:text-[14px] hover:border-black">
                        Customize Now!
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Guide;
