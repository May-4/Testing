import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles((theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.bgColor,
        alignItems: "center",
        marginBottom: 70
    },
    modalcontainer: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: theme.colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: theme.colors.black,
        shadowOffset: {
            width: 0,
            height: 9,
        },
        width: '100%',
        shadowOpacity: 0.55,
        shadowRadius: 12.35,
        elevation: 19,
    },
    detailSection: {
        width: "100%",
        alignItems: "center",
        marginTop: 35,
        paddingHorizontal: 20,
    },
    headerContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 12,
    },
    headerWrapper: {
        width: "100%",
        backgroundColor: theme.colors.white,
        shadowColor: theme.colors.brightGrey,
        // height:65,
        justifyContent: "center",
        shadowOffset: { width: 0, height: 1 },
        paddingVertical: 8,
        shadowOpacity: 0.2,
        shadowRadius: 1,
    },
    logo: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    headerTitle: {
        color: theme.colors.darkBlue,
        fontWeight: "bold",
        fontSize: 16,
    },
    title: {
        textAlign: "center",
        color: theme.colors.darkBlue,
        fontWeight: "500",
        fontSize: 14,
        marginBottom: 20,
    },
    listView: {
        width: "100%",
    },
    Cardcontainer: {
        // width: "100%",
        backgroundColor: theme.colors.white,
        padding: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        shadowColor: theme.colors.brightGrey,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        marginBottom: 15,
    },
    studentInfoContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 5,
    },
    backdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    image: {
        marginLeft: 3,
        marginRight: 20,
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    nameContainer: {
        width: "70%",
        justifyContent: 'center'
    },
    text: {
        color: theme.colors.darkBlue,
        marginTop: 3,
        fontWeight: "500",
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 8,
    },
    customHandleIndicator: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    customHandleLineWrapper: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20,
        marginBottom: 10,
    },
    handleLine: {
        width: 60,
        height: 5,
        marginLeft: 40,
        borderRadius: 3,
        alignSelf: 'center',
        backgroundColor: '#ccc'
    },
    closeBtn: {
        alignSelf: 'flex-end',
        paddingRight: 20,
        paddingTop: 10,
        marginBottom: 10,
        color: '#ccc'
    },
    titleTxt: {
        paddingTop: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    closeText:{
        color: '#333',
        letterSpacing: 1
    },
    emptyText:{
        fontSize: 16,
        color: theme.colors.primary,
        fontWeight: 'bold',
        marginTop: 10,
        letterSpacing: 1
    }
}) )

export default useStyles;
