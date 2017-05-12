---
title: transforming
layout: default
---
# Transforming
Let's view what's happening when you use rsg-components

rsg-components:
```babel
<RSGButton style={ANY-STYLES}>Click here</RSGButton>
```
React
```javascript
React.DOM.button(
    Object.assign(
        {style: RSGStyle}, 
        _.omit(this.props, ['style'])
    ), 
    this.props.children
)
```
> We using lodash
> https://lodash.com/

Link to file: https://github.com/RSG-Group/rsg-components/blob/master/lib/RSGButton.js

## The end HTML
```
<button sizes="ANY-SIZE" style="ANY-STYLES">Click here</button>
```

> You can view more info with React DevTools - https://github.com/facebook/react-devtools

![http://i.imgur.com/ICFUTpJ.png](http://i.imgur.com/ICFUTpJ.png)