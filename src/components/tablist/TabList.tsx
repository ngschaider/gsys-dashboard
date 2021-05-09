import { ReactNode } from "react";
import TabListItem from "./TabListItem";

export default ({ items }: { items?: ReactNode[] }) => {
	return <div>{items}</div>;
};
