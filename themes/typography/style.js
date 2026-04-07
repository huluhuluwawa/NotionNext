/* eslint-disable react/no-unknown-property */
import React from 'react';

/**
 * Typography Theme Style
 * 1. Background color set to #edeadb
 * 2. Background grid removed
 */
const Style = () => {
  return (
    <style jsx global>{`
      html {
        -webkit-font-smoothing: antialiased;
      }

      .font-typography {
        font-weight: 400;
        font-family:
          Source Sans Pro,
          Roboto,
          Helvetica,
          Helvetica Neue,
          Source Han Sans SC,
          Source Han Sans TC,
          PingFang SC,
          PingFang HK,
          PingFang TC,
          sans-serif !important;
      }

      /* Dark mode background */
      .dark body {
        background-color: rgb(35, 34, 34);
      }

      /* Prevent text selection */
      .forbid-copy {
        user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
      }

      .dark #theme-typography {
        background-image: none !important;
      }

      #theme-typography {
        --primary-color: #2e405b;
        background-color: #edeadb !important;
        color: #2e405b;
        background-size: 7px 7px;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.04);
        /* Remove background grid */
        background-image: none !important;
      }

      #theme-typography #blog-name,
      #theme-typography #blog-name-en {
        font-family: HiraMinProN-W6, 'Source Han Serif CN',
          'Source Han Serif SC', 'Source Han Serif TC', serif;
      }

      #theme-typography .blog-item-title {
        color: #276077;
      }

      .dark #theme-typography .blog-item-title {
        color: #d1d5db;
      }

      .notion {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
      }

      #container-wrapper .scroll-hidden {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
      }
    `}</style>
  );
};

export { Style };
export default Style;
