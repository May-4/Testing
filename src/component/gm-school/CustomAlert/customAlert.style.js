import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles((theme) => ({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    iOSBackdrop: {
        backgroundColor: theme.colors.black,
        opacity: 0.3
    },
    androidBackdrop: {
        backgroundColor: "#232f34",
        opacity: 0.32
    },
    backdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    alertBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
    },
    alertView: {
        // alignItems: "center",
        backgroundColor: theme.colors.white,
        borderRadius: 10,
        paddingTop: 20,
        width: 250,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            height: 2,
            width: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    title: {
        alignItems: "center",
        // paddingBottom: 5,
        // borderBottomWidth: 1,
        // borderBottomColor: Color.lightGrey,
    },
    titleText: {
        color: theme.colors.darkBlue,
        fontSize: 18,
        fontWeight: "500",
    },
    message: {
        paddingTop: 10,
        paddingBottom: 17,
        paddingHorizontal: 20,
    },
    messageText: {
        textAlign: "center",
        color: theme.colors.darkBlue,
        fontSize: 14,
        fontWeight: "400",
    },
    touchableWrapper: {
        width: "50%",
        marginTop: 10,
        paddingVertical: 13,
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: theme.colors.lightGrey,
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    btnText: {
        color: theme.colors.primary,
        fontSize: 16,
    }
}))

export default useStyles
