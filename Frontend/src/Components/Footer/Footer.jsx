import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#eeeeee] text-center text-gray-600 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center">
        {/* Copyright Text */}
        <p className="text-sm text-center text-[16px] lg:text-center">
          © 2025 MyBrand. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
