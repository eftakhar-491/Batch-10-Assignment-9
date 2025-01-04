import React from "react";

export default function CategoryNotFound() {
  return (
    <>
      <section>
        <main className="grid min-h-full place-items-center bg-white px-6 py-5 sm:py-14 lg:px-8">
          <div className="text-center">
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Leasson Not found
            </h1>
            <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Sorry, we couldn’t find the Lessonyou’re looking for.
            </p>
          </div>
        </main>
      </section>
    </>
  );
}
