import React from 'react';
import classes from "./Title.module.sass";

interface IInputProps {
    children: React.ReactNode;
    tag?: "h1" | "h2" | "h3";
}

const Title = ({ tag="h2", children }: IInputProps) => {
    switch(tag) {
		case "h1":
			return <h1 className={classes.h1}>{children}</h1>;
		case "h2":
			return <h2 className={classes.h2}>{children}</h2>;
		case "h3":
			return <h3 className={classes.h3}>{children}</h3>;
		default:
			return <></>;
	}
}

export default Title