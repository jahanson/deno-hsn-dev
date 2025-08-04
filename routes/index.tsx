import { define } from "../utils.ts";

export default define.page(function Home() {
  return (
    <div class="px-4 py-8 mx-auto fresh-gradient min-h-screen">
      <div class="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-3 py-6">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="Joseph Hanson's logo"
        />
        <div class="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
          <div class="text-center md:text-left">
            <h1 class="text-4xl font-bold">
              Hey, I'm{" "}
              <span class="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                Joseph Hanson
              </span>
            </h1>
            <p class="mt-6 text-xl leading-9">
              I'm a Web Application Developer that loves{" "}
              <span class="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent font-bold italic">
                security
              </span>,{"  "}
              <span class="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold italic">
                kubernetes
              </span>,{" "}
              <span class="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent font-bold italic">
                open source
              </span>,{"  "}
              <span class="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent font-bold italic">
                homelabbing
              </span>,{" "}
              <span class="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent font-bold italic">
                hardware
              </span>, and{" "}
              <span class="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-bold italic">
                networking
              </span>. I'm a huge advocate for open source and open standards!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
