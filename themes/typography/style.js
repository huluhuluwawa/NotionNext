/* eslint-disable react/no-unknown-property */
import React from 'react';

/**
 * 此处样式只对当前主题生效
 * Typography Theme Style
 * 1. 背景色设置为 #edeadb
 * 2. 移除了背景网格
 * 3. 修复了语法错误和变量声明混杂问题
 * @returns
 */
const Style = () => {
  const css = `
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

    /* 底色 */
    .dark body {
      background-color: rgb(35, 34, 34);
    }

    /* 文本不可选取 */
    .forbid-copy {
      user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }

    /* 移除背景网格 */
    .dark #theme-typography {
      background-image: none !important;
    }

    #theme-typography {
      --primary-color: #2e405b;
      background-color: #edeadb !important;
      color: #2e405b;
      background-size: 7px 7px;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.04);
      /* 移除背景网格 */
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
  `;

  return (
    <style dangerouslySetInnerHTML={{ __html: css }} />
  );
};

export { Style };
