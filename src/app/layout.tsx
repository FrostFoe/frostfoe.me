import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ada - A Tailus template",
  description: "Modern landing page built with tailus themer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-shade="950" data-rounded="3xlarge">
      <body>
        <header id="header" className="group">
            <nav className="fixed overflow-hidden z-20 w-full border-b bg-white/50 dark:bg-gray-950/50 backdrop-blur-2xl">
                <div className="px-6 m-auto max-w-6xl ">
                    <div className="flex flex-wrap items-center justify-between py-2 sm:py-4">
                        <div className="w-full items-center flex justify-between lg:w-auto">
                            <a href="/" aria-label="tailus logo">
                                <svg className="text-title h-7" width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42 84C65.196 84 84 65.196 84 42C84 18.804 65.196 0 42 0C18.804 0 0 18.804 0 42C0 65.196 18.804 84 42 84Z" fill="currentColor"/>
                                </svg>
                            </a>
                            <div className="flex lg:hidden">
                                <button id="menu-btn" aria-label="open menu" className="btn variant-ghost sz-md icon-only relative z-20 -mr-2.5 block cursor-pointer lg:hidden">
                                    <svg className="text-title m-auto size-6 transition-[transform,opacity] duration-300 group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"></path>
                                    </svg>
                                    <svg className="text-title absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 transition-[transform,opacity] duration-300 group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="w-full group-data-[state=active]:h-fit h-0 lg:w-fit flex-wrap justify-end items-center space-y-8 lg:space-y-0 lg:flex lg:h-fit md:flex-nowrap">
                            <div className="mt-6 dark:text-body md:-ml-4 lg:pr-4 lg:mt-0">
                                <ul className="space-y-6 tracking-wide text-base lg:text-sm lg:flex lg:space-y-0">
                                    <li>
                                        <a href="#" className="hover:link md:px-4 block">
                                            <span>Product</span>
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <a href="#" className="hover:link md:px-4 block">
                                            <span>Playground</span>
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <a href="#" className="hover:link md:px-4 block">
                                            <span>Docs</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:link md:px-4 block">
                                            <span>Blog</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="w-full space-y-2 gap-2 pt-6 pb-4 lg:pb-0 border-t items-center flex flex-col lg:flex-row lg:space-y-0 lg:w-fit lg:border-l lg:border-t-0 lg:pt-0 lg:pl-2">
                                <button className="btn variant-ghost sz-sm">
                                    <span className="btn-label">Login</span>
                                </button>
                                <button className="btn variant-neutral sz-sm">
                                    <span>Sign Up</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        {children}
        <footer className="card variant-outlined !bg-transparent">
            <div className="max-w-6xl mx-auto space-y-16 px-6 py-16 ">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-8">
                    <a href="/" aria-label="tailus logo">
                        <svg className="text-title h-7" width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42 84C65.196 84 84 65.196 84 42C84 18.804 65.196 0 42 0C18.804 0 0 18.804 0 42C0 65.196 18.804 84 42 84Z" fill="currentColor"/>
                        </svg>
                    </a>
                    <div className="flex gap-3">
                        <a href="https://github.com/tailus-ui" target="blank" aria-label="github" className="size-8 flex *:m-auto text-body hover:text-primary-600 dark:hover:text-primary-500">
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </a>
                        <a href="https://twitter.com/tailus_ui" target="blank" aria-label="twitter" className="size-8 flex *:m-auto rounded-[--btn-border-radius] text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/>
                            </svg>
                        </a>
                        <a href="https://youtube.com/@tailus-ui" target="blank" aria-label="medium" className="size-8 flex *:m-auto rounded-[--btn-border-radius] text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"/></svg>
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                    <div>
                        <span className="font-medium text-gray-950 dark:text-white">Enterprise</span>
                        <ul className="mt-4 list-inside space-y-4">
                            <li>
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">About</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Customers</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Enterprise</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Partners</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Jobs</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <span className="text-sm font-medium text-gray-950 dark:text-white">Product</span>
                        <ul className="mt-4 list-inside space-y-4">
                            <li>
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Security</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Customization</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Enterprise</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Partners</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <span className="text-sm font-medium text-gray-950 dark:text-white">Docs</span>
                        <ul className="mt-4 list-inside space-y-4">
                            <li>
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Introduction</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Installation</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Utils</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Principles</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Jargon</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Plugin</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Customizer</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Boilerplates</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <span className="text-sm font-medium text-gray-950 dark:text-white">Community</span>
                        <ul className="mt-4 list-inside space-y-4">
                            <li>
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">GitHub</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Discord</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">Slack</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">X / Twitter</a>
                            </li>
                        </ul>

                        <form className="mt-12 max-w-xs w-full">
                            <div className="space-y-2.5 has-[:disabled]:has-[:where(label,span)]:select-none has-[:disabled]:has-[:where(label,span)]:opacity-50 text-gray-950 dark:text-white has-[:disabled]:has-[:where(label,span)]:text-gray-600 dark:has-[:disabled]:has-[:where(label,span)]:text-gray-400">
                                <label className="block font-medium text-sm" htmlFor="email">Subscribe to our newsletter</label>
                                <input className="input variant-mixed sz-md" placeholder="Your email" type="email" id="email" required name="email" />
                                <span className="hidden peer-disabled:text-gray-600 dark:peer-disabled:text-gray-400 text-gray-500 dark:text-gray-400 text-sm">Helper message</span>
                            </div>
                            <button type="submit" className="btn variant-neutral sz-md mt-3">
                                <span>Subscribe</span>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex items-center justify-between rounded-md px-6 py-3 card variant-soft">
                    <span className="text-title">&copy; tailus 2021 - Present</span>
                    <a href="#" className="text-sm text-body hover:text-primary-600 dark:hover:text-primary-500">Licence</a>
                </div>
            </div>
        </footer>
        <Script id="menu-toggle">
          {
            `
            const mainHeader = document.querySelector("#header");
            const menuBtn = document.querySelector("#menu-btn");

            menuBtn.addEventListener("click", () => {
              mainHeader.dataset.state = mainHeader.dataset.state === "active" ? "closed" : "active";
            })
            `
          }
        </Script>
      </body>
    </html>
  );
}
