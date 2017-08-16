// @flow
// Imports go here.
import React from 'react'
import { omit } from 'lodash'
import { StyleSheet, css } from 'aphrodite-jss'

// Define the props and types our app needs.
type Props = {
  background?: string,
  color?: string,
  fontSize?: string,
  fontStyle?: string,
  opacity?: string,
  activeStyles?: string,
  style?: Object,
  children: Array<React.createElement>,
  border?: string,
  cursor?: string,
  sizes: string, // If you face a bug saying sizes is compulsory with flow, pass anything as sizes.
  // This was done to avoid errors later in the component.
};

// Create stylesheet of sizes.
const sizes: Object = {
  s: () => ({ padding: '1px 3px', fontSize: '12px' }),
  l: () => ({ padding: '5px 7px', fontSize: '18px' }),
  xl: () => ({ padding: '9px 11px', fontSize: '20px' }),
  xxl: () => ({ padding: '12px 14px', fontSize: '25px' }),
  default: () => ({ padding: '5px 4px', fontSize: '16px' })
}

// Finally.. our component.
export default function RSGButton (props: Props): React.createElement {
  let sizeId: string
  if (props.sizes) sizeId = props.sizes
  else { sizeId = 'default' }
  let padding = '5px 4px'
  if (sizeId !== 'default') padding = sizes[sizeId]().padding

  const activeStylesList: Object = {
    'popUps': {
      '&:hover': {
        boxShadow: '2px 2px 2px #888888'
      },
      '&:active': {
        position: 'relative',
        top: '1px',
        left: '1px',
        boxShadow: 'none'
      }
    },
    'clickAnimation': {
      transition: 'all .15s ease-out',
      '&:hover': {
        '-moz-filter': 'brightness(117%)',
        '-webkit-filter': 'brightness(117%)',
        '-o-filter': 'brightness(117%)',
        '-ms-filter': 'brightness(117%)',
        filter: 'brightness(117%)'
      },
      '&:active': {
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.35)'
      }
    }
  }

  let activeStylesContent: Object = props.activeStyles && activeStylesList[props.activeStyles]
  let divStyles: Object = props.activeStyles === 'clickAnimation' ? {
    '&:active': {
      background: props.background,
      '-moz-filter': 'brightness(132.5%)',
      '-webkit-filter': 'brightness(132.5%)',
      '-o-filter': 'brightness(132.5%)',
      '-ms-filter': 'brightness(132.5%)',
      filter: 'brightness(132.5%)'
    }
  } : {}

  const styles: Object = StyleSheet.create({
    mainButton: {
      border: props.border,
      borderRadius: '3px',
      background: props.background,
      color: props.color,
      opacity: props.opacity,
      padding,
      ...props.style,
      fontSize: props.fontSize ? props.fontSize : sizes[sizeId]().fontSize,
      fontStyle: props.fontStyle,
      ...activeStylesContent,
      cursor: props.cursor
    },
    div: {
      transition: 'all .2s ease-out',
      display: 'inline-block',
      ...divStyles
    }
  })

  const exclude = ['style', 'background', 'color', 'fontSize', 'fontStyle', 'opacity', 'sizes', 'activeStyles', 'cursor']

  return (
    <div className={css(styles.div)}>
      <button className={css(styles.mainButton)} {...omit(props, exclude)} >
        {props.children}
      </button>
    </div>
  )
}

// and sir default props.
RSGButton.defaultProps = {
  background: 'rgb(50, 120, 180)',
  color: 'white',
  opacity: '1',
  style: {},
  fontSize: undefined,
  fontStyle: undefined,
  sizes: 'default',
  cursor: 'default',
  border: '1px solid rgb(30, 100, 160)'
}
