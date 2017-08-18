// @flow
import React from 'react'
import { omit } from 'lodash'
import { StyleSheet, css } from 'aphrodite-jss'

type Props = {
  children: Array<React.createElement>,
  opacity?: string,
  style?: Object,
  color?: string,
  labelType?: string,
};

export default function RSGLabel (props: Props) {
  const labelTypes: Object = {
    success: 'rgb(85, 180, 90)',
    warn: 'rgb(255, 150, 25)',
    danger: 'rgb(220, 75, 75)',
    default: 'rgb(195, 195, 195)',
    lime: 'rgb(20, 255, 0)',
    aqua: 'rgb(0, 255, 255)'
  }

  const styles = StyleSheet.create({
    mainSpan: {
      color: props.color,
      fontFamily: 'monospace',
      fontSize: '.975em',
      padding: '.175em .3em',
      borderRadius: '.235em',
      background: labelTypes[props.labelType],
      opacity: props.opacity,
      ...props.style
    }
  })

  return (
    <span className={css(styles.mainSpan)} {...omit(props, ['style', 'labelType'])}>
      {props.children}
    </span>
  )
}

RSGLabel.defaultProps = {
  labelType: 'default',
  color: 'rgb(10, 10, 10)',
  style: {},
  opacity: '1'
}
