import type { GraphNode } from '../types';

const SHAPES: string[] = ['Ball', 'Box', 'Tetra', 'Cylinder', 'Diamond', 'Hourglass', 'Plus', 'Star'];
const GALAXY_SCALE = 1 / 100;

function folderLabel(folder: string): string {
	if (folder === '') return 'Root';
	if (folder === '__unresolved__') return 'Unresolved';
	if (folder === '__tag__') return 'Tags';
	return folder;
}

function computeNodeSize(degree: number): number {
	const raw = 5 * (1 + 0.5 * Math.sqrt(Math.max(degree, 0)));
	return Math.max(5, Math.min(45, Math.round(raw)));
}

function csvField(value: string): string {
	if (/["\n\r,]/.test(value)) return '"' + value.replace(/"/g, '""') + '"';
	return value;
}

function uuid(): string {
	if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
		const r = (Math.random() * 16) | 0;
		const v = c === 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

function safeNum(v: number): number {
	return Number.isFinite(v) ? v : 0;
}

/** Strip frontmatter, code blocks, wikilinks and markdown formatting; return a clean text preview. */
export function cleanContent(raw: string, maxLen = 200): string {
	let s = raw.replace(/^---[\s\S]*?---[ \t]*\r?\n?/, '');
	s = s.replace(/```[\s\S]*?```/g, '');
	s = s.replace(/`[^`]+`/g, '');
	s = s.replace(/\[\[([^\]|#]+)(?:[#^][^\]|]*)?(?:\|([^\]]*))?\]\]/g, (_, target, alias) => alias || target);
	s = s.replace(/!\[[^\]]*\]\([^)]*\)/g, '');
	s = s.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
	s = s.replace(/\*\*([^*]+)\*\*/g, '$1');
	s = s.replace(/\*([^*]+)\*/g, '$1');
	s = s.replace(/^#{1,6}\s+/gm, '');
	s = s.replace(/^\s*[-*+]\s+/gm, '');
	s = s.replace(/^>\s+/gm, '');
	s = s.replace(/\r?\n+/g, ' ').replace(/\s+/g, ' ').trim();
	if (s.length > maxLen) s = s.slice(0, maxLen) + '…';
	return s;
}

export interface NodaExportInput {
	nodes: GraphNode[];
	links: { source: number; target: number }[];
	positions: Float32Array;
	colorHex: (node: GraphNode) => string;
	notes: string[];
}

export function generateNodaCsv(input: NodaExportInput): string {
	const { nodes, links, positions, colorHex, notes } = input;

	const sortedFolders = [...new Set(nodes.map((n) => n.folderTop).filter(Boolean))].sort() as string[];
	const folderStyles = new Map<string, { color: string; shape: string }>();
	for (let i = 0; i < sortedFolders.length; i++) {
		const folder = sortedFolders[i]!;
		const probe = nodes.find((n) => n.folderTop === folder);
		folderStyles.set(folder, {
			color: probe ? colorHex(probe) : '888888',
			shape: SHAPES[i % SHAPES.length]!,
		});
	}

	const nodeUuids = nodes.map(() => uuid());

	const rows: string[][] = [];
	rows.push([
		'Uuid', 'Title', 'Notes', 'ImageURL', 'PageURL',
		'Color', 'Opacity', 'Shape', 'Size',
		'PositionX', 'PositionY', 'PositionZ',
		'Collapsed', 'Type', 'FromUuid', 'ToUuid',
	]);

	for (const folder of sortedFolders) {
		const st = folderStyles.get(folder)!;
		rows.push([
			uuid(), folderLabel(folder), '', '', '',
			st.color, '1', st.shape, '5',
			'0', '52', '0.11',
			'No', 'Type', '', '',
		]);
	}

	for (let i = 0; i < nodes.length; i++) {
		const n = nodes[i];
		if (!n) continue;
		const st = folderStyles.get(n.folderTop) ?? { color: '888888', shape: 'Ball' };
		const x = safeNum(positions[i * 3] ?? 0) * GALAXY_SCALE;
		const y = safeNum(positions[i * 3 + 1] ?? 0) * GALAXY_SCALE + 50;
		const z = safeNum(positions[i * 3 + 2] ?? 0) * GALAXY_SCALE;
		rows.push([
			nodeUuids[i] ?? '', n.name,
			notes[i] ?? '',
			'', '',
			st.color, '1', st.shape, String(computeNodeSize(n.degree)),
			String(Math.round(x * 1e6) / 1e6),
			String(Math.round(y * 1e6) / 1e6),
			String(Math.round(z * 1e6) / 1e6),
			'No', folderLabel(n.folderTop), '', '',
		]);
	}

	const seen = new Set<string>();
	for (const link of links) {
		const key = `${link.source}->${link.target}`;
		if (seen.has(key)) continue;
		seen.add(key);
		const su = nodeUuids[link.source];
		const tu = nodeUuids[link.target];
		const srcNode = nodes[link.source];
		if (!su || !tu || !srcNode) continue;
		rows.push([
			uuid(), '', '', '', '',
			colorHex(srcNode), '1', 'Solid', '1',
			'', '', '',
			'', '', su, tu,
		]);
	}

	return '\ufeff' + rows.map((r) => r.map(csvField).join(',')).join('\r\n');
}
