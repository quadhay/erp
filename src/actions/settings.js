
import { settingConstants } from '../constants'

const setFontSize = size => ({ type: settingConstants.FONT_SIZE, size })

const sidebarVisibility = () => ({ type: settingConstants.SIDEBAR })

const setPinSidebar = () => ({ type: settingConstants.PIN_SIDEBAR })

const setMainHeader = () => ({ type: settingConstants.MAIN_HEADER })

const rightPanelVisibility = () => ({ type: settingConstants.RIGHT_PANEL })

const setTheme = theme => ({ type: settingConstants.THEME, theme })

const setSidebarBgImg = img => ({ type: settingConstants.SIDEBAR_BG_IMG, img })

const sidebarBgImgVisibility = () => ({ type: settingConstants.SIDEBAR_BG_IMG_VISIBILITY })

const borderRadiusVisibility = () => ({ type: settingConstants.BORDER_RADIUS })

export const settingActions = {
    setFontSize,
    sidebarVisibility,
    setPinSidebar,
    setMainHeader,
    rightPanelVisibility,
    setTheme,
    setSidebarBgImg,
    sidebarBgImgVisibility,
    borderRadiusVisibility
}
