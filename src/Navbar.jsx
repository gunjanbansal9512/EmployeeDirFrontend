import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

function Navbar() {
	const useStyles = makeStyles((theme) => ({
		appbar: {
			background: "white",
		},
		toolBar: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-end",
		},
		icons: {
			fontSize: "large",
		},
	}));
	const classes = useStyles();

	return (
		<AppBar position="static" className={classes.appbar}>
			<Toolbar className={classes.toolBar}>
				<Typography variant="h5">Welcome admin</Typography>

				<IconButton>
					<ExitToApp fontSize="large" />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
