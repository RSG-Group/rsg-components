/* eslint-disable react/prop-types */
// Import Components and React.
import React, { Component } from 'react'
// Please do not use the following lines in your code. Import RSGComponents from the module.
import { StyleSheet, css } from 'aphrodite-jss'
import { Button, Box, Label, Checkbox, Clock } from '../imports/rsg-components'

const FormBasic = (props) => {
  const styles = StyleSheet.create({
    inputStyle: {
      border: '1px solid rgb(128, 128, 128)',
      borderRadius: '3.5px',
      background: 'rgb(250, 250, 250)',
      height: '22.5px',
      paddingLeft: '4.5px',
      paddingRight: '3px'
    },
    seperator1: { height: '5px' },
    seperator2: { height: '7.5px' }
  })

  return (
    <div>
      Username: {/* */}
      <input className={css(styles.inputStyle)} name='user' type='text' key={1} onChange={e => props.onField1Change(e.target.value)} />
      <div className={css(styles.seperator1)} key={2} />
      Password: {/* */}
      <input className={css(styles.inputStyle)} name='password' type='password' key={3} onChange={e => props.onField2Change(e.target.value)} />
      <div className={css(styles.seperator2)} key={4} />
    </div>
  )
}

export default class Index extends Component {
  constructor () {
    super()
    this.state = { username: '', password: '', checked: false }
  }
  render () {
    const string = `Username in state: ${this.state.username}
Password in state: ${this.state.password}
Is RSGCheckbox checked: ${this.state.checked}`
    return (
      <div>
        <FormBasic
          onField1Change={e => this.setState({ username: e })}
          onField2Change={e => this.setState({ password: e })}
        />
        <Button onClick={this.handleClick}>Submit</Button>
        <br /><br />
        <Box width={300}>
          {string}
        </Box>
        <br />
        <Label labelType='success'>State successfully changed.</Label>
        <br /><br />
        <Checkbox checked={this.state.checked} large onChange={() => this.setState({ checked: !this.state.checked })} />
        <Clock size={100} style={{position: 'fixed', top: '10px', right: '5%'}} />
      </div>
    )
  }
}
