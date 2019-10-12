import React from 'react'
import PropTypes from 'prop-types'
import CustomSwitch from '../helpers/customSwitch'
import { Schemes, BgImg } from './layout/Themes'

const Settings = ({ sidebar, pinSidebar, mainHeader, rightPanel, theme, sidebarBgImg, sidebarBg, borderRadius, setTheme, setSidebarBgImg, sidebarVisibility, borderRadiusVisibility, setPinSidebar, setMainHeader, sidebarBgImgVisibility, rightPanelVisibility }) => {
    
    return (
        <>
            <div className="row">
                <div className="form-group col-md-12">
                    <h3>Layout</h3>
                </div>

                <CustomSwitch label="Main Header" check={mainHeader} event={setMainHeader} />
                <CustomSwitch label="Sidebar" check={sidebar} event={sidebarVisibility} />
                <CustomSwitch label="Pin Sidebar" check={pinSidebar} event={setPinSidebar} />
                <CustomSwitch label="Right Pane" check={rightPanel} event={rightPanelVisibility} />
            </div>

            <hr />

            <Schemes theme={theme} event={setTheme} />
            <BgImg image={sidebarBgImg} event={setSidebarBgImg} />

            <div className="row">
                <CustomSwitch label="Background image" check={sidebarBg} event={sidebarBgImgVisibility} />
                <CustomSwitch label="Border radius" check={borderRadius} event={borderRadiusVisibility} />
            </div>
        </>    
    )
}

Settings.defaultProps = {
    sidebar: true,
	pinSidebar: false,
    mainHeader: true,
	rightPanel: true,
	theme: 'default-theme',
	sidebarBgImg: 'bg1',
	sidebarBg: true,
    borderRadius: false,
}

Settings.propTypes = {
    sidebar: PropTypes.bool,
    pinSidebar: PropTypes.bool,
    mainHeader: PropTypes.bool,
    rightPanel: PropTypes.bool,
    theme: PropTypes.string,
    sidebarBgImg: PropTypes.string,
    sidebarBg: PropTypes.bool,
    borderRadius: PropTypes.bool,
    sidebarVisibility: PropTypes.func.isRequired,
    setPinSidebar: PropTypes.func.isRequired,
    setMainHeader: PropTypes.func.isRequired,
    rightPanelVisibility: PropTypes.func.isRequired,
    setTheme: PropTypes.func.isRequired,
    setSidebarBgImg: PropTypes.func.isRequired,
    sidebarBgImgVisibility: PropTypes.func.isRequired,
    borderRadiusVisibility: PropTypes.func.isRequired,
}

export default Settings
