# js-util

Private JavaScript utility functions created by [@ykob](https://github.com/ykob).

## Modules

| Module        | Summary                                                             |
| ------------- | ------------------------------------------------------------------- |
| `debounce`    | Thinning out a function running continuously.                       |
| `MathEx`      | My own expansions of the standard Math functions.                   |
| `sleep`       | Returning a blank Promise that has a timer for await.               |
| `splitNum`    | Returning a number array that is split an original number by digit. |
| `zeroPadding` | Returning a number string that is applied zero padding.             |

## Install

WIP

## Usage

### `debounce(callback: (event: unknown) => void, duration: number): ((event?: unknown) => void)`

Thin out a function running continuously.

```
import { debounce } from '@ykob/js-util'

const resize = () => {
  // ...
}
window.addEventListener('resize', debounce(resize, 100))
```

### `MathEx`

My own expansions of the standard Math functions.

```
import { MathEx } from '@ykob/js-util'
```

### `sleep`

### `sleep(delay: number): Promise<void>`

Return `Promise<void>` that awaits for the time `delay`.

```
import { sleep } from '@ykob/js-util'

const asyncFunc = async () => {
  await sleep(100)
}
```

### `splitNum(num: number): number[]`

Return a number array that is split `num` by `digit`.

```
import { splitNum } from '@ykob/js-util'

const arr = splitNum(123) // toEqual [1, 2, 3]
```

### `zeroPadding(num: number, digit: number): string`

Return a number string that is applied "Zero Padding" to `num`.  
Defined the digits of "Zero Padding" by `digit`.

```
import { zeroPadding } from '@ykob/js-util'

const num1 = zeroPadding(1, 2) // toBe '01'
const num2 = zeroPadding(123, 6) // toBe '000123'
```
