import { ZoneData } from './MapZone.types';

export interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  children?: React.ReactNode;
  loadedZone?: ZoneData | null;
  onNavigate: (zone: ZoneData) => void;
}
