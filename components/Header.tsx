import {
  IconBrandBluesky,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMastodon,
} from "@tabler/icons-preact";

export function Header() {
  return (
    <header class="bg-slate-800 border-b border-slate-700">
      <div class="max-w-screen-lg mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <img
              src="/logo.svg"
              width="32"
              height="32"
              alt="Logo"
              class="rounded"
            />
            <h1 class="text-xl font-bold text-white">Joseph Hanson</h1>
          </div>
          <nav>
            <ul class="flex items-center space-x-4">
              <li>
                <a
                  href="https://www.github.com/jahanson"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-300 hover:text-white transition-colors"
                  title="GitHub"
                >
                  <IconBrandGithub size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://infosec.exchange/@jahanson"
                  target="_blank"
                  rel="me noopener noreferrer"
                  class="text-gray-300 hover:text-white transition-colors"
                  title="Mastodon"
                >
                  <IconBrandMastodon size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://bsky.app/profile/hsn.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-300 hover:text-white transition-colors"
                  title="Bluesky"
                >
                  <IconBrandBluesky size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/josephhanson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-300 hover:text-white transition-colors"
                  title="LinkedIn"
                >
                  <IconBrandLinkedin size={24} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
