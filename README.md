# Digent View

Obsidian 的极简 3D 图谱插件——以星系视角呈现你的知识库。

## 特性

- **3D 力导向图谱**——笔记为节点，链接为连线，Web Worker 力学模拟，3000+ 笔记流畅渲染
- **极简模式**——无背景层、无辉光，纯净暗色画风，专注内容本身
- **Noda VR 导出**——一键将 3D 图谱导出为 CSV，可直接导入 Noda Quest 3 VR，在虚拟现实中沉浸浏览你的知识图谱
- **电影感镜头**——点节点飞入、闲置自动环绕、开场创世动画
- **统计面板**——实时显示笔记数、链接数、字数
- **多语言界面**——中文 / English / Deutsch / Italiano / Español / Português
- **Markdown 与 Canvas 同图**——`.md` 笔记和 `.canvas` 画布都进入图谱

## 安装

**手动安装**：

1. 下载 `main.js`、`manifest.json`、`styles.css`
2. 将文件放入 `<你的库>/.obsidian/plugins/digent-view/`
3. 在「设置 → 第三方插件」中启用 Digent View

## 使用

点击左侧栏的大脑图标，或运行命令 "Open galaxy view"。

### Noda VR 导出

点击控制面板上的「NODA」按钮，插件将当前 3D 图谱导出为 CSV 文件，包含：

- 节点：UUID、3D 坐标、颜色、形状、大小、正文摘要（前 200 字）
- 连线：源节点颜色继承、UUID 关联

将生成的 CSV 导入 Noda（Quest 3 VR），即可在虚拟现实中浏览你的知识图谱。

## 隐私

无任何网络请求、无遥测。插件仅读取你库的链接图谱。

## 致谢

基于 [Galaxy View](https://github.com/longwind1984/galaxy-view) 改造精简而来，感谢原作者 @longwind1984。
