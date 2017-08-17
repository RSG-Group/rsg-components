// @flow
// Imports go here.
import React from 'react'
import { omit } from 'lodash'
import { StyleSheet, css } from 'aphrodite-jss'

// Define the props and types our app needs.
type Props = {
  animationType?: string | boolean,
  background?: string,
  color?: string,
  fontSize?: string,
  fontStyle?: string,
  opacity?: string,
  style?: Object,
  children: Array<React.createElement>,
  border?: string,
  cursor?: string,
  sizes?: string,
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

  const animationStyling = {
    elevated: {
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
    ripple: {
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

  let divStyles: Object = props.animationType === 'ripple' ? {
    '&:active': {
      background: props.background,
      '-moz-filter': 'brightness(125%)',
      '-webkit-filter': 'brightness(125%)',
      '-o-filter': 'brightness(125%)',
      '-ms-filter': 'brightness(125%)',
      filter: 'brightness(125%)'
    }
  } : {}

  const styles: Object = StyleSheet.create(() => {
    let extraAnimationStyling = {}
    if (typeof props.animationType === 'string') {
      extraAnimationStyling = animationStyling[props.animationType]
    }
    return {
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
        ...extraAnimationStyling,
        cursor: props.cursor
      },
      div: {
        transition: 'all .2s ease-out',
        display: 'inline-block',
        ...divStyles
      }
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
  border: '1px solid rgb(30, 100, 160)',
  animationType: false
}
