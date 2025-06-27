import React from "react";
import { BookOpen } from "lucide-react";
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="h-6 w-6" />
            <span className="text-lg font-semibold">
              Creativity in Early Childhood Education
            </span>
          </div>
          <p className="text-gray-400">
            Fostering creative learning experiences for children aged 0-8 years
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
