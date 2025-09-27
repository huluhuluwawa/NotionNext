/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持 tailwindCSS 的 @apply 语法
 * @returns
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
      }
      // 底色 (夜間模式)
      .dark body {
        background-color: rgb(35, 34, 34);
      }
      // 文本不可选取
      .forbid-copy {
        user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
      }

      /* ========================================= */
      /* 夜間模式：移除背景方格 */
      /* ========================================= */
      .dark #theme-typography {
        /* 移除夜間模式下的方格背景 */
        background-image: none;
        
        /* 保持夜間底色設定，維持深色背景 */
        background-color: rgb(35, 34, 34);
        background-size: initial; 
      }

      /* ========================================= */
      /* 日間模式：設置純色背景 */
      /* ========================================= */
      #theme-typography {
        --primary-color: #2e405b;
        
        /* [已修改] 日間模式背景底色：設置為 #FFFACD */
        background-color: #FFFACD;
        
        color: #2e405b;
        background-size: initial; /* 移除方格尺寸設定 */
        text-shadow: 1px 1px 1px rgb(0 0 0 / 0.04);
        
        /* [已修改] 移除方格線條 */
        background-image: none;
      }

      /* 保持其他樣式不變... */

      #theme-typography #blog-name {
        font-family: HiraMinProN-W6, 'Source Han Serif CN',
          'Source Han Serif SC', 'Source Han Serif TC', serif;
      }

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
  )
}

export { Style }

