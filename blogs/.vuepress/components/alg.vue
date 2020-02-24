<template>
    <div>
        {{getdata()}}
    </div>
</template>

<script>
    export default {
        name: 'Home',

        components: { NavLink },

        computed: {
            data () {
                return this.$page.frontmatter
            },

            actionLink () {
                return {
                    link: this.data.actionLink,
                    text: this.data.actionText
                }
            }
        }
    }
</script>
