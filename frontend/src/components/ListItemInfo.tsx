import { StyleSheet, Text, View } from "react-native"

export interface ListItemProps {
    name: string,
    revelationType: string,
    numOfVerses: number,
    translation: string
}

const ListItemInfo = ({name, revelationType, numOfVerses, translation}: ListItemProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.subInfo}>{revelationType} | {numOfVerses} verses</Text>
        </View>
    )
}

export default ListItemInfo

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    nameText: {
        fontSize: 24,
    },
    subInfo: {
        fontStyle: 'italic',
    }
})