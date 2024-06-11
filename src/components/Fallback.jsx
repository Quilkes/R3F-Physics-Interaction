import React from "react";

export default function Fallback() {
  return (
    <div className="fixed inset-0 z-50 flex items-center bg-black justify- bg-opacity-80">
      <div className="max-w-lg p-6 mx-auto text-center text-white">
        <div className="mb-4 text-2xl font-bold">
          🚧 Mobile and Tablet View Not Supported 🚧
        </div>
        <div className="mb-4 text-xl">
          Oops! It looks like you're on a mobile or tablet device.
        </div>
        <div className="text-lg">
          For the best experience, please visit this site on desktop. Thank you!
        </div>
        <div className="mt-6">
          <p className="text-md">
            📧 Feel free to contact me:{" "}
            <a href="mailto:matinadekola33@gmail.com" className="underline">
              matinadekola33@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
