import currency from '../assets/currency.svg'
import lang from '../assets/lang.svg'
import check from '../assets/check-shield.svg'
import calendar from '../assets/calendar.svg'
import person from '../assets/person.svg'
import finland from '../assets/flag-fi.svg'
import france from '../assets/flag-fr.svg'
import germany from '../assets/flag-gr.svg'

export const links = [
    {
        label: 'Transport',
        to: '/',
    },
    {
        label: 'Tours',
        to: '/tours',
    },
    {
        label: 'Partners',
        to: '/partners',
    },
    {
        label: 'About B2B',
        to: '/aboutb2b',
    },
    {
        label: 'Contact',
        to: '/contact',
    },
]
export const buttons = [
    {
        label: 'Book today',
    },
    {
        label: 'Log in / Sign up',
    },
]

export const linksWithIcon = [
    { label: 'Currency', image: currency },
    { label: 'Language', image: lang },
]

export const fakeInfo = [
    {
        text: 'Request #779',
        icon: check,
    },
    {
        text: 'Trip starts: 18 feb - 11:00',
        icon: calendar,
    },
    {
        text: '45 people',
        icon: person,
    },
]
export const footerLeftLinks = [
    {
        label: 'Log in',
        to: '/.',
    },
    {
        label: 'Sign up',
        to: '/.',
    },
    {
        label: 'Partners',
        to: '/partners',
    },
    {
        label: 'About',
        to: '/aboutb2b',
    },
    {
        label: 'FAQ',
        to: '/.',
    },
]

export const footerRightLinks = [
    {
        label: 'Terms of service',
        to: '/.',
    },
    {
        label: 'Privacy Policy',
        to: '/.',
    },
    {
        label: 'Cookies',
        to: '/.',
    },
]

export const tripStages = [
    {
        isStepStarted: true,
        stepName: 'Waiting chauffeur',
        date: '14.06.2022',
        time: '12:32',
    },
    {
        isStepStarted: true,
        stepName: 'Chauffeur assigned',
        date: '14.06.2022',
        time: '12:32',
    },
    {
        isStepStarted: true,
        stepName: 'Started',
        date: '14.06.2022',
        time: '12:32',
    },
    {
        isStepStarted: false,
        stepName: 'Trip in progress',
        date: '',
        time: '',
    },
    {
        isStepStarted: false,
        stepName: 'Finished',
        date: '',
        time: '',
    },
]
export const flags = [finland, france, germany]

export const destinations = [
    {
        placeTitle: 'Riga international airport',
        placeAddress: 'P133, Mārupe, LV-1053',
        arrive: '',
        depart: '16:45',
    },
    {
        placeTitle: 'Lithuania airport',
        placeAddress: 'Road name, LT223, Lithuania',
        arrive: '17:20',
        depart: '19:45',
    },
    {
        placeTitle: 'Lithuania airport',
        placeAddress: 'Road name, LT223, Lithuania',
        arrive: '20:20',
        depart: '21:45',
    },
]
