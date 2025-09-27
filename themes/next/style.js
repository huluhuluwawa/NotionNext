/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      // 底色和全局字体 (已更新为参考网站的字体堆栈)
      body {
        background-color: #eeedee;
        /* 設置全局字體：優先使用現代系統無襯線和思源黑體 */
        font-family:
          Source Sans Pro,
          Roboto,
          Helvetica,
          Helvetica Neue,
          PingFang SC,
          PingFang HK,
          PingFang TC,
          Source Han Sans SC,
          Source Han Sans TC,
          sans-serif;
      }
      .dark body {
        background-color: black;
        /* 設置夜間模式字體 */
        font-family:
          Source Sans Pro,
          Roboto,
          Helvetica,
          Helvetica Neue,
          PingFang SC,
          PingFang HK,
          PingFang TC,
          Source Han Sans SC,
          Source Han Sans TC,
          sans-serif;
      }

      // 菜单下划线动画
      #theme-next .menu-link {
        text-decoration: none;
        background-image: linear-gradient(#4e80ee, #4e80ee);
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: 0 2px;
        transition: background-size 100ms ease-in-out;
      }
      #theme-next .menu-link:hover {
        background-size: 100% 2px;
        color: #4e80ee;
      }
    `}</style>
  )
}

export { Style }
