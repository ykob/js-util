# js-util

Private JavaScript utility functions created by [@ykob](https://github.com/ykob).

## Modules

| Module      | Summary                                                             |
| ----------- | ------------------------------------------------------------------- |
| debounce    | Thinning out a function running continuously.                       |
| MathEx      | My own expansions of the standard Math functions.                   |
| sleep       | Returning a blank Promise that has a timer for await.               |
| splitNum    | Returning a number array that is split an original number by digit. |
| zeroPadding | Returning a number string that is applied zero padding.             |

## Install

WIP

## Usage

### debounce

Thinning out a function running continuously.

```
import { debounce } from '@ykob/js-util'

const resize = () => {
  // ...
}
window.addEventListener('resize', debounce(resize, 100))
```

### MathEx

My own expansions of the standard Math functions.

```
import { MathEx } from '@ykob/js-util'
```

### sleep

Returning a blank Promise that has a timer for await.

```
import { sleep } from '@ykob/js-util'

const asyncFunc = async () => {
  await sleep(100)
}
```

### splitNum

Returning a number array that is split an original number by digit.

```
import { splitNum } from '@ykob/js-util'

const arr = splitNum(123) // toEqual [1, 2, 3]
```

### zeroPadding

Returning a number string that is applied zero padding.

```
import { zeroPadding } from '@ykob/js-util'

const num1 = zeroPadding(1, 2) // toBe '01'
const num2 = zeroPadding(123, 6) // toBe '000123'
```