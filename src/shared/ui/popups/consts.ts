import { DropdownDirection } from '@/shared/types/ui';
import popupStyles from './styles/Popup.module.scss';

export const mapDirections: Record<DropdownDirection, string> = {
  'bottom left': popupStyles.bottomLeft,
  'bottom right': popupStyles.bottomRight,
  'top left': popupStyles.topLeft,
  'top right': popupStyles.topRight,
};
