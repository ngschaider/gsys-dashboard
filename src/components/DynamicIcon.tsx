import { IconBaseProps, IconType } from "react-icons/lib";
import { SiProxmox, SiPortainer } from "react-icons/si";
import { CgScreen } from "react-icons/cg";
import { SiNginx } from "react-icons/si";
import { BsKeyFill } from "react-icons/bs";

export enum IconName {
	None = "None",
	SiProxmox = "SiProxmox",
	CgScreen = "CgScreen",
	SiPortainer = "SiPortainer",
	SiNginx = "SiNginx",
	BsKeyFill = "BsKeyFill",
}

const getIcon = (iconName: IconName): null|IconType => {
	if(iconName === IconName.SiProxmox) {
		return SiProxmox;
	} else if(iconName === IconName.CgScreen) {
		return CgScreen;
	} else if(iconName === IconName.SiPortainer) {
		return SiPortainer;
	} else if(iconName === IconName.SiNginx) {
		return SiNginx;
	} else if(iconName === IconName.BsKeyFill) {
		return BsKeyFill;
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