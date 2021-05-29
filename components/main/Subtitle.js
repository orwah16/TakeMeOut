import { Text } from 'react-native'

const Subtitle = ({children, numberOfLines=2, size=15}) => {
    return (
            <Text numberOfLines={numberOfLines} style={{ fontWeight: 'bold', fontSize: size}}> 
            {children}
            </Text>
    )
}

export default Subtitle

