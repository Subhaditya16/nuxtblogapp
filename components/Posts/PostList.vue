<template>
  <section class="post-list">
    <PostPreview 
      id="1"
      thumbnail="https://image.freepik.com/free-vector/abstract-digital-technology-background-with-network-connection-lines_1017-25552.jpg?w=1380"
      title="Hello There"
      previewText="This is my first post" />
    <PostPreview 
      id="2"
      thumbnail="https://image.freepik.com/free-vector/abstract-digital-technology-background-with-network-connection-lines_1017-25552.jpg?w=1380"
      title="Hello There"
      previewText="This is my second post" />
    <PostPreview 
      id="3"
      thumbnail="https://image.freepik.com/free-vector/abstract-digital-technology-background-with-network-connection-lines_1017-25552.jpg?w=1380"
      title="Hello There"
      previewText="This is my third post" />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  }
}
</script>


<style scoped>

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

