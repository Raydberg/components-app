import { View, Text } from 'react-native'
import React from 'react'
import { TextProps } from 'react-native/Libraries/Text/Text'

type TextType = 'normal' | 'h1' | 'h2' | 'semi-bold' | 'link'

interface Props extends TextProps {
    className?: string,
    type?: TextType
}



const ThemedText = ({
    className,
    type,
    ...res
}: Props) => {
    return (

        <Text
            className={[
                'text-light-text dark:text-dark-text',
                type === 'normal' ? 'font-normal' : undefined,
                type === 'h1' ? 'text-3xl' : undefined,
                type === 'h2' ? 'text-xl' : undefined,
                type === 'semi-bold' ? 'font-semibold' : undefined,
                type === 'link' ? 'font-normal underline' : undefined,
                type === 'normal' ? 'font-normal' : undefined,
                className
            ].join(' ')}
            {...res} 
            />
    )
}

export default ThemedText