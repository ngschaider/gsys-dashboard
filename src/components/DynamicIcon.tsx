import React from "react";
import { IconBaseProps, IconType } from "react-icons/lib";
import { SiProxmox, CgScreen } from "react-icons/all";


export enum IconName {
	None = "None",
	SiProxmox = "SiProxmox",
	CgScreen = "CgScreen",
}

const getIcon = (iconName: IconName): null|IconType => {
	if(iconName === IconName.SiProxmox) {
		return SiProxmox;
	} else if(iconName === IconName.CgScreen) {
		return CgScreen;
	}

	return null;
}

type DynamicIconProps = IconBaseProps & {
	icon: IconName
};

const DynamicIcon = ({icon: iconName, ...rest}: DynamicIconProps) => {
	if(iconName === IconName.None) {
		return null;
	}

	const Icon = getIcon(iconName);

    return Icon ? <Icon {...rest} /> : null;
}
export default DynamicIcon;