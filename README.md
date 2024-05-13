# Drawn2Shoe

## Introduction

Drawn2Shoe is an innovative online tool that empowers users to customize and purchase their own shoes. Built using a blend of cutting-edge technologies such as ReactJS for the frontend and Node.js for the backend, Draw2Shoe offers a seamless user experience where creativity knows no bounds. With intuitive interface design optimized for various devices, users can dive into a world of limitless customization possibilities.

## Features

- **Customization:** Design your shoes with an array of options including color, pattern, material, sole type, lace style, and more.
- **Preview:** Visualize your designs in real-time with our interactive 3D preview feature, allowing you to rotate and zoom to see every detail.
- **Size Selection:** Choose your shoe size from a range of available options to ensure the perfect fit.
- **Secure Payments:** Enjoy peace of mind with secure payment gateways for hassle-free transactions, supporting various payment methods including credit/debit cards and PayPal.
- **User Accounts:** Create an account to save your designs, track orders, and manage your profile, enabling a personalized experience.
- **Order History:** View and track your past orders conveniently from your user dashboard.
- **Responsive Design:** Access Draw2Shoe from any device, anywhere, and experience seamless responsiveness, ensuring a consistent and optimized user experience across desktops, tablets, and smartphones.

## Getting Started

### Prerequisites

Before you proceed, ensure that you have the following prerequisites installed on your machine:

- Node.js
- SQL

### Installation

1. **Clone the Repository**

```bash
  git clone https://github.com/dvjsharma/Drawn2Shoe.git
  cd Drawn2Shoe
```

2. **Install Client Dependencies**

```bash
cd client
npm install
```

3. **Install Server Dependencies**

```bash
cd ../server
npm install
```

4. **Configure Environment Variables**

Create a file named `config.env` in the root folder and copy the contents of `.env.example` into it.

5. **Start the Development Server**

For the frontend:

```bash
cd client
npm run dev
```

For the backend:

```bash
cd ../server
node app.js
```

Ensure that XAMPP or a similar database server is running in the background.

6. **Database Setup**

Download the database schema [here](https://drive.google.com/file/d/1qShqZpEGcdhVmZ7zzAar-tBwhPFomNWW/view?usp=sharing) and import it into your MySQL database. Make sure to name the database as `drawn2shoe`.

## Tech Stack

**Client:**
- ReactJS
- Redux
- daisyUI
- CSS

**Server:**
- Node.js
- Express

## Contributing

We welcome contributions from the community! To contribute to Draw2Shoe, please follow these steps:
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Message From the Project Authors

Thank you for visiting Drawn2Shoe! We're thrilled to provide you with a platform where you can unleash your creativity and design your dream shoes. Feel free to explore the code, contribute to the project, and share your feedback. Together, let's step into a world of personalized footwear!
