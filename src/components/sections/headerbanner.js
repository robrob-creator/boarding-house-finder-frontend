import React from "react";
import image from "../../assets/header-bg.jpg";
export default function Headerbanner() {
  return (
    <section class="text-gray-700 body-font bg">
      <div class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            FIND A PLACE WHERE YOU CAN
            <br class="hidden lg:inline-block" />
            STAY IN MALAYBALAY CITY
          </h1>
          <p class="mb-8 leading-relaxed">
            Hey!, it's nice to work with you. Connect to Landlords/Landladies
            and find the place that suit your taste.
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              SIGN IN
            </button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
              SIGN UP
            </button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded-xl shadow-2xl "
            alt="hero"
            src={image}
          />
        </div>
      </div>
    </section>
  );
}
