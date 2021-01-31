import React from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@material-ui/core";

import axios from "axios";
function DeletePopup(props) {
	const { title, openPopup, setOpenPopup, empid } = props;
	const handleYes = () => {
		setOpenPopup(false);
		console.log("yess");
		deleteEmployee(url + empid);
	};
	const handleNo = () => {
		setOpenPopup(false);
		console.log("no");
	};
	const url = "http://localhost/EmployeeDir/DeleteEmployee.php?empid=";
	// const url = "http://127.0.0.1:5000/delete?empid=";
	function deleteEmployee(url) {
		axios
			.get(url)
			.then((response) => {
				// console.log(response);
				window.location.reload();
			})
			.catch((error) => {
				console.log(error);
			});
	}
	return (
		<Dialog
			open={openPopup}
			onClose={handleNo}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					Are you sure you want to Delete? Once Deleted can not be revert!!!
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleNo} color="primary" name="no">
					Cancel
				</Button>
				<Button onClick={handleYes} color="primary" autoFocus name="yes">
					Delete
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default DeletePopup;
