import "@iconify/react";
import Icon, { IconifyIcon } from "@iconify/react";
import { useEffect, useState } from "react";

type UserSuppliedIconProps = {
	icon: string;
};

const UserSuppliedIcon = ({ icon: iconName }: UserSuppliedIconProps) => {
	const [icon, setIcon] = useState<IconifyIcon|null>(null);

	useEffect(() => {
		import("@iconify/icons-mdi/" + iconName)
			.then((obj) => {
				setIcon(obj);
			})
			.catch((err) => {
				console.error("Error while importing Icon: ");
				console.error(err);
				console.error("Maybe '" + iconName + "' is not a Material Design icon?");
			});
	}, [iconName]);

	return icon ? <Icon icon={icon} className="icon" /> : null;
};
export default UserSuppliedIcon;