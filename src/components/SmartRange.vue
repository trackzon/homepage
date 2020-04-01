<template>
      <div class='smart-slider'>
        {{ mode }}
        <label> {{ min }} <label>
        <input v-on:input='update($event)' type='range'>
        <label> {{ max }} <label>
    </div>
</template>


<script>

export default {
    props: ['min', 'max'],
    data() { return {
       mode: shouldUseLog(this.min, this.max) ? 'log' : 'lin'
    }},

    methods: {
        update(ev) {
            const pos = parseInt(ev.target.value)
            const nextPos = pos + 1
            const map = mapUp(this.min)(this.max)
            const val = map(pos)
            const nextVal = map(nextPos)

            this.$emit('change', group(round(nextVal)(val)) )
        }
    }
}
</script>

