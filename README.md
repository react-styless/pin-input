# react-styless/pin-input

Simple pin input component for React without style.

### Installation

```
// with npm
$ npm install @react-styless/pin-input --save
```

### Usage

This is the basic usage of pin-input

```Javascript
import PinInput from '@react-styless/pin-input';
const App = () => {
  const handleComplete = (value: string) => {
    console.log(value);
  }
  return (
    <PinInput onComplete={handleComplete}>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </PinInput>
  );
}
```


| Attribute | Type | Description |
|--|--|--|
| children | ReactElement[] | |
| onComplete | (v: string) => void | |
