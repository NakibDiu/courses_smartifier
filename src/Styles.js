import {makeStyles} from '@material-ui/styles'

const useStyle = makeStyles(() => ({
    headerContainer: {
        minWidth: "100%",
        background: "transparent linear-gradient(180deg, #028D9ADE 0%, #6F7A9CE4 45%, #8F749CE6 100%) 0% 0% no-repeat padding-box",
        minHeight: "344px",
        borderTop: "25px solid #000066",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    headertitle: {
        color: "white",
        fontWeight: "350"
    },
    container: {
        background: "transparent linear-gradient(180deg, #000066 0%, #032C73 57%, #00163B 100%, #003A67 100%) 0% 0% no-repeat padding-box"
    },
    course: {
        minWidth: "100%",
    },
    card: {
        display: "flex",
        justifyContent: "space-between",
        margin: "4% 2% 2% 2%",
        ["@media (max-width: 700px)"]: {
            flexWrap: "wrap"
          }
    },
    image: {
        flexBasis: "40%",
        ["@media (max-width: 700px)"]: {
            flexBasis: "100%"
        }
    },
    avatar: {
        width: "100%",
        height: "100%"
    },
    cardContent: {
        padding: "2.5% 2% 2% 5%",
        flexBasis: "60%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "white",
        textOverflow: "no-wrap",
        ["@media (max-width: 700px)"]: {
            alignItems: "center",
            padding: "10% 2% 10% 20%",
            // flexWrap: "wrap"
        },
        ["@media (max-width: 400px)"]: {
            alignItems: "center",
            padding: "10% 5% 10% 20%",
        }

    },
    list: {
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
        marginBottom: "3%"
    },
    courseTitle: {
        marginBottom: "44px",
        font: "normal normal 600 40px/22px Tahoma",
        color: "gray",
        lineHeight: "1.2em"
    },
    description: {
        marginBottom: "3%",
        font: "normal normal 600 22px/46px Tahoma",
        fontWeight: "500",
        color: "gray"
    },
    listIcon: {
        color: "#45fc03",
        height: "32px",
        width: "32px",
        marginRight: "1%"
    },
    listtext: {
        font: "normal normal 600 22px/60px Tahoma",
        color: "gray",
        fontWeight: "500"
    },
    courseButton: {
        width: "40%",
        padding: "16px",
        borderRadius: "30px",
        backgroundColor: "#0380A7",
        marginBottom: "3%",
        ["@media (max-width: 700px)"]: {
            width: "80%",
            padding: "8px",
            alignself: "center"
        }
    },
    bookingButton: {
        padding: "22px 30px",
        borderRadius: "50px",
        background: "#0380A7 0% 0% no-repeat padding-box",
        margin: "1.5% 0 2% 1.85%",
        ["@media (min-width: 400px)"]: {
            padding: "16px 15px"
        }
    }
}));

export default useStyle;