import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "../config/config";
import { Device } from "../types/deviceTypes";

export function parseScreenWidth(width: number): Device {
    if (0 <= width && width < TABLET_BREAKPOINT) return Device.Mobile;
    if (TABLET_BREAKPOINT <= width && width < DESKTOP_BREAKPOINT) return Device.Tablet;
    return Device.Desktop;
}
