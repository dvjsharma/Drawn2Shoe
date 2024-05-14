import React from "react";
import review1 from "../../assets/reviews/review_2.jpeg";
import review2 from "../../assets/reviews/review_1.jpg";
const Carousel2 = () => {
    return (
        <div className="flex w-full items-center justify-center">
            <div
                className="carousel min-h-[300px] w-[700px] rounded-2xl mx-6 my-10"
                style={{ boxShadow: "2px 4px 35px 4px rgba(0, 0, 0, 0.10)" }}
            >
                <div
                    id="slide1"
                    className="carousel-item relative w-full justify-center items-center"
                >
                    <div className="flex w-[80%] justify-start items-center flex-col py-5">
                        <div className="flex justify-start items-center w-full">
                            <div className="flex w-[20%] justify-start items-start">
                                <img
                                    className=" rounded-[100%]"
                                    src={review1}
                                    alt=""
                                />
                            </div>
                            <div className="flex w-[80%] pl-5 justify-start items-start flex-col">
                                <div className="flex gap-2 pb-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        fill="#FFB800"
                                        className="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        fill="#FFB800"
                                        className="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        fill="#FFB800"
                                        className="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        fill="#FFB800"
                                        className="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        fill="#D9D9D9"
                                        className="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                </div>
                                <div className="custom text-gray-500 text-[14px]">
                                    Divyansh Bisht
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[1.5px] bg-gray-400 my-3"></div>
                        <div className="text-[18px] text-gray-700 custom">
                            I was surprised. The quality was much higher than I
                            expected! The best feeling is having people coming
                            up to me in the street and asking where I got them.
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="carousel min-h-[300px] w-[700px] rounded-2xl mx-6 my-10 max-md:hidden"
                style={{ boxShadow: "2px 4px 35px 4px rgba(0, 0, 0, 0.10)" }}
            >
                <div
                    id="slide1"
                    className="carousel-item relative w-full justify-center items-center"
                >
                    <div className="flex w-[80%] justify-start items-center flex-col py-5">
                        <div className="flex justify-start items-center w-full">
                            <div className="flex w-[20%] justify-start items-start">
                                <img
                                    className=" rounded-[100%]"
                                    src={review2}
                                    alt=""
                                />
                            </div>
                            <div className="flex w-[80%] pl-5 justify-start items-start flex-col">
                                <div className="flex gap-2 pb-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        fill="#FFB800"
                                        className="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        fill="#FFB800"
                                        className="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        fill="#FFB800"
                                        className="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        fill="#FFB800"
                                        className="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        fill="#FFB800"
                                        className="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                </div>
                                <div className="custom text-gray-500 text-[14px]">
                                    Divij Sharma
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[1.5px] bg-gray-400 my-3"></div>
                        <div className="text-[18px] text-gray-700 custom">
                            I was pleasantly surprised by the exceptional design
                            quality! The best part is that I created the design
                            myself, and they never fail to draw admiration
                            wherever I go!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel2;
