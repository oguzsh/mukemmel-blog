const styles = {

    // Container 
    containerStyle: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "0 auto",
        fontFamily: "Poppins",
    },

    // Header
    heroStyle: {
        marginTop: "30px",
        textAlign: "center"
    },
    titleStyle: {
        fontSize: "40px",
        fontWeight: 600,
        textTransform: "uppercase",
        textDecoration: "none",
        color: "black"
    },
    subtitleStyle: {
        color: "grey",
        textTransform: "uppercase",
        margin: "0"
    },

    //Social
    socialLinks: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "25px",
        padding: "0px"
    },

    socialItem: {
        color: "white",
        fontSize: "14px",
        backgroundColor: "#7c4dff",
        borderRadius: "5px",
        marginLeft: "10px",
        padding: "5px",
        textDecoration: "none"
    },

    // Posts
    postContainer: {
        marginTop: "40px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center",
        width: "100%"
    },
    postCard: {
        position: "relative",
        width: "250px",
        height: "300px",
        margin: "10px",
        padding: "15px",
        backgroundColor: "#263238",
        borderRadius: 10,
        overflow: "hidden",
        textDecoration: "none"
    },
    postTitle: {
        marginTop: "40px",
        fontSize: "20px",
        textAlign: "left",
        color: "white"
    },
    postText: {
        color: "white",
        marginTop: "-20px",
        fontSize: "15px",
        display: "block",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "wrap"

    },
    postDate: {
        position: "absolute",
        textAlign: "center",
        fontWeight: 600,
        color: "white",
        fontSize: "12px",
        borderRadius: 10,
        top: "10px",
        padding: "5px",
        backgroundColor: "#651fff"
    },
    links: {
        color: "#651fff",
        textDecoration: "none"
    },


};

export default styles;