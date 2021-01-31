import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
	root: {
		maxWidth: "100%",
	},
	main: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		padding: "10px",
	},
	media: {
		height: 0,
		paddingTop: "56.25%",
	},
	cardActionS: {
		dispaly: "flex",
		justifyContent: "flex-end",
	},
	cardContent: {
		display: "flex",
		justifyContent: "space-between",
	},

	addDiv: {
		margin: "10px",
		alignSelf: "flex-end",
	},
	updateForm: {
		padding: theme.spacing(3),
	},
	updateFormInput: {
		margin: theme.spacing(1),
	},
	form: {
		display: "flex",
		flexDirection: "column",
		margin: "auto",
		width: "80%",
	},
	addpopup: { marginTop: theme.spacing(2), minWidth: 120 },
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	},
	closeButton: {
		position: "absolute",
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},
	table: {
		minWidth: 650,
		fontWeight: 700,
		backgroundColor: "#f4f5db",
	},
	table_head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
		fontWeight: 700,

		fontSize: "17px",
	},
	table_body: {
		"&:nth-of-type(odd)": {
			backgroundColor: theme.palette.action.hover,
		},
		fontSize: 14,
		fontWeight: "bold",
	},
}));
