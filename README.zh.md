# Digent View

> **基于"认知爽文"作品等材料，按照Digent构建的4层架构蒸馏出来的MD文件库，就是一个数智体的大脑。**
>
> 每一份MD文件就是一个神经元，每一条 `[[wikilink]]` 是一条神经元之间的链接。Digent View 将这座大脑以三维形态呈现，让你看见自己的Digent结构。

![Digent View — 三维神经元网络全景](assets/screenshot-overview.png)

[English version](README.md)

---

## 什么是数智体（Digent）

数智体（Digent），是 AI 时代的新生命单元。它由真实的人、组织或知识体系，通过 AI 持续蒸馏形成——不仅继承知识与技能，还继承思维方式、行为风格、长期记忆和价值判断。

> Agent 关注的是"把事情做完"，数智体关注的是"把一个人的认知、经验、人格、决策方式沉淀下来，并持续存在"。
>
> ——《数智体白皮书 V1.0》

数智体的六个核心要素：**智**（持续推理）、**忆**（本源记忆）、**魂**（精神内核）、**技**（专业能力）、**行**（自主执行）、**长**（持续成长）。

Digent View 关注的是在obsidian或者VR 的Noda里，具象化的呈现出一颗完整的Digent外在的神经元网络结构。

## 为什么是 3D

人脑不是平面的。你的知识体系也不是。
因此你的Digent依然不是。

在obsidian的二维图谱里，神经元之间被压扁在同一平面上，密集区域糊成一团，神经元链接结构被抹平。而在三维空间里：

- **文件夹即脑区**——顶层文件夹是脑区，子文件夹是神经簇（神经元集合 ensemble），单篇笔记是神经元
- **距离即关联**——链接越多的节点引力越强，自然聚集成认知核心区
- **结构即记忆**——MD文件在三维空间中构建起来的空间网状拓扑结构，为记忆，映射出对知识的直觉与理解，甚至最终涌现出意识

Digent View 用力导向算法模拟神经元之间的吸引与排斥，让你的Digent自然生长成一座有结构、有层次、有核心的大脑形态，涌现出类似你自己的永久记忆体。

![Digent View — 聚焦节点，突触辐射展开](assets/screenshot-node-focus.png)

## 核心功能

### 3D Digent图谱

- **力导向布局**——Web Worker 力学模拟，基于神经元链接网络模型的渲染
- **极简暗色画风**——无背景层，纯净深空，专注认知结构本身的呈现
- **电影感镜头**——点节点飞入环绕、闲置自动漂移、开场从中心绽放整颗大脑的构建动画
- **文件夹配色**——每个顶层文件夹对应一种颜色，同时充当过滤图例
- **Markdown 与 Canvas 同图**——`.md`=笔记=神经元，和 `.canvas` 画布都进入图谱

### 统计面板

实时显示你大脑的规模：
- **笔记数**——你的神经元数量
- **链接数**——你的神经元连接数
- **字数**——你的认知语料总量

### Noda VR 导出

一键将 3D 图谱导出为 CSV，直接导入 [Noda](https://noda.io)（Quest 3 VR），**走进你自己Digent：数智体的大脑**。

![Noda VR CSV 导出 — 神经元 3D 坐标、颜色、形状一览](assets/noda-csv-export.png)

导出内容：
- **节点（神经元）**：UUID、3D 坐标、颜色、形状、大小、正文摘要（前 200 字，清洗格式）
- **连线（突触）**：继承源神经元颜色、UUID 关联

在 VR 中，你不再是从外面看一座图谱，而是站在自己的Digent数智体的大脑内部，四周是你的神经元网络。

## 安装

### 手动安装

1. 下载 `main.js`、`manifest.json`、`styles.css`
2. 将三个文件放入 `<你的库>/.obsidian/plugins/digent-view/`
3. 打开 Obsidian → 设置 → 第三方插件 → 启用 Digent View

### 从 Release 安装

从 [Releases](https://github.com/yanghuaqlx/digent-view/releases) 下载 `digent-view-v0.1.0.zip`，解压到插件目录即可。

## 使用

点击左侧栏的 **大脑图标** 🧠，或运行命令 `Open galaxy view`。

### 操作指南

| 操作           | 效果                  |
| ------------ | ------------------- |
| 点击节点         | 飞入并环绕该节点            |
| 搜索           | 模糊搜索飞向任意MD文件        |
| 回中心          | 重置视角到图谱中心           |
| NODA         | 导出 CSV 供 Noda VR 使用 |
| WASD / Q / E | 自由飞行                |
| 右键拖动         | 平移视角                |
| F / R / ESC  | 快捷键                 |

### Noda VR 使用流程

1. 在 Digent View 中点击「NODA」按钮，生成 CSV 文件
2. 将 CSV 传输到 Quest 3 设备
3. 在 Noda 中导入 CSV
4. 戴上VR，走进你的数智体大脑

## 隐私

无任何网络请求、无遥测。插件仅读取你 Obsidian 库的链接图谱，不发送任何数据到任何服务器。

## 致谢

- 基于 [Galaxy View](https://github.com/longwind1984/galaxy-view) 改造精简而来，感谢原作者 [@longwind1984](https://github.com/longwind1984)
- 数智体概念来自《数智体白皮书 V1.0》（杨华）
- 认知结构理念参考《认知爽文流白皮书》（《[我是码农、我是宇宙](https://changdunovel.com/ug/pages/book-share?share_type=11&aid=1967&book_id=7447405734825839640&encrypt_did=MDIEDP9qrl3GeRfFTHgLfwQQ5D3ax6c8xMc1skKxI4s7ngQQSUze%2F9Xi5Xn%2B4YGlaei8aw%3D%3D&share_genre=read&user_id=ed73db7deafbe9ab9834e403f37ca56b&did=8ed27202c1a4227179339562ac71c626&entrance=book_detail_fold&zlink=https%3A%2F%2Fzlink.fqnovel.com%2FdhVGe&gd_label=click_schema_lhft_share_novelapp_android&ver=v2&source_channel=wechat&share_channel=wechat&type=book&bg=c2daf2-dae9f7-233140&book_detail_new_style=1&share_timestamp=1785188007&report_params=%7B%22entrance%22%3A%22book_detail_fold%22%2C%22type%22%3A%22book_detail%22%2C%22content_type%22%3A%22novel%22%2C%22content_id%22%3A%227447405734825839640%22%2C%22content_id_key%22%3A%22book_id%22%2C%22share_timestamp%22%3A%221785188007%22%7D&share_token=9cc75ae9-0ba7-4926-8d70-5aba5628fa2a)》5TTPWu）

## 相关文档

- [数智体白皮书 V1.0](https://github.com/yanghuaqlx/digent-view) — Digent 概念的完整定义
- [认知爽文流白皮书](https://github.com/yanghuaqlx/digent-view) — 真实人生作为超级外挂
- [四维语言:用语言学解构神经元网络](https://d.wanfangdata.com.cn/periodical/zgkjzh202405011).前卫, 2024(21):0040-0042.
- [信息时空:解构信息,语言与交付的多维度与未来趋势](https://www.zhangqiaokeyan.com/academic-journal-cn_detail_thesis/02012160234660.html).中国科技纵横, 2024(5):23-25.

---

> **Digent View 不是一个图谱查看器。它是一面镜子——让你看见自己的Digent：数智体的形状。**
