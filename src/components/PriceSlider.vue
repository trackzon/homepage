<template>
  <div>

  </div>
</template>

<script>


// position will be between 0 and 100
const minp = 0
const maxp = 100

const shouldUseLog = (min, max) => (max / min >= 15) && (min >= 1000)

const linear = (min, max, pos) => min + (pos * (max - min) / 100)

const logarithmic = (min, max, pos) => {


  // The result should be between 100 an 10000000
  var minv = Math.log(min);
  var maxv = Math.log(max);

  // calculate adjustment factor
  var scale = (maxv-minv) / (maxp-minp);

  return Math.exp(minv + scale*(pos-minp));
}

// mapUp :: Number -> Number -> Number -> Number
const mapUp = min => max => pos => shouldUseLog(min, max)
    ? Math.round(logarithmic(min, max, pos))
    : linear(min, max, pos)

// round :: Number -> Number -> Number
// rounds sensible according to the distance between the two values
const round = nextVal => val => {
    const snapFactors = [1, 10, 100, 1000, 10000]
    const approxSnapFactor = nextVal - val
    const exactSnapFactor = closest(snapFactors)(approxSnapFactor)
    const roundTo = snapFactor => value => Math.round( value / snapFactor ) * snapFactor
    const rounded = roundTo(exactSnapFactor)(val)
    return rounded
}

const insertAt = index => array => item => array.splice( index, 0, item )

// group :: Int -> Int
const group = number => {
    const groupingPoints = [-9, -6, -3]
    var grouped = number.toString().split('')
    groupingPoints.map( point => {
        insertAt(point)(grouped)(' ')
    })
    return grouped.join('').trim()
}





// closest :: Array Int -> Int -> Int
const closest = of => number => of.reduce((prev, curr) => Math.abs(curr - number) < Math.abs(prev - number) ? curr : prev)
  import smartRange from './SmartRange'
  export default {
el: document.querySelector('#app'),
    components: { smartRange },
    data: {
        message: 'Hello World',
        value: 0
    },
    methods: {
        updateVal(newVal) { this.value = newVal }
    }
  }
</script>

<style scoped>

</style>