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
            amount: `${subtotal + 110}00`,
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
    }, [isLoaded, handlePayment]);

    let toDisplay = [];
    useEffect(() => {
        const fetchcart = async () => {
            const { data } = await axios.get("http://localhost:3000/api/cart", {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });
            setCartitems(data.data);
        };
        fetchcart();
    }, []);

    if (cartitems) {
        let ntotal = 0;
        for (let index = 0; index < cartitems.length; index++) {
            ntotal = ntotal + parseInt(cartitems[index].price);
        }
        if (subtotal != ntotal) {
            setSubtotal(ntotal);
        }
    }

    useEffect(() => {
        if (cartitems) {
            toDisplay = cartitems.map((item) => (
                <Cartcard
                    productId={item.productId}
                    productImage={item.productImage}
                    shoename={item.shoename}
                    shoeSize={item.shoeSize}
                    quantity={item.quantity}
                    price={item.price}
                />
            ));
        }
    }, [cartitems]);

    if (!cartitems) {
        return <div>Cart is empty</div>;
    }
    return (
        <>
            <div className=" bg-gray-100 pt-20">
                <h1 className="mb-10 text-center text-2xl font-bold">
                    Cart Items
                </h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3">
                        {cartitems
                            ? cartitems.map((item) => (
                                  <Cartcard
                                      productId={item.productId}
                                      productImage={item.productImage}
                                      shoename={item.shoename}
                                      shoeSize={item.shoeSize}
                                      quantity={item.quantity}
                                      price={item.price}
                                  />
                              ))
                            : " "}
                    </div>
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
                        <button
                            className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
                            onClick={handlePayment}
                        >
                            Check out
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
