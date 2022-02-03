import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                      vuexContext.commit('setPosts', [
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
                          ]);
                          resolve();
                  }, 1000);
                });
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore