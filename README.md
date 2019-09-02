[![](https://badgen.net/bundlephobia/minzip/a11y-hooks)](https://bundlephobia.com/result?p=a11y-hooks@0.1.0)
[![](https://badgen.net/npm/v/a11y-hooks)](https://www.npmjs.com/package/a11y-hooks)

# React a11y hooks 🎣♿

A set of hooks to make it easy for everyone to make their site more accessible and improve their ux.

### table of contents:

- [useFocus](#useFocus)

## useFocus

- Programmatically focuses bound element on mount or whenever shouldFocus is set to true.
- check [here](https://codesandbox.io/embed/usefocus-example-ttpys) for example usage.

`const bind = useFocus({...arguments})`
`<input {...bind} />`

### Arguments

| Name        | Type                   | Required | Description                                                                |
| ----------- | ---------------------- | -------- | -------------------------------------------------------------------------- |
| shouldFocus | boolean                | false    | if provided the bound element will be focused whenever it switches to true |
| ref         | React.MutableRefObject | false    | if provided it will focus on the given ref instead of returning bind       |
