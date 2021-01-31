import React, { useState, useEffect } from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormControl,
	Grid,
	TextField,
} from "@material-ui/core";
import axios from "axios";
import useStyles from "./style";
function Updatepopup(props) {
	const { title, openPopup, setOpenPopup, empid, data } = props;

	const [details, setDetails] = useState({
		department: "",
		designation: "",
		empemail: "",
		employeeph: "",
	});
	const [error, setError] = useState("");

	const classes = useStyles();

	useEffect(() => {
		setDetails(data);
	}, [data]);
	const url =
		"https://employeedirectorybackend.herokuapp.com/UpdateEmployee.php?data=";
	const handleYes = () => {
		const data = JSON.stringify(details);
		if (checkDetails()) {
			updateEmployee(url + data + "&empid=" + empid);
		}
	};
	const handleNo = () => {
		setError("");
		setOpenPopup(false);
		//console.log("no");
	};

	const handleInput = (event) => {
		const value = event.target.value;
		const name = event.target.name;
		setDetails((prevalue) => {
			if (name === "dept") {
				return {
					department: value,
					designation: prevalue.designation,
					empemail: prevalue.empemail,
					employeeph: prevalue.employeeph,
				};
			} else if (name === "desg") {
				return {
					department: prevalue.department,
					designation: value,
					empemail: prevalue.empemail,
					employeeph: prevalue.employeeph,
				};
			} else if (name === "email") {
				return {
					department: prevalue.department,
					designation: prevalue.designation,
					empemail: value,
					employeeph: prevalue.employeeph,
				};
			} else if (name === "phno") {
				return {
					department: prevalue.department,
					designation: prevalue.designation,
					empemail: prevalue.empemail,
					employeeph: value,
				};
			}
		});
	};

	function updateEmployee(url) {
		axios
			.post(url)
			.then((response) => {
				console.log(response);
				setOpenPopup(false);
				window.location.reload();
			})
			.catch((error) => {
				console.log(error);
			});
	}
	function checkDetails() {
		var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		var phoneno = /^\d{10}$/;
		var ph = details.employeeph + "";
		if (
			details.department === "" ||
			details.designation === "" ||
			details.empemail === "" ||
			details.employeeph === ""
		) {
			setError("All fields are required...");
			return false;
		} else if (!details.empemail.match(mailformat)) {
			setError("Please enter correct email id...");
			return false;
		} else if (!ph.match(phoneno)) {
			setError("Please enter correct phonenumber...");
			return false;
		}
		return true;
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
				<FormControl>
					<Grid className={classes.updateForm}>
						{error !== "" ? (
							<span
								style={{ fontSize: "0.8em", display: "block", color: "red" }}
							>
								!{error}
							</span>
						) : (
							<span
								style={{ fontSize: "0.8em", display: "none", color: "red" }}
							>
								!{error}
							</span>
						)}

						<TextField
							variant="outlined"
							label="Department"
							value={details.department}
							onChange={handleInput}
							className={classes.updateFormInput}
							name="dept"
						/>
						<TextField
							variant="outlined"
							label="Designation"
							value={details.designation}
							onChange={handleInput}
							className={classes.updateFormInput}
							name="desg"
						/>
						<TextField
							variant="outlined"
							label="Email Id"
							className={classes.updateFormInput}
							value={details.empemail}
							onChange={handleInput}
							name="email"
						/>
						<TextField
							variant="outlined"
							label="Phone Number"
							className={classes.updateFormInput}
							value={details.employeeph}
							onChange={handleInput}
							name="phno"
						/>
					</Grid>
				</FormControl>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleNo} color="primary" name="no">
					Cancel
				</Button>
				<Button onClick={handleYes} color="primary" autoFocus name="yes">
					Update
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default Updatepopup;
