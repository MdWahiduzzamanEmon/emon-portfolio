/* eslint-disable */
import { contactsGreen } from './images'
const colors = [
    '#FFC107',
    '#FF9800',
    '#FF5722',
    '#795548',
    '#607D8B',
    '#2196F3',
    '#009688',
    '#4CAF50',
    '#8BC34A',
    '#CDDC39',
    '#FFEB3B',
    '#FFC107',
    '#FF9800',
    '#FF5722',
    '#795548',
    '#607D8B',
    '#2196F3',
]

export const theLightTheme = {
    type: 'light',
    primary: colors[Math.floor(Math.random() * colors.length)],
    quaternary: '#EFF3F4',
    quaternaryLight: '#F7F9F9',
    secondary: '#ffffff',
    tertiary: '#0f1419',
    buttonColor: '#0F1419',
    contactsimg: contactsGreen,
    //color array make gradient random color
    bgGradient: `linear-gradient(90deg, ${colors[Math.floor(Math.random() * colors.length)]} 0%, ${colors[Math.floor(Math.random() * colors.length)]} 100%)`,
}

export const theDarkTheme = {
    type: 'dark',
    primary: colors[Math.floor(Math.random() * colors.length)],
    quaternary: '#1E2732',
    quaternaryLight: '#8b98a5',
    secondary: '#15202B',
    tertiary: '#EFF3F4',
    buttonColor: '#8B98A5',
    contactsimg: contactsGreen,
    //color array make gradient random color
    bgGradient: `linear-gradient(90deg, ${colors[Math.floor(Math.random() * colors.length)]} 0%, ${colors[Math.floor(Math.random() * colors.length)]} 100%)`,
}
