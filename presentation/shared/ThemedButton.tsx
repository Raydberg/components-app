import { View, Text, Pressable, PressableProps } from 'react-native'
import React from 'react'


interface Props extends PressableProps {
    onPress: () => void,
    children: string,
    className?: string
}

const ThemedButton = ({ onPress, children, className }: Props) => {
    return (
        <Pressable
            className={`bg-light-primary dark:bg-dark-primary items-center rounded-xl px-6 py-2 active:opacity-80 ${className}`}
            onPress={onPress}
        >
            <Text className='text-white text-2xl'>
                {children}
            </Text>
        </Pressable>
    )
}

export default ThemedButton