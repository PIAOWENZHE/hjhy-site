
# 使用高清照片的方法（无需改代码）

把你的高清图片放到 `images/` 文件夹中，并按以下文件名覆盖：

- 首页大图：`hero.jpg` （建议 1600×900，JPG，300–600 KB）
- 模特缩略图与详情页大图：
  - `model-01.jpg`
  - `model-02.jpg`
  - ...
  - `model-12.jpg`

网页会**自动优先加载 .jpg**，如果找不到对应 JPG，就会**自动回退到内置的灰色 SVG 占位图**。
（实现方式：`<img src="xxx.jpg" onerror="this.src='xxx.svg'">`）

> 你也可以用 PNG：把图片另存为 JPG 命名即可；或者把文件名改成 `.jpg`（大多数托管也能正确识别）。

## 压缩建议
- 使用 Squoosh / TinyPNG 压缩到 70–85% 画质，单张控制在 300–800 KB。
- 列表页缩略图建议 800×1000；详情页大图建议 1200×800 或 1600×1000。

## 表单说明
请在 `contact.html` 中把 `<form action="https://formspree.io/f/your-id">` 替换成你自己的地址。
