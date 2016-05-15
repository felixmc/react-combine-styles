# React Combine Styles

A simple javascript utility for conditionally combining react native styles.

Inspired by the `classnames` npm module found [here](https://github.com/JedWatson/classnames).


## Install

```
npm install react-combine-styles
```


## Usage

Compatible with both ES5 and ES6

```javascript
import { StyleSheet } from 'react-native'
import combineStyles from 'react-combine-styles'

const styles = StyleSheet.create({
  textInput: {
     ...
  },
  disabledTextInput: {
     ...
  },
  focussedTextInput: {
     ...
  },
})

...

class FancyTextInput extends Component {

  render() {
    const textStyles = combineStyles({
      textInput: true,
      disabledTextInput: this.props.isDisabled,
      focussedTextInput: this.props.isFocussed
    }, styles)
   
    return (
      <TexInput style={textStyles} />
    )
  }
  
}

```
