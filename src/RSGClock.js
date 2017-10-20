// @flow
import * as React from 'react'
import { StyleSheet, css } from 'aphrodite-jss'

type Props = {
  size?: number
}

type State = {
  sec: number,
  min: number,
  hour: number
};

export default class Clock extends React.Component<Props, State> {
  static defaultProps = {
    size: 200
  };

  state = {
    sec: new Date().getSeconds() * 6,
    min: new Date().getMinutes() * 6,
    hour: new Date().getHours() * 30 + new Date().getMinutes() * 0.5
  }

  sine (p: number, r: number, deg: number) {
    const theta: number = Math.PI / 180 * deg
    return p + r * Math.sin(theta)
  }

  cosine (p: number, r: number, deg: number) {
    const theta: number = Math.PI / 180 * deg
    return p + r * Math.cos(theta)
  }

  componentWillMount = () => {
    setInterval(() => {
      this.setState({
        sec: new Date().getSeconds() * 6,
        min: new Date().getMinutes() * 6,
        hour: new Date().getHours() * 30 + new Date().getMinutes() * 0.5
      })
    }, 1000)
  };

  render () {
    const props: Object = this.props
    const size: number = props.size
    const state = this.state

    const sec: string = new Date().getSeconds().toString()
    const min: string = new Date().getMinutes().toString()
    const hour: string = new Date().getHours().toString()

    const styles: Object = StyleSheet.create({
      mainSpan: {
        fontSize: size / 2.5,
        fontFamily: 'Arial, Veranda',
        '-webkit-touch-callout': 'none',
        '-webkit-user-select': 'none',
        '-khtml-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        userSelect: 'none',
        cursor: 'default',
        ...props.style
      }
    })

    if (size < 95) {
      if (size <= 20) {
        styles.mainSpan.style.fontSize = 8.5
      }
      return (
        <span className={css(styles.mainSpan)}>
          {(hour.length < 2 ? '0' : '') + hour}:
          {(min.length < 2 ? '0' : '') + min}
          {props.seconds && ':' + ((sec.length < 2 ? '0' : '') + sec)}
        </span>
      )
    }

    // Needed variables
    const { cosine, sine } = this
    // r, cx & cy of the main circle (owr clock)
    const r: number = size / 2 - 5
    const cx: number = size / 2
    const cy: number = size / 2

    /* The angles & lines for the 'hands'
    (the secondhand, the minute hand & the hour hand) */
    /// line coords for the angle S (S - for seconds)
    const angleS: Object = {
      x1: cx,
      y1: cy,
      x2: sine(cx, size * 0.375, 180 - state.sec),
      y2: cosine(cy, size * 0.375, 180 - state.sec)
    }
    /// line coords for the angle M (M - for minutes)
    const angleM: Object = {
      x1: cx,
      y1: cy,
      x2: sine(cx, size * 0.35, 180 - state.min),
      y2: cosine(cy, size * 0.35, 180 - state.min)
    }
    /// line coords dor the angle H;
    const angleH: Object = {
      x1: cx,
      y1: cy,
      x2: sine(cx, size * 0.25, 180 - state.hour),
      y2: cosine(cy, size * 0.25, 180 - state.hour)
    }

    const width: number = size
    const height: number = size

    // Our beautiful component
    return (
      <div {...props}>
        <svg width={width} height={height}>
          {'Your device isn\'t support SVG. Please update your browser or OS...'}
          {/* The main circle */}
          <circle
            cx={cx}
            cy={cy}
            r={r}
            style={{ stroke: 'black', fill: 'rgba(250, 237, 205, 0.25)' }}
          />

          {/* The secondhand */}
          <line style={{ stroke: 'gray', strokeWidth: size / 100 }} {...angleS} />

          {/* The minute hand */}
          <line style={{ stroke: 'black', strokeWidth: size / 60 }} {...angleM} />
          <line
            x1={angleM.x2}
            y1={angleM.y2}
            x2={sine(cx, size * 0.25, 180 - (state.min - 4))}
            y2={cosine(cy, size * 0.25, 180 - (state.min - 4))}
            style={{ stroke: 'black', strokeWidth: size / 60 }}
          />
          <line
            x1={angleM.x2}
            y1={angleM.y2}
            x2={sine(cx, size * 0.25, 180 - (state.min + 4))}
            y2={cosine(cy, size * 0.25, 180 - (state.min + 4))}
            style={{ stroke: 'black', strokeWidth: size / 60 }}
          />

          {/* The hour hand */}
          <line style={{ stroke: 'brown', strokeWidth: size / 32 }} {...angleH} />

          {/* Others */}
          <circle
            cx={cx}
            cy={cy}
            r={size / 30}
            style={{ fill: 'blue', opacity: '0.975' }}
          />
          {new Array(12).fill('').map((ev, i) => {
            return (
              <line
                x1={sine(cx, r, 180 + i * 30)}
                y1={cosine(cy, r, 180 + i * 30)}
                x2={sine(cx, i % 3 === 0 ? r - size * 0.085 : r - size * 0.065, 180 + i * 30)}
                y2={cosine(cy, i % 3 === 0 ? r - size * 0.085 : r - size * 0.065, 180 + i * 30)}
                style={{ stroke: 'black', strokeWidth: '2px' }}
                key={i}
              />
            )
          })}
        </svg>
      </div>
    )
  }
}