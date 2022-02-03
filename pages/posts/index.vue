<template>
    <div class="posts-page">
        <PostList :posts="loadedPosts" />
    </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";

export default {
    layout: "layout",
  components: {
    PostList
  },
  computed: {
      loadedPosts() {
          return this.$store.getters.loadedPosts
      }
    }
}
</script>

<style scoped>
.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>