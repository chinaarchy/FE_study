<template>
    <div class="swiper">
        <div class="viewport">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import SwiperItem from '@theme/components/SwiperItem'

    export default {
        name: "swiper",
        components: {
            SwiperItem
        },
        props: {
            value: {
                type: String
            }
        },
        data(){
          return {
              len: 0,
              currentSelectd: ''
          }
        },
        computed: {
            active () {
                return this.titles.indexOf(this.currentSelectd)
            }
        },
        watch: {
            value(){
                return this.showChild()
            }
        },
        mounted() {
            // console.log(this.$page)
            this.titles = this.$page.frontmatter.features.map(item => item.title)
            this.len = this.titles.length
            this.showChild()
            // this.run()
        },
        methods: {
            showChild(){
                this.currentSelectd = this.value || this.titles[0]
                this.$children.forEach(ele => {
                    this.$nextTick(() => {
                        ele.selected = this.currentSelectd
                    })
                })
            },
            run(){
                this.timer = setInterval(() => {
                    let index = this.active
                    let newIndex = index + 1
                    this.select(newIndex)
                }, 3000)
            },
            select (newIndex) {
                this.pre = this.active
                if (newIndex === this.len) newIndex = 0
                if (newIndex === -1) newIndex = this.len - 1
                this.$emit('input', this.titles[newIndex])
            }
        },
        beforeDestroy() {
            clearInterval(this.timer)
        }
    }
</script>

<style scoped>
    .swiper {
        margin: 0 auto;
        width: 100%;
        /*border: 1px solid black;*/
    }
    .viewport {
        position: relative;
        overflow: hidden;
        height: 150px;
    }
</style>
