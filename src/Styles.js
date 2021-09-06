//--for using material-ui built in styles --//
import { makeStyles } from "@material-ui/core/styles";

//--creating the styles --//
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),

    /* backgroundColor: 'black',
    color:"white",
    // padding: "5rem", */
  },
  icon: {
    marginRight: "20px",
  },
  buttons: {
    marginTop: "40px",
  },
  cardGrid: {
    padding: "20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "50.25%", //--16:9 (ratio)-- //
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default useStyles;
