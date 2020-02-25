<template>
    <transition>
        <div class="swiper-item" v-if="isShow" :class="reverse">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "SwiperItem",
        props: {
            title: {
                type: String,
                require: true
            }
        },
        computed: {
            isShow() {
                console.log()
                return this.title === this.selected
            }
        },
        data(){
            return {
                selected: '',
                reverse: ''
            }
        },
    }
</script>

<style scoped>
    .v-enter-active, .v-leave-active {
        transition: all 1s linear;
    }
    .v-enter {
        transform: translate(100%);
    }
    .v-leave-to {
        transform: translate(-100%);
    }
</style>
