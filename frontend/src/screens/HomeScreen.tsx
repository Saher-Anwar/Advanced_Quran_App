import { Button, StyleSheet, View } from "react-native"

const HomeScreen = () => {
    return (
        <View style={styles.page}>
            <View style={styles.buttonsContainer}>
                {/* List of buttons to navigate to different screens */}
                <Button title="ChapterList"/>
                <Button title="Settings"/>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'lightblue'
    },
    buttonsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 20,
        paddingVertical: 20,
        marginHorizontal: 50,
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },
})