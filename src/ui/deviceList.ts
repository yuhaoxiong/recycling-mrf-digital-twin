import type { DeviceId, DeviceStatus, LineGroup } from '../types';

export interface DeviceListItem {
  id: DeviceId;
  name: string;
  /** English equipment code, shown in the row so the list maps onto a real plant tag list. */
  abbr: string;
  group: LineGroup;
  process: string;
  status: DeviceStatus;
  statusLabel: string;
}

export const GROUP_LABEL: Record<LineGroup, string> = {
  plastic: '塑料瓶分拣线',
  textile: '纺织品分拣线',
  storage: '纸板 / 杂项存储',
  logistics: '车辆与叉车',
};

export const GROUP_ORDER: LineGroup[] = ['plastic', 'textile', 'storage', 'logistics'];
