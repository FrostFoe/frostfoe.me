<h1 align="center">Next.js Portfolio & Blog with Notion CMS</h1>
<p align="center">A modern, performant, and responsive personal portfolio and blog built with Next.js and managed entirely through Notion.</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=NEXTJS&message=14&color=000&logo=nextjs" alt="Next.js"/>
  <img src="https://img.shields.io/static/v1?label=TAILWINDCSS&message=3&color=38B2AC&logo=tailwind-css" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/static/v1?label=CMS&message=Notion&color=000000&logo=notion" alt="Notion CMS"/>
</p>

## ✨ Key Features

- **Blazing Fast Performance:** Built with Next.js App Router for optimal speed and SEO.
- **Headless CMS:** Blog content is managed seamlessly through a Notion database.
- **Modern Tech Stack:** Utilizes React, Tailwind CSS for styling, and TypeScript.
- **Fully Responsive:** A clean and accessible design that looks great on any device, from mobile to desktop.
- **Easy to Deploy:** Ready to be deployed on modern hosting platforms like Vercel or Netlify.

## 🚀 Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (LTS version recommended)
- A [Notion](https://www.notion.so/) account

### 1. Set Up Your Notion Database

1.  **Duplicate the Template:** Duplicate the [official Notion blog template](https://www.notion.so/blog-26435bcd4d7d49b88ef1fc82e902608c) into your own Notion workspace.
2.  **Create an Integration:**
    - Go to [notion.so/my-integrations](https://www.notion.so/my-integrations) and create a new integration.
    - Give it a name (e.g., "My Blog").
    - Keep the "Internal Integration" type.
    - Copy the **Internal Integration Token** (secret) – this will be your `NOTION_TOKEN`.
3.  **Share the Database:**
    - Open your duplicated database in Notion.
    - Click the three-dots menu in the top-right corner.
    - Click "Add connections" and select the integration you just created.
4.  **Get the Database ID:**
    - The URL of your Notion database will look like this: `https://www.notion.so/your-workspace/DATABASE_ID?v=...`
    - Copy the `DATABASE_ID` part of the URL. This will be your `BLOG_INDEX_ID`.

### 2. Local Installation

1.  **Clone the Repository:**
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install Dependencies:**
    ```sh
    npm install
    ```

3.  **Set Up Environment Variables:**
    Create a file named `.env.local` in the root of your project and add your Notion credentials:
    ```env
    NOTION_TOKEN=YOUR_INTERNAL_INTEGRATION_TOKEN
    BLOG_INDEX_ID=YOUR_NOTION_DATABASE_ID
    ```

4.  **Run the Development Server:**
    ```sh
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🏗️ Production Build

To create a production-ready build of your application, run the following command:

```sh
npm run build
```

This will generate an optimized build in the `.next` folder that you can deploy to any hosting service that supports Next.js.

## 📄 License

This project is open-source and released under the [MIT License](LICENSE).
