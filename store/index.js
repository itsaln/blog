import axios from 'axios'

export const state = () => ({
  postsLoaded: []
})

export const mutations = {
  setPosts(state, posts) {
    state.postsLoaded = posts
  },
  addPost(state, post) {
    state.postsLoaded.push(post)
  },
  editPost(state, postEdit) {
    const postIndex = state.postsLoaded.findIndex(post => post.id === postEdit.id)
    state.postsLoaded[postIndex] = postEdit
  }
}

export const actions = {
  nuxtServerInit({commit}, context) {
    return axios.get('https://blog-4e585-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
      .then(({data}) => {
        const postsArray = []

        for (let key in data) {
          postsArray.push({...data[key], id: key})
        }
        // Res
        commit('setPosts', postsArray)
      })
      .catch(e => console.log(e))
  },
  addPost({commit}, post) {
    return axios.post('https://blog-4e585-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', post)
      .then(({data}) => {
        console.log(data)
        commit('addPost', {...post, id: data.name})
      })
      .catch(e => console.log(e))
  },
  editPost({commit}, post) {
    return axios.put(`https://blog-4e585-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${post.id}.json`, post)
      .then(({data}) => {
        commit('editPost', post)
      })
      .catch(e => console.log(e))
  }
}

export const getters = {
  getPostsLoaded(state) {
    return state.postsLoaded
  }
}
