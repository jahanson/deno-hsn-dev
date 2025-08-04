import type { PageProps } from "fresh";
import { Header } from "../components/Header.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="generator" content={`Deno ${Deno.version.deno}`} />
        <title>Joseph Hanson</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-slate-900 text-gray-100">
        <Header />
        <Component />
      </body>
    </html>
  );
}
