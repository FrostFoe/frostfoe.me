import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <main className="overflow-hidden">
        <section className="relative">
            <div className="relative pt-24 lg:pt-28">
                <div className="mx-auto px-6 max-w-7xl md:px-12">
                    <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">
                        
                        <a href="https://tailtips.dev" target="_blank" className="annonce variant-outlined gap-2 sz-sm w-fit mx-auto group">
                            <span className="annonce-concern sz-xs variant-neutral">New</span>
                            <span className="text-title text-nowrap text-sm line-clamp-1">
                                Become 60x Confident with TailwindCSS
                            </span>
                            <div className="ml-4 scale-75 flex items-center -space-x-3 group-hover:-translate-x-1 transition-transform duration-300">
                                <span className="w-2.5 translate-y-[-0.3px] -translate-x-px opacity-0 h-[1.5px] rounded bg-gray-950 dark:bg-white origin-left scale-x-0 transition duration-300 group-hover:opacity-100 group-hover:scale-x-100"></span>
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-4 text-gray-950 dark:text-white -translate-x-2 transition duration-300 group-hover:translate-x-px" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </div>
                        </a>
                        <h1 className="mt-8 text-wrap text-4xl md:text-5xl font-semibold text-title xl:text-5xl xl:[line-height:1.125]">Tame the Wild West <br className="hidden sm:block" /> of Frontend Development</h1>
                        <p className="text-wrap mx-auto mt-8 max-w-2xl text-lg hidden sm:block text-body">Tailwindcss highly customizable components for building modern websites and applications that look and feel the way you mean it.</p>
                        <p className="text-wrap mx-auto mt-6 max-w-2xl sm:hidden text-body">Highly customizable components for building modern websites and applications, with your personal spark.</p>
                        <div className="mt-8 flex flex-col items-center justify-center gap-4">
                            <div className="">
                                <a
                                    href="/docs/installation"
                                    className="btn variant-primary sz-lg"
                                >
                                    <svg className="size-5 relative" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0.625C9.72277 0.625 9.45348 0.716199 9.23438 0.885938C8.50234 1.45 6.69766 3.03516 5.68984 5.56172C5.32102 6.47666 5.0952 7.44292 5.02031 8.42656L2.78906 11.1031C2.66731 11.2502 2.58068 11.4231 2.53574 11.6087C2.4908 11.7943 2.48873 11.9877 2.52969 12.1742L3.49531 16.5203C3.54112 16.7267 3.63853 16.9181 3.77842 17.0766C3.91832 17.2351 4.09613 17.3555 4.29522 17.4266C4.49431 17.4977 4.70819 17.5172 4.91684 17.4831C5.12549 17.4491 5.3221 17.3627 5.48828 17.232L7.61797 15.625H12.3836L14.5117 17.232C14.6779 17.3627 14.8745 17.4491 15.0832 17.4831C15.2918 17.5172 15.5057 17.4977 15.7048 17.4266C15.9039 17.3555 16.0817 17.2351 16.2216 17.0766C16.3615 16.9181 16.4589 16.7267 16.5047 16.5203L17.4703 12.1742C17.5113 11.9877 17.5092 11.7943 17.4643 11.6087C17.4193 11.4231 17.3327 11.2502 17.2109 11.1031L14.9797 8.42656C14.9048 7.44292 14.679 6.47666 14.3102 5.56172C13.3023 3.03516 11.4953 1.45 10.7656 0.885938C10.5465 0.716199 10.2772 0.625 10 0.625Z" fill="currentColor" />
                                    </svg>
                                    <span className="text-nowrap btn-label">Start Building</span></a>
                            </div>

                            <button className="hidden btn variant-ghost sz-lg">
                                <span className="text-sm">Learn more</span>
                                <svg className="-mr-1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m19 12l12 12l-12 12"/></svg>
                            </button>
                        </div>
                    </div>
                    <div className="-mx-6 relative mt-8 sm:mt-12 max-w-xl sm:mx-auto">
                        <div className="absolute inset-0 -top-8 left-1/2 -z-20 h-56 w-full -translate-x-1/2 dark:opacity-10 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.200/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.200/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)]"></div>
                        <div className="absolute top-12 inset-x-0 w-2/3 h-1/3 -z-[1] rounded-full bg-primary-300 dark:bg-white/20 mx-auto blur-3xl"></div>
                        
                        <div className="px-6 pt-2 pb-12">
                            <div className="card variant-outlined p-9">
                                <div>
                                    <Image src="https://picsum.photos/seed/1/512/209" alt="Placeholder" width="512" height="209" className="h-12 w-fit mx-auto" data-ai-hint="logo" />
                                    <p className="mt-6 text-lg text-center">30% Increase in revenue</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
}
