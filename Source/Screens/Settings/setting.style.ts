import { StyleSheet } from 'react-native';

const makeStyles = (theme: any) => {
    // const { colors } = theme;
    return StyleSheet.create({
        settingConatiner: {
            flex: 1,
            flexDirection: "column",
            padding: 10,
        },
        subSettings: {
            alignItems: "flex-start",
            borderWidth: 1,
            borderColor: theme.colors.separator,
            marginVertical: 10,
            padding: 20,
            borderRadius: 8,
            backgroundColor: theme.colors.separator,
            elevation: 20,
        },
        logoutBtn: {
            alignItems: "center",
            justifyContent: "center",
        },
    });
};

export default makeStyles;
