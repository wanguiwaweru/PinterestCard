import './Card.css';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    button: {
        top: 0,
        right: 0,
        position: "absolute",
        padding: "10px",
        textAlign: "center",
        textTransform: "capitalize",
        margin: "10px 10px 0px 0px",
        borderRadius: "50px",
        fontWeight: "bold",
        backgroundColor: "red",
        color: "white",
        '&:hover': {
            backgroundColor: "maroon",
            color: "white",
        },
    },
    dropdown: {
        top: 0,
        left: 0,
        margin: "10px 0px 0px 10px",
        fontWeight: "bold",
        color: "white",
        position: "absolute",
        display: "flex",
    },

    website: {
        bottom: 0,
        left: 0,
        position: "absolute",
        textTransform: "lowercase",
        fontWeight: "bold",
        margin: "0px 0px 10px 10px",
        borderRadius: "50px",
        backgroundColor: "white",
        color: "black",
        '&:hover': {
            backgroundColor: "white",
            color: "black",
        }

    },
    dots: {
        backgroundColor: "white",
        color: "black",
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        position: "absolute",
        bottom: "10px",
        right: 0,
        margin: "0px 10px 10px 0px",
    },
});


function Card() {
    const classes = useStyles();
    return (
        <div className="card">
            <div className={classes.dropdown}>
                <div >Cars</div>
                <div><KeyboardArrowDownIcon /></div>
            </div>
            <Button variant="contained" className={classes.button}>Save</Button>
            <img src={"https://i.pinimg.com/564x/4b/49/ab/4b49ab2098e3e39ad29329a91d5129ba.jpg"} alt="Rangerover" />
            <div> <Button variant="outlined" className={classes.website}>elegancia.com</Button> </div>

            <div><MoreHorizIcon className={classes.dots} /></div>
        </div >

    );
}
export default Card;
