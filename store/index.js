import axios from 'axios'
import Cookie from 'js-cookie'

export const state = () => ({
  postsLoaded: [],
  token: null
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
  },
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  nuxtServerInit({commit}, context) {
    return axios.get('https://blog-4e585-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
      .then(({data}) => {
        // Get id
        const postsArray = []
        for (let key in data) {
          postsArray.push({...data[key], id: key})
        }
        // Res
        commit('setPosts', postsArray)
      })
      .catch(e => console.log(e))
  },
  authUser({commit}, authData) {
    const key = 'AIzaSyDSjF3RM-pzO7mo0OtP7IrSOR4n01Oftuo'
    return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`, {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    })
      .then(({data}) => {
        let token = data.idToken
        commit('setToken', token)
        // to local storage
        localStorage.setItem('token', token)
        // to local cookie
        Cookie.set('jwt-token', token)
        return data
      })
      .catch(e => console.log(e))
  },
  initAuth({commit}, req) {
    let token

    if (req) {
      if (!req.headers.cookie) return false
      const jwtCookie = req.headers.cookie
        .split(';')
        .find(t => t.trim().startsWith('jwt-token='))
      if (!jwtCookie) return false
      token = jwtCookie.split('=')[1]
    } else {
      token = localStorage.getItem('token')
      if (!token) return false
    }

    commit('setToken', token)
  },
  logoutUser({commit}) {
    commit('clearToken')
    localStorage.removeItem('token')
    Cookie.remove('jwt-token')
  },
  addPost({commit}, post) {
    return axios.post('https://blog-4e585-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', post)
      .then(({data}) => {
        commit('addPost', {...post, id: data.name})
      })
      .catch(e => console.log(e))
  },
  editPost({commit, state}, post) {
    return axios.put(`https://blog-4e585-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${post.id}.json?auth=${state.token}`, post)
      .then(({data}) => {
        commit('editPost', post)
      })
      .catch(e => console.log(e))
  },
  addComment({commit}, comment) {
    return axios.post('https://blog-4e585-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json', comment)
      .catch(e => console.log(e))
  }
}

export const getters = {
  getPostsLoaded(state) {
    return state.postsLoaded
  },
  checkAuthUser(state) {
    return state.token !== null
  }
}
