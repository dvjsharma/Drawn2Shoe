import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Cartcard from "../../components/Cart-Card";
import useRazorpay from "react-razorpay";

const Cart = () => {
    const [cartitems, setCartitems] = useState([]);
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
        const fetchCart = async () => {
            const { data } = await axios.get("http://localhost:3000/api/cart", {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });

            console.log(data);
            setCartitems(data.data || []);
        };
        fetchCart();
    }, []);

    useEffect(() => {
        let ntotal = 0;
        for (let index = 0; index < cartitems.length; index++) {
            ntotal += parseInt(cartitems[index].product.price) * cartitems[index].quantity;
        }
        setSubtotal(ntotal);
    }, [cartitems]);
    
    
    const getEmailByProductId = (productId) => {
        const item = cartitems.find(item => item.productId === productId);
        return item ? item.email : null;
    };

    const handleIncrease = async (productId) => {
        const email = getEmailByProductId(productId);
        
        const updatedItems = cartitems.map(item =>
            
            item.productId === productId
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
        await axios.patch(`http://localhost:3000/api/cart/${productId}/increase`,{email}, { withCredentials: true });
        setCartitems(updatedItems);
    };

    const handleDecrease = async (productId) => {
        const email = getEmailByProductId(productId);
        const updatedItems = cartitems.map(item =>
            item.productId === productId && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        await axios.patch(`http://localhost:3000/api/cart/${productId}/decrease`, {email},{ withCredentials: true });
        setCartitems(updatedItems);
    };

    const handleRemove = async (productId) => {
        const email = cartitems.find(item => item.productId === productId)?.email; 
        const updatedItems = cartitems.filter(item => item.productId !== productId);
    
        await axios.delete(`http://localhost:3000/api/cart/${productId}`, { 
                headers: { "Content-Type": "application/json" },
                data: { email } 
         });
         setCartitems(updatedItems);
    };
    

    if (!cartitems || cartitems.length === 0) {
        return (
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                
                <div className="text-center py-8 items-center flex flex-col justify-center w-full">
                    
                    <div className="mb-6">
                        <img 
                            src="../src/assets/empty_cart.svg"
                            alt="Empty Cart"
                            className="mx-auto w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/15"
                        />
                    </div>
                    <div className="w-1/2 mx-auto px-12">
                        <h2 className="text-2xl font-bold text-gray-500 dark:text-gray-400">Your cart is empty</h2>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Start adding items to your cart from the shop.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 pt-20">
            <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                <div className="rounded-lg md:w-2/3">
                    {cartitems.map((item) => (
                        <Cartcard
                            key={item.productId}
                            productId={item.productId}
                            productImage={item.product.shoeImage}
                            shoename={item.product.shoename}
                            shoeSize={item.shoeSize}
                            quantity={item.quantity}
                            price={item.product.price}
                            onIncrease={handleIncrease}
                            onDecrease={handleDecrease}
                            onRemove={handleRemove}
                        />
                    ))}
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
                        <div>
                            <p className="mb-1 text-lg font-bold">₹ {subtotal + 110} INR</p>
                            <p className="text-sm text-gray-700">including VAT</p>
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
    );
};

export default Cart
