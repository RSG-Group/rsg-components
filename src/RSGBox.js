// @flow
// Imports come here.
import React from 'react'
import { omit } from 'lodash'
import { StyleSheet, css } from 'aphrodite-jss'

// Define the types of our props.
type Props = {
  style?: {},
  children: Array<React.createElement>,
  color?: string,
  opacity?: string,
  width?: string,
  height: string,
  background?: string,
};

// Our little component.
export default function RSGBox (props: Props): React.createElement {
  // Create our styles.
  const styles: Object = StyleSheet.create({
    mainDiv: {
      color: props.color,
      height: props.height,
      opacity: props.opacity,
      background: props.background,
      padding: '0px 3px 0px 3px',
      fontFamily: 'Verdana, Geneva, sans-serif',
      width: props.width,
      ...props.style
    },
    mainSpan: {
      fontSize: '12px',
      verticalAlign: 'middle'
    }
  })

  return (
    <div className={css(styles.mainDiv)} {...omit(props, ['style'])}>
      <span className={css(styles.mainSpan)}>
        {props.children}
      </span>
    </div>
  )
}

// The default props.
RSGBox.defaultProps = {
  color: 'rgb(10, 10, 10)',
  opacity: '1',
  style: {},
  width: '95%',
  background: 'rgb(230, 230, 230)',
}
