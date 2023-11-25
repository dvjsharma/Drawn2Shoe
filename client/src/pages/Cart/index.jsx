import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Cartcard from "../../components/Cart-Card";
import useRazorpay from "react-razorpay";

const Cart = () => {
    const [cartitems, setCartitems] = useState();
    const [subtotal, setSubtotal] = useState(0);
    const [Razorpay, isLoaded] = useRazorpay();

    const handlePayment = useCallback(() => {
    
        const options = {
          key: "rzp_test_NuTUG6yrfovjY3",
          amount: `${subtotal+110}00`,
          currency: "INR",
          name: "Acme Corp",
          description: "Test Transaction",
          image: "https://example.com/your_logo",
          handler: (res) => {
            console.log(res);
          },
          prefill: {
            name: "Piyush Garg",
            email: "youremail@example.com",
            contact: "9999999999",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
    
        const rzpay = new Razorpay(options);
        rzpay.open();
      }, [subtotal]);
    
      useEffect(() => {
        if (isLoaded) {
          handlePayment();
        }
      }, [isLoaded, handlePayment])
    

    let toDisplay = [];
    useEffect(() => {
        const fetchcart = async () => {
            const { data } = await axios.get(
                "http://localhost:3000/api/cart",
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
                );
            setCartitems(data.data);
            // if (cartitems){
            //     toDisplay = cartitems.map((item) => {console.log(item); return <Cartcard {...item}/>;})
            // }
        }
        fetchcart();
    }, [])

    if (cartitems) {
        let ntotal = 0;
        for (let index = 0; index < cartitems.length; index++) {
            
            ntotal = ntotal + parseInt(cartitems[index].price);
        }
        if (subtotal != ntotal)
        {
            setSubtotal(ntotal);
        }
    }

    useEffect(() => {
        if (cartitems)
        {
            console.log(cartitems[0].price);
            toDisplay = cartitems.map((item) => <Cartcard productId={item.productId} productImage= {item.productImage} shoename={item.shoename} shoeSize={item.shoeSize} quantity={item.quantity} price={item.price}/>)
        }
        console.log(toDisplay);
    }, [cartitems])

    if(!cartitems){
        return <div>Cart is empty</div>
    }
    return(
        <>
<div className=" bg-gray-100 pt-20">
                <h1 className="mb-10 text-center text-2xl font-bold">
                    Cart Items
                </h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3">
                        {/* <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                            <img
                                src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                alt="product-image"
                                className="w-full rounded-lg sm:w-40"
                            />
                            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div className="mt-5 sm:mt-0">
                                    <h2 className="text-lg font-bold text-gray-900">
                                        Nike Air Max 2019
                                    </h2>
                                    <p className="mt-1 text-xs text-gray-700">
                                        36EU - 4US
                                    </p>
                                </div>
                                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                    <div className="flex items-center border-gray-100">
                                        <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                                            {" "}
                                            -{" "}
                                        </span>
                                        <input
                                            className="h-8 w-8 border bg-white text-center text-xs outline-none"
                                            type="number"
                                            value="2"
                                            min="1"
                                        />
                                        <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                                            {" "}
                                            +{" "}
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <p className="text-sm">259.000 ₭</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                            <img
                                src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
                                alt="product-image"
                                className="w-full rounded-lg sm:w-40"
                            />
                            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div className="mt-5 sm:mt-0">
                                    <h2 className="text-lg font-bold text-gray-900">
                                        Nike Air Max 2019
                                    </h2>
                                    <p className="mt-1 text-xs text-gray-700">
                                        36EU - 4US
                                    </p>
                                </div>
                                <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                    <div className="flex items-center border-gray-100">
                                        <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                                            {" "}
                                            -{" "}
                                        </span>
                                        <input
                                            className="h-8 w-8 border bg-white text-center text-xs outline-none"
                                            type="number"
                                            value="2"
                                            min="1"
                                        />
                                        <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                                            {" "}
                                            +{" "}
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <p className="text-sm">259.000 ₭</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                

                        {(cartitems) ? (cartitems.map((item) => <Cartcard productId={item.productId} productImage= {item.productImage} shoename={item.shoename} shoeSize={item.shoeSize} quantity={item.quantity} price={item.price}/>)) : " "}
                    
                    </div>
                    {/* <!-- Sub total --> */}
                    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                        <div className="mb-2 flex justify-between">
                            <p className="text-gray-700">Subtotal</p>
                            <p className="text-gray-700">₹ {subtotal}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-700">Shipping</p>
                            <p className="text-gray-700">₹ 110</p>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between">
                            <p className="text-lg font-bold">Total</p>
                            <div className="">
                                <p className="mb-1 text-lg font-bold">
                                    ₹ {subtotal + 110} INR
                                </p>
                                <p className="text-sm text-gray-700">
                                    including VAT
                                </p>
                            </div>
                        </div>
                        <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600" onClick={handlePayment}>
                            Check out
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;