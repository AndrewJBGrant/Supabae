"use client";
import { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen ? (

        <div className="fixed left-0 top-1/2 z-40">
          <button>
            <span className="absolute bg-green-400" onClick={() => setIsOpen(!isOpen)}>Open</span>
          </button>
        </div>
      ) : (

      <div className={`${isOpen ? "translate-x-0" : "translate-x-full"} ease-in-out duration-300 flex 1 shrink flex-col overflow-x-hidden bg-slate-600 border-slate-600 text-white p-2`}>
        <nav className="flex h-full w-full flex-col px-3 pb-3.5">
          <ul className="p-2 flex flex-col gap-4">
            <li>Home</li>
            <li>Beach</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Tailwind</li>
            <li>Condolences</li>
          </ul>
        </nav>

 <div className="fixed left-0 top-1/2 z-40">
          <button>
            <span className="absolute bg-green-400" onClick={() => setIsOpen(!isOpen)}>close</span>
          </button>
        </div>



      </div>
      )}
    </>
  );
}

export default function FlexPage() {
  return (
    <div className="flex relative z-0 h-screen w-full overflow-hidden">
        <Sidebar />

      <section className="bg-red-400 flex 1 grow mx-auto w-1/2 transition-width">

        <article className="px-4 py-2">
          <p className="indent-8 m-8">
            Good to know: You can run code on server startup using the register
            function. We do not recommend using the runtimeConfig option, as
            this does not work with the standalone output mode. Instead, we
            recommend incrementally adopting the App Router. Caching and ISR
            Next.js can cache responses, generated static pages, build outputs,
            and other static assets like images, fonts, and scripts. Caching and
            revalidating pages (using Incremental Static Regeneration (ISR) or
            newer functions in the App Router) use the same shared cache. By
            default, this cache is stored to the filesystem (on disk) on your
            Next.js server. This works automatically when self-hosting using
            both the Pages and App Router. You can configure the Next.js cache
            location if you want to persist cached pages and data to durable
            storage, or share the cache across multiple containers or instances
            of your Next.js application. Automatic Caching Next.js sets the
            Cache-Control header of public, max-age=31536000, immutable to truly
            immutable assets. It cannot be overridden. These immutable files
            contain a SHA-hash in the file name, so they can be safely cached
            indefinitely. For example, Static Image Imports. You can configure
            the TTL for images. Incremental Static Regeneration (ISR) sets the
            Cache-Control header of s-maxage, stale-while-revalidate. This
            revalidation time is defined in your getStaticProps function in
            seconds. If you set revalidate: false, it will default to a one-year
            cache duration. Dynamically rendered pages set a Cache-Control
            header of private, no-cache, no-store, max-age=0, must-revalidate to
            prevent user-specific data from being cached. This applies to both
            the App Router and Pages Router. This also includes Draft Mode.
            Static Assets If you want to host static assets on a different
            domain or CDN, you can use the assetPrefix configuration in
            next.config.js. Next.js will use this asset prefix when retrieving
            JavaScript or CSS files. Separating your assets to a different
            domain does come with the downside of extra time spent on DNS and
            TLS resolution. Learn more about assetPrefix. Configuring Caching By
            default, generated cache assets will be stored in memory (defaults
            to 50mb) and on disk. If you are hosting Next.js using a container
            orchestration platform like Kubernetes, each pod will have a copy of
            the cache. To prevent stale data from being shown since the cache is
            not shared between pods by default, you can configure the Next.js
            cache to provide a cache handler and disable in-memory caching. To
            configure the ISR/Data Cache location when self-hosting, you can
            configure a custom handler in your next.config.js file:
          </p>
        </article>
      </section>
    </div>
  );
}
