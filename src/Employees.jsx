import React, { useState } from "react";
import {
	Button,
	Table,
	Paper,
	TableRow,
	TableBody,
	TableCell,
	TableContainer,
} from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import { AddOutlined } from "@material-ui/icons";
import Employee from "./Employee";
import useStyles from "./style";
import Popup from "./Popup";
import AddNewEmployee from "./AddNewEmployee";
function Employees({ data }) {
	const classes = useStyles();
	const [openPopup, setOpenPopup] = useState(false);
	const handlePopup = () => {
		// setOpenUpdate(true);
		setOpenPopup(true);
	};

	return (
		<main className={classes.main}>
			<div className={classes.addDiv}>
				<Button
					variant="contained"
					color="primary"
					startIcon={<AddOutlined />}
					onClick={handlePopup}
					style={{
						backgroundColor: "#fcd1d1",
						color: "black",
						border: "1px soild black",
					}}
				>
					Add Employee
				</Button>
			</div>
			<>
				<TableContainer component={Paper}>
					<Table className={classes.table}>
						<TableHead>
							<TableRow>
								<TableCell className={classes.table_head}>
									Employee Id
								</TableCell>
								<TableCell className={classes.table_head} align="center">
									Employee Name
								</TableCell>
								<TableCell className={classes.table_head} align="center">
									Email
								</TableCell>
								<TableCell className={classes.table_head} align="center">
									Phone Number
								</TableCell>
								<TableCell className={classes.table_head} align="center">
									Designation
								</TableCell>
								<TableCell className={classes.table_head} align="center">
									Department
								</TableCell>
								<TableCell className={classes.table_head} align="center">
									Joining Date
								</TableCell>
								<TableCell className={classes.table_head} align="center">
									Update
								</TableCell>
								<TableCell className={classes.table_head} align="center">
									Delete
								</TableCell>
								<TableCell
									className={classes.table_head}
									align="center"
								></TableCell>
							</TableRow>
						</TableHead>

						<TableBody style={{ width: "100%" }}>
							{data.map((employee) => (
								<TableRow className={classes.table_body} key={employee.empid}>
									<Employee employee={employee} />
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</>
			<Popup
				openPopup={openPopup}
				setOpenPopup={setOpenPopup}
				title="Add new employee"
			>
				<AddNewEmployee />
			</Popup>
		</main>
	);
}

export default Employees;
