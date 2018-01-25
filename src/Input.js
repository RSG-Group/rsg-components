// @flow
import React from 'react'
import { StyleSheet, css } from 'aphrodite-jss'

export default function Input (props: {}): React.createElement {
  const styles: Object = StyleSheet.create({
    inputStyle: {
      border: '1px solid rgb(128, 128, 128)',
      borderRadius: '3.5px',
      background: 'rgb(250, 250, 250)',
      height: '22.5px',
      paddingLeft: '4.5px',
      paddingRight: '3px'
    }
  })

  return (
    <input className={css(styles.inputStyle)} {...props} />
  )
}
