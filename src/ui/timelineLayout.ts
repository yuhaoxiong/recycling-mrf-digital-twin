/**
 * 时间轴的纯逻辑部分（与组件分离，方便测试直接锁住）。
 */

/** 一行标签的高度（px）与单字宽度估算（9px 字号下的中日韩字符约 9px 宽，再加左右内边距）。 */
export const LABEL_ROW_HEIGHT = 13;
export const LABEL_CHAR_WIDTH = 9;
export const LABEL_PADDING = 10;
/** 同一行内两个标签之间至少留出的空隙（px）。 */
export const LABEL_GAP = 6;
/** 时间轴宽度还未知时（首帧、无障碍环境）使用的保守估算宽度，宁可多占一行也不让标签叠字。 */
export const FALLBACK_TRACK_WIDTH = 560;

/** 班次里程碑，用作刻度，让客户可以直接跳到关键步骤。 */
export const TIMELINE_MILESTONES: { at: number; label: string }[] = [
  { at: 0, label: '进货车辆入场' },
  { at: 15, label: '塑料来料上线' },
  { at: 20, label: '首次光选分选' },
  { at: 24, label: '纺织来料上线' },
  { at: 39, label: '首件打包' },
  { at: 55, label: '首件成品装车' },
  { at: 108, label: '转运车离场' },
  { at: 118, label: '出货过磅' },
];

export interface MilestoneLabelSpan {
  row: number;
  left: number;
  right: number;
}

/**
 * 把里程碑标签分配到若干行：同一行内任意两个标签的横向占位不重叠。
 * 15/20/24 s 三个里程碑在 130 s 的班次里相距不到 3%，单行排布必然互相压字，
 * 因此按「第一个放得下的行」贪心分配，行号再交给 CSS 做纵向错行。
 */
export function layoutMilestoneLabels(
  marks: readonly { at: number; label: string }[],
  duration: number,
  trackWidth: number,
): MilestoneLabelSpan[] {
  const width = trackWidth > 0 ? trackWidth : FALLBACK_TRACK_WIDTH;
  const rowRightEdges: number[] = [];
  return marks.map((mark) => {
    const halfLabel = (mark.label.length * LABEL_CHAR_WIDTH + LABEL_PADDING) / 2;
    const center = duration > 0 ? (mark.at / duration) * width : 0;
    const left = center - halfLabel;
    let row = rowRightEdges.findIndex((rightEdge) => rightEdge + LABEL_GAP <= left);
    if (row === -1) row = rowRightEdges.length;
    rowRightEdges[row] = center + halfLabel;
    return { row, left, right: center + halfLabel };
  });
}
