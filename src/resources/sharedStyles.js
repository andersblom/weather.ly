const sharedStyles = {
    color: {
        blue: "#2C69EE",
        fadedBlue: "#AFBCD3",
        brightGray: "#B4BBC7",
        white: "#FFFFFF",
    },
    
    font: "system, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Lucida Grande'",

    extends: {
        button: {
            backgroundColor: "transparent",
            padding: "1.2em 3.4em 1.2em 3.4em",
            border: "3px solid",
            textDecoration: "none",
            textTransform: "uppercase",
            fontSize: "14px",
            fontWeight: "bold",
            cursor: "pointer",
            borderRadius: "100px",
        },
        vh: {
            minusHeaderOnly: {
                height: "calc(100vh - 115px)", // 115 (Header: 90px height + 25px margin) * 2 to account for top/bottom
            },
            minusHeaderAndBottom: {
                height: "calc(100vh - 230px)", // 115 (Header: 90px height + 25px margin) * 2 to account for top/bottom
            }
        },
        
    }
}

export default sharedStyles;