import type { BloomSettings, LookSettings, PhysicsSettings, SpaceSettings } from '../settings';

/**
 * 风格预设 = 一整套外观：辉光 + 力学 + 外观 + 星空背景开关 + 深空背景形态层 + 配色主题 + 取景仰角。
 * Digent View 只保留「极简」一种模式：无辉光 · 无星空背景 · 克制暗色。
 * 名称/副标题走 i18n（preset.sub.<id>），图标由 src/overlay/presetIcons.ts 按 id 现画。
 */
export interface StylePreset {
	id: string;
	name: string; // 中文名（英文名走 nameEn；面板按语言取）
	nameEn?: string;
	/** 星点天幕开关（球壳背景星） */
	starfield: boolean;
	/** 深空背景形态层（星云天幕/空间浮星/集群云雾，0=关） */
	space: SpaceSettings;
	/** 配色主题 id（见 colorThemes.ts）——预设会一并套用 */
	theme: string;
	/** 相机取景仰角（度）：盘类俯视看臂 ~50°，球/团类保持 18° */
	frameElevDeg?: number;
	bloom: BloomSettings;
	physics: PhysicsSettings;
	look: LookSettings;
}

export const STYLE_PRESETS: StylePreset[] = [
	{
		id: 'minimal', name: '极简', nameEn: 'Minimal', starfield: false, theme: 'matrix', frameElevDeg: 18,
		space: { nebula: 0, fieldStars: 0, clusterClouds: 0 },
		bloom: { strength: 0, radius: 0.3, threshold: 0.3 },
		physics: { repel: 230, linkDistance: 80, linkStrength: 1, centerPull: 0.04, flatten: 0, coreGravity: 0, spiral: 0 },
		look: { nodeSize: 0.8, linkOpacity: 0.07, linkCurve: 0, twinkle: 0, sizeBy: 'degree' },
	},
];
