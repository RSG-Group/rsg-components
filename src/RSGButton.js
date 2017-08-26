// @flow
// Imports go here.
import React from 'react'
import { omit } from 'lodash'
import { StyleSheet, css } from 'aphrodite-jss'

// Define the props and types our app needs.
type Props = {
  animationType?: string | false,
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
  s: { padding: '1px 3px', fontSize: '12px' },
  l: { padding: '5px 7px', fontSize: '18px' },
  xl: { padding: '9px 11px', fontSize: '20px' },
  xxl: { padding: '12px 14px', fontSize: '25px' },
  default: { padding: '5px 4px', fontSize: '16px' }
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
      position: 'relative',
      overflow: 'hidden',
      transform: 'translate3d(0, 0, 0)',
      '&:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, #FFF 10%, transparent 10%)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50%',
        transform: 'scale(10,10)',
        opacity: '0',
        transition: 'transform .5s, opacity 1s'
      },
      '&:active:after': {
        transform: 'scale(0,0)',
        opacity: '.2',
        transition: '0s'
      }
    }
  }

  const styles: Object = StyleSheet.create((() => {
    let extraAnimationStyling = {}
    if (props.animationType) {
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
      }
    }
  })())

  const exclude = ['style', 'background', 'color', 'fontSize', 'fontStyle', 'opacity', 'sizes', 'animationType', 'cursor', 'border']

  return (
    <button className={css(styles.mainButton)}{...omit(props, exclude)} >
      { props.children }
    </button>
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
