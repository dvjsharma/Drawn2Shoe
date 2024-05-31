import React from "react";

const About = () => {
    return <div className="bg-red-100"><br></br>
          <div className=" rounded-lg p-4 mb-4">
                <h1 className="text-6xl font-bold italic text-center">About Us</h1>
            </div>
            <div className=" rounded-lg p-4 mb-4">
                <h3 className="text-2xl font-semibold text-center">Our Mission</h3><br></br>
                <p className="text-gray-800 text-center">Drawn2Shoe is a user-friendly e-commerce platform, developed using ReactJS and Node.js. It offers customers the ability to purchase and personalize their shoes. The platform's intuitive interface ensures seamless navigation and usability across a variety of devices.</p>
            </div>
            <div className="rounded-lg p-4 mb-4">
                <h3 className="text-lg font-semibold text-center">Who We Are:</h3>
                <p className="text-center">Welcome to Custom Shoe Design, where creativity meets comfort! We pride ourselves on offering a unique experience where you can unleash your imagination and design the perfect pair of shoes that reflect your personality and style. With a plethora of colors, patterns, and designs at your fingertips, the possibilities are endless.



    Our user-friendly interface is crafted with intuitive navigation, making it effortless for you to explore our wide range of customization options. From selecting your preferred colors to adding intricate patterns, designing your dream shoes has never been easier.

    Customer satisfaction is our top priority, and we value your feedback. Browse through our customer reviews to gain insights into the quality and craftsmanship of our products. Feel free to leave your own review to help fellow shoppers make informed decisions.

    Don't forget to utilize our wishlist feature to save your favorite designs for future purchases. Whether you're planning your next custom creation or simply browsing for inspiration, your wishlist keeps your preferred styles organized and easily accessible.</p><br></br>
                <p className="text-gray-800 text-center">Connect with Project Admin - Divij Sharma  </p>
                <div className="flex mt-2 justify-center">
                    <a className="mr-2 bg-gray-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded text-center" href="https://www.linkedin.com/in/dvjsharma/">LinkedIn</a>
                    <a className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded text-center" href="https://github.com/dvjsharma">GitHub</a>
                </div>
            </div>

    </div>;
};

export default About;
