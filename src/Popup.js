import React from "react";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	Typography,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import useStyles from "./style";
function Popup(props) {
	const classes = useStyles();
	const { title, children, openPopup, setOpenPopup } = props;
	return (
		<Dialog open={openPopup} maxWidth={"md"} fullWidth={true}>
			<DialogTitle>
				<div
					className={classes.addpopup}
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "flex-end",
						justifyContent: "space-between",
					}}
				>
					<Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
						{title}
					</Typography>
					<ClearIcon
						style={{ color: "red", fontSize: "40" }}
						onClick={() => {
							setOpenPopup(false);
						}}
					/>
				</div>
			</DialogTitle>
			<DialogContent dividers>{children}</DialogContent>
		</Dialog>
	);
}

export default Popup;
