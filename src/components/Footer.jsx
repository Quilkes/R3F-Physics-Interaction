import React from "react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 flex w-full h-20">
      <div className="flex flex-col justify-start w-1/4 h-full pt-1 text-xl font-bold pl-28">
        <p>MORE</p>
        <p>CONTENT</p>
      </div>
      <div className="grid w-2/4 h-full grid-cols-3 pt-2">
        <div>
          <p className="font-bold">Github</p>
          <a
            className="text-xs hover:underline"
            href="https://github.com/Quilkes?tab=repositories"
            target="_blank"
          >
            https://github.com/quilkes
          </a>
        </div>
        <div>
          <p className="font-bold">Twitter</p>
          <a
            className="text-xs hover:underline"
            href="https://x.com/Abdulmatin67990"
            target="_blank"
          >
            https://x.com/quilkes
          </a>
        </div>
        <div>
          <p className="font-bold">LinkedIn</p>
          <a
            className="text-xs hover:underline"
            href="https://www.linkedin.com/in/abdulmatin-adekola-63a58a254/"
            target="_blank"
          >
            https://www.linkedin.com/in/quilkes
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center w-1/5 h-full">
        <p className="h-full px-10 pt-2 text-white bg-red-600">Follow me</p>
      </div>
    </footer>
  );
}
