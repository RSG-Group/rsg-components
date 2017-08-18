// @flow
import React from 'react'
import { omit } from 'lodash'
import { StyleSheet, css } from 'aphrodite-jss'

type Props = {
  children: Array<React.createElement>,
  opacity?: string, // eslint-disable-line react/no-unused-prop-types
  style?: Object,
  color?: string, // eslint-disable-line react/no-unused-prop-types
  labelType?: string,
};

export default function RSGLabel (props: Props) {
  const labelTypes: Object = {
    de: () => ('rgb(195, 195, 195)'),
    success: () => ('rgb(85, 180, 90)'),
    warn: () => ('rgb(255, 150, 25)'),
    danger: () => ('rgb(220, 75, 75)'),
    default: () => ('rgb(195, 195, 195)'),
    lime: () => ('rgb(20, 255, 0)'),
    aqua: () => ('rgb(0, 255, 255)')
  }

  let background = labelTypes[props.labelType]()

  const styles = StyleSheet.create({
    mainSpan: {
      color: props.color,
      fontFamily: 'monospace',
      fontSize: '.975em',
      padding: '.175em .3em',
      borderRadius: '.235em',
      background: background,
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
  labelType: 'de',
  color: 'rgb(10, 10, 10)',
  style: {},
  opacity: '1'
}
