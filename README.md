# JIAJING BALLET Website V9

这是 JIAJING BALLET 官网的第九版静态网站。

## 本版调整

- 首页 Hero 改为：顶部居中横排 `JIAJING BALLET`，下方保留 `More than Ballet` 胶囊式 slogan。
- Hero 下半部分改为左右两栏：左侧为中文 statement、英文 quote、简短介绍与按钮；右侧为课堂照片。
- 保留当前首页课堂图片，不再添加图片文字浮层。
- Rambert Grades 详情页已基于公开官方信息进行内容扩充：课程核心、等级路径、Technical / Performance / Creative 三条线索，以及在 JIAJING BALLET 课程体系中的意义。
- 修复并重写了 CSS 的移动端适配，保证桌面端与手机端排版更稳定。

## 如何预览

解压后，直接双击 `index.html` 即可在浏览器打开。

## 文件结构

```text
jiajing-ballet-site/
├── index.html
├── styles.css
├── script.js
├── README.md
├── assets/
│   ├── hero-class-movement.jpeg
│   ├── jiayue-guo-portrait.jpg
│   ├── abt-logo-black.png
│   ├── rambert-grades-logo-direct.png
│   ├── abt-class-photo.jpg
│   ├── rambert-grades-1.webp
│   └── ...
└── programs/
    ├── abt-ntc.html
    └── rambert-grades.html
```

## 图片说明

当前部分图片为用户上传图片，另有少量图片为视觉占位。正式上线前，请确认所有儿童照片、教师照片、课程照片均获得公开使用授权。

## 下一步建议

1. 确认首页 Hero 的最终文案与图片裁切。
2. 继续细化 ABT 与 Rambert 两个课程详情页。
3. 加入真实课程时间、体验课价格、微信二维码和报名表单。
4. 确认 ABT / Rambert 公开表述是否符合官方使用规范。
5. 上线到 GitHub + Vercel。


## V10 notes
- 首页文字比例收小，Hero 右侧图片改为完整显示。
- 课程卡片文字底色统一。
- Rambert Grades 详情页加入三张官方宣传素材图，并保留 credit。
- 课程详情页标题与正文大小下调。
