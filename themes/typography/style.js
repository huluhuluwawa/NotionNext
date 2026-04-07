/* eslint-disable react/no-unknown-property */
import React from 'react';

/**
 * 此处样式只对当前主题生效
 * Typography Theme Style
 * 修复说明：
 * 1. 彻底清除了代码中的 Diff 冲突字符（如 @@, +, - 等）
 * 2. 背景色设置为 #edeadb，显式移除背景网格
 * 3. 保持原有的 export { Style } 导出方式
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

    /* 底色 - 暗色模式 */
    .dark body {
      background-color: rgb(35, 34, 34);
    }

    /* 文本不可选取 */
    .forbid-copy {
      user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }

    /* 移除暗色模式背景网格 */
    .dark #theme-typography {
      background-image: none !important;
    }

    /* 主题核心样式 */
    #theme-typography {
      --primary-color: #2e405b;
      background-color: #edeadb !important;
      color: #2e405b;
      background-size: 7px 7px;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.04);
      /* 显式移除背景网格，防止线性渐变残留 */
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
