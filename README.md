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


## V13 notes
ABT detail page has been expanded with training pathway, class structure, exam explanation, JIAJING BALLET teaching approach, and a three-image gallery. Replace or credit official ABT imagery before public launch if needed.


## V20 表单与公众号入口

- 首页新增 More than Ballet 公众号二维码板块，二维码图片位于 `assets/more-than-ballet-qr.jpeg`。
- 目前“预约体验课”按钮使用预填写邮件链接。
- 后续如果使用腾讯问卷 / 金数据 / 飞书表单，只需要在 `index.html` 中搜索 `预约体验课` 按钮，把 `href="mailto:..."` 替换为表单链接即可。

## V21 腾讯问卷链接替换说明

腾讯问卷创建完成后，复制「发布/分享」里的问卷链接。
在 `index.html` 中搜索 `预约体验课` 按钮，把 `href="mailto:..."` 替换为你的腾讯问卷链接即可。
上传到腾讯云 COS 后，建议同步覆盖 `index.html` 和 `styles.css`。

## V22 调整

- 顶部 logo 圆标由 `JB` 改为 `J`。
- More than Ballet 公众号二维码板块移动到页面底部，并保持横向布局。
- 缩小公众号板块标题与说明文字，避免移动端文字竖排。


## V23 调整

- 顶部圆形 logo 内的 `J` 加粗放大。
- More than Ballet 二维码板块底部增加留白。
- “预约体验课”按钮已接入腾讯问卷：https://wj.qq.com/s2/27266139/0309/
- Faculty 暂时只保留 Jiayue Guo，移除 Tang Yubo placeholder。


## V24 调整
- 修复顶部 logo 中字母 J 的位置与比例。
- Faculty 顶部说明改为：JIAJING BALLET 以清晰、安全、细致的训练方法，陪伴学生在技术、音乐性、表达与身体理解中长期成长。
- Founder 头像改为完整显示，减少裁切。
- 资质更新为：ABT NTC Certified Teacher · Pre-Primary–Level 7；Rambert Grades Level 1 Certified Teacher。

## V25 调整
- 替换首页 Student Growth 中的课堂照片为新上传的学生照片，并保留 `Photo: Jay样纪实`。
- Founder 英文简介重新润色为更像官网的专业介绍。
- 样式版本号更新为 `styles.css?v=25`，减少移动端缓存旧样式。

## V26 调整
- 同步更新课程详情页顶部圆形 logo：`JB` → `J`。
- 样式版本号更新为 `v=26`，减少浏览器缓存旧样式。
