import { DropdownMenuProps } from "@components/ui";
import { Side } from "../common-types";
// / - renderDropdown?: () => ReactNode;
// - data?: Array {
//                 name: string | ReactNode;
//                  type: 'label' | 'menu';
//                 to: string | ReactNode;
//                 children: Array {...위와 동일};
//                  hasSeparator: boolean; false;
//             }
export enum DropdownType {
  LABEL = "label",
  MENU = "menu",
  PARENT = "parent",
}

interface DefaultDropdownProps {
  isOpen?: boolean;
  offset?: number;
  placement?: Side;
}

interface RenderDropdownProps extends DefaultDropdownProps, DropdownMenuProps {
  renderDropdown: () => React.ReactNode;
  data?: null;
}
interface DataDropdownProps extends DefaultDropdownProps, DropdownMenuProps {
  data: DropdownItem[];
  renderDropdown?: null;
}

export interface DropdownItem {
  element: string | React.ReactNode;
  type?: DropdownType;
  to?: string | React.ReactNode;
  hasSeparator?: boolean;
  children?: DropdownItem[];
  offset?: number;
}

export type DropdownProps = RenderDropdownProps | DataDropdownProps;
