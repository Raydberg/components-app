import { TextInputProps, TextInput, useColorScheme } from 'react-native'
interface Props extends TextInputProps {
    className?: string,
    colorPlaceholder?: string
}

const ThemedTextInput = ({ className, colorPlaceholder, ...rest }: Props) => {
    const colorScheme = useColorScheme()

    const placeholderColor = colorPlaceholder
        ? colorPlaceholder
        : colorScheme === 'dark'
            ? 'rgba(255, 255, 255, 0.5)'
            : 'rgba(0, 0, 0, 0.5)'


    return (
        <TextInput
            placeholderTextColor={placeholderColor}
            className='py-4 px-2 text-black dark:text-white'
            {...rest}
        />
    )
}

export default ThemedTextInput
