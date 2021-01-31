import React, { useState } from "react";
import useStyles from "./style";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import {
	Dialog,
	DialogContent,
	DialogActions,
	Button,
	DialogTitle,
} from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
function AddNewEmployee(props) {
	const classes = useStyles();
	const [details, setDetails] = useState({
		empid: "",
		empname: "",
		department: "",
		designation: "",
		empemail: "",
		employeeph: "",
		joiningdate: "2020-01-24",
	});
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
		window.location.reload();
	};
	const handleForm = (event) => {
		event.preventDefault();
		if (checkDetails()) {
			console.log("form to be submitted");
			const data = JSON.stringify(details);
			addEmployee(url + data);
		}
	};
	const handleInput = (event) => {
		const value = event.target.value;
		const name = event.target.name;
		setDetails((prevalue) => {
			if (name === "empid") {
				return {
					empid: value,
					empname: prevalue.empname,
					department: prevalue.department,
					designation: prevalue.designation,
					empemail: prevalue.empemail,
					employeeph: prevalue.employeeph,
					joiningdate: prevalue.joiningdate,
				};
			} else if (name === "joiningdate") {
				return {
					empid: prevalue.empid,
					empname: prevalue.empname,
					department: prevalue.department,
					designation: prevalue.designation,
					empemail: prevalue.empemail,
					employeeph: prevalue.employeeph,
					joiningdate: value,
				};
			} else if (name === "empname") {
				return {
					empid: prevalue.empid,
					empname: value,
					department: prevalue.department,
					designation: prevalue.designation,
					empemail: prevalue.empemail,
					employeeph: prevalue.employeeph,
					joiningdate: prevalue.joiningdate,
				};
			} else if (name === "dept") {
				return {
					empid: prevalue.empid,
					empname: prevalue.empname,
					joiningdate: prevalue.joiningdate,
					department: value,
					designation: prevalue.designation,
					empemail: prevalue.empemail,
					employeeph: prevalue.employeeph,
				};
			} else if (name === "desg") {
				return {
					empid: prevalue.empid,
					empname: prevalue.empname,
					joiningdate: prevalue.joiningdate,
					department: prevalue.department,
					designation: value,
					empemail: prevalue.empemail,
					employeeph: prevalue.employeeph,
				};
			} else if (name === "email") {
				return {
					empid: prevalue.empid,
					empname: prevalue.empname,
					joiningdate: prevalue.joiningdate,
					department: prevalue.department,
					designation: prevalue.designation,
					empemail: value,
					employeeph: prevalue.employeeph,
				};
			} else if (name === "phno") {
				return {
					empid: prevalue.empid,
					empname: prevalue.empname,
					joiningdate: prevalue.joiningdate,
					department: prevalue.department,
					designation: prevalue.designation,
					empemail: prevalue.empemail,
					employeeph: value,
				};
			}
		});
	};
	const [error, setError] = useState("");
	function checkDetails() {
		var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		var phoneno = /^\d{10}$/;
		var ph = details.employeeph + "";
		if (
			details.department === "" ||
			details.designation === "" ||
			details.empemail === "" ||
			details.employeeph === "" ||
			details.empname === "" ||
			details.empid === ""
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
		setError("");
		return true;
	}
	// const url = "http://127.0.0.1:5000/addEmployee?data=";
	const url =
		"https://employeedirectorybackend.herokuapp.com/CreateEmployee.php?data=";
	function addEmployee(url) {
		axios
			.post(url)
			.then((response) => {
				console.log(response.data.message);

				if (response.data.message !== "sucess") {
					console.log(response.data);
					setError(response.data.message);
				} else {
					handleClickOpen();
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}
	return (
		<div>
			<form onSubmit={handleForm} className={classes.form}>
				<div className="form-group">
					<TextField
						type="text"
						className="form-control"
						id="empid"
						label="Employee ID"
						name="empid"
						onChange={handleInput}
					/>
				</div>
				<div className="form-group">
					<TextField
						type="text"
						className="form-control"
						id="name"
						label="Name"
						name="empname"
						onChange={handleInput}
					/>
				</div>
				<div className="form-group">
					<TextField
						type="text"
						className="form-control"
						id="email"
						label="Email"
						name="email"
						onChange={handleInput}
					/>
				</div>
				<div className="form-group">
					<TextField
						type="text"
						className="form-control"
						id="phone"
						label="Mobile Number"
						name="phno"
						onChange={handleInput}
					/>
				</div>
				<div className="form-group">
					<TextField
						type="text"
						className="form-control"
						id="department"
						label="Department"
						name="dept"
						onChange={handleInput}
					/>
				</div>
				<div className="form-group">
					<TextField
						type="text"
						className="form-control"
						id="designation"
						label="Designation"
						name="desg"
						onChange={handleInput}
					/>
				</div>
				<div className="form-group">
					<TextField
						id="date"
						label="Date of Joining"
						type="date"
						defaultValue="2020-01-24"
						className={classes.textField}
						InputLabelProps={{
							shrink: true,
						}}
						name="joiningdate"
						onChange={handleInput}
					/>
				</div>
				<div className="form-row">
					<div className="form-group col-md-6">
						<button type="submit" className="btn btn-primary">
							Add
						</button>
					</div>
				</div>
				{error !== "" ? (
					<span style={{ fontSize: "1em", display: "block", color: "red" }}>
						{error}
					</span>
				) : (
					<span style={{ fontSize: "0.8em", display: "none", color: "red" }}>
						!{error}
					</span>
				)}
			</form>
			<Dialog
				onClose={handleClose}
				aria-labelledby="customized-dialog-title"
				open={open}
			>
				<DialogTitle id="customized-dialog-title">
					Employee Has been added
				</DialogTitle>
				<DialogContent dividers>
					<Typography gutterBottom>
						Employee has been added sucessfully...
					</Typography>
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleClose} color="primary">
						Ok
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default AddNewEmployee;
