<template>
    <div class="admin-page">
        <section class="new-post">
            <AppButton @click="$router.push('/admin/new-post')">Create Post</AppButton>
        </section>
        <section class="existing-posts">
            <h1>Existing Posts</h1>
            <PostList :posts="loadedPosts" />
        </section>
    </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
import AppButton from '@/components/UI/AppButton'

export default {
  layout: 'admin',
    components: {
        PostList,
        AppButton
    },
asyncData(context) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
                loadedPosts: [
                    {
                        id:'1',
                        title: "First Post",
                        previewText: "Welcome to first Post",
                        thumbnail:
                        "https://image.freepik.com/free-vector/abstract-digital-technology-background-with-network-connection-lines_1017-25552.jpg?w=1380"
                    },
                    {
                        id:'2',
                        title: "Second Post",
                        previewText: "Welcome to Second Post",
                        thumbnail:
                        "https://image.freepik.com/free-vector/abstract-digital-technology-background-with-network-connection-lines_1017-25552.jpg?w=1380"
                    }
                ]
            });
        }, 1000);
        //reject(new Error())
      }).then(data => {
          return data
      })
      .catch(e => {
          context.error(new Error())
      })
  }
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>