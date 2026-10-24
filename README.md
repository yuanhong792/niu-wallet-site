# 牛币钱包 NIU Wallet · 官方网站

这是 NIU 链桌面钱包的对外官网静态站点，托管在 GitHub Pages。

**在线地址：** https://yuanhong792.github.io/niu-wallet-site/

## 内容

单页站点，中文为主、可一键切换英文。包含钱包功能介绍、网络参数、界面截图、安全状态说明、安装包下载入口与风险提示。

所有事实性描述来自钱包主仓库的 `README.md` 与 `SECURITY.md`：

- 主仓库：https://github.com/yuanhong792/niu-wallet
- 下载页：https://github.com/yuanhong792/niu-wallet/releases

## 技术

纯静态，无框架、无构建、无外部 CDN 依赖，字体使用系统字体栈。站点根目录的 `.nojekyll` 用于关闭 Jekyll 处理。

- `index.html` — 页面结构与文案（中英双语成对 span）
- `site.css` — 样式
- `site.js` — 语言切换与哈希复制

## 安全声明

本站不托管任何二进制文件以外的服务，不收集数据，不索要私钥或助记词。安装包直接链接到 GitHub Releases，每个包都标注 SHA-256 供校验。

当前版本未经独立第三方安全审计，安装包未完成代码签名与公证，相关说明已在页面中醒目展示。
