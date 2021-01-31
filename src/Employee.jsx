import React, { useState } from "react";
import { IconButton, Paper, TableCell } from "@material-ui/core";
import { EditOutlined, DeleteOutlineRounded } from "@material-ui/icons";
import Updatepopup from "./UpdatePopup";
import DeletePopup from "./DeletePopup";
import axios from "axios";
function Employee({ employee }) {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const [openUpdate, setOpenUpdate] = React.useState(false);
	const handleClickOpenUpdate = () => {
		getData(getUrl + employee.empid);
	};
	const [empDetails, setEmpDetails] = useState({
		department: "",
		designation: "",
		empemail: "",
		employeeph: "",
	});
	const getUrl = "http://localhost/EmployeeDir/GetUpdateEmployee.php?empid=";

	function getData(url) {
		console.log(url);
		axios
			.get(url)
			.then((response) => {
				//console.log(response.data[0]);
				setEmpDetails(response.data[0]);
				setOpenUpdate(true);
				// console.log(empDetails);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	return (
		<>
			<TableCell component="th" scope="row">
				{employee.empid}
			</TableCell>
			<TableCell align="right">{employee.empname}</TableCell>

			<TableCell align="right">{employee.empemail}</TableCell>
			<TableCell align="right">{employee.employeeph}</TableCell>

			<TableCell align="right">{employee.designation}</TableCell>
			<TableCell align="right">{employee.department}</TableCell>
			<TableCell align="right">{employee.joiningdate}</TableCell>

			<TableCell align="right">
				<IconButton aria-label="Edit" onClick={handleClickOpenUpdate}>
					<EditOutlined style={{ color: "#09015f" }} />
				</IconButton>
			</TableCell>
			<TableCell align="right">
				<IconButton aria-label="Delete" onClick={handleClickOpen}>
					<DeleteOutlineRounded style={{ color: "red" }} />
				</IconButton>
			</TableCell>
			{/* Delete Dialog */}
			<TableCell align="right">
				<DeletePopup
					openPopup={open}
					setOpenPopup={setOpen}
					empid={employee.empid}
					title="Are you sure??"
				/>
				<Paper>
					<Updatepopup
						openPopup={openUpdate}
						setOpenPopup={setOpenUpdate}
						empid={employee.empid}
						title="Are you sure??"
						data={empDetails}
					/>
				</Paper>
			</TableCell>
		</>
	);
}

export default Employee;
