import { Switch, SwitchProps, View, Platform } from 'react-native'
import React from 'react'
import ThemedText from './ThemedText'
import { useThemeColor } from '@/hooks/useThemeColor'

interface Props extends SwitchProps {
    text?: string
    className?: string
    value: boolean
    onValueChange: (value: boolean) => void
}

const isAndroid = Platform.OS === 'android'

const ThemedSwitch = ({ text, value, className, onValueChange }: Props) => {

    const switchActiveColor = useThemeColor({}, 'primary')
    return (
        <View
            className={`flex flex-row mx-2 items-center justify-between active:opacity-80 ${className}`}
            // onPress={() => onValueChange(!value)}
        >
            {
                text ? <ThemedText type='h2'>{text}</ThemedText> : <View />
            }
            <Switch
                onValueChange={onValueChange}
                value={value}
                thumbColor={isAndroid ? switchActiveColor : ''}
                ios_backgroundColor={value ? 'green' : 'red'}
                trackColor={{
                    false: 'grey',
                    true: switchActiveColor
                }}
            />
        </View>
    )

}

export default ThemedSwitch