Welcome to the Portfolio of Gavin McFarland.


## Articles

<Posts page="posts" />

## Projects

<Posts page="projects" @content="handleData($event)" />


<div class="post" v-for="child in children">
{{ child.title }}
</div>


<script>
export default {
    data() {
        return {
            children: []
        }
    },
    methods: {
  	    handleData: function(e) {
            // console.log(e)
            this.children = e
            console.log(this.children)
        }
    }
}
</script>