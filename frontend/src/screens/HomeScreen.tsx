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

const styles = StyleSheet.create({
    page: {
        display: 'flex'
    },
    buttonsContainer: {
        flexDirection: 'column',
        marginVertical: 10,
        marginHorizontal: 50,
    },
})