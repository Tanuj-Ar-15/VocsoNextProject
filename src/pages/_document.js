import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7"
          crossOrigin="anonymous"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          rel="stylesheet"
          
        />

      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        {/* Bootstrap JS Bundle (Optional but useful for interactive components) */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-qedElHJ39PQ+Sk2mOZLJ9hT7V0R+cP1MHovKtBqP0xFXQW2Q8GpJrWrkEpzZFkHY"
          crossOrigin="anonymous"
        ></script>
      </body>
    </Html>
  );
}
