import * as tap from 'tap'
import { add } from './lib/index.js'

tap.test('Pass thru', (t) => {
  t.equal(add(1, 2), 3)
  t.end()
})
