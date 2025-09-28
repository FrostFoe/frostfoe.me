"use client";
import React from "react";

export default function About() {
  return (
    <main className="overflow-hidden">
      <section className="relative">
        <div className="relative pt-24 lg:pt-28">
          <div className="mx-auto px-6 max-w-7xl md:px-12">
            <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">
              <h1 className="mt-8 text-wrap text-4xl md:text-5xl font-semibold text-title xl:text-5xl xl:[line-height:1.125]">
                About Us
              </h1>
              <p className="text-wrap mx-auto mt-8 max-w-2xl text-lg hidden sm:block text-body">
                We are a company that builds modern websites and applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
