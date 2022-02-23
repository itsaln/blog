<template>
  <no-ssr>
    <commentTable :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']">
      <tbody slot="tbody">
      <tr v-for="comment of comments" :key="comment.name">
        <td><span>{{ comment.name }}</span></td>
        <td><span>{{ comment.text }}</span></td>
        <td>
          <span v-if="comment.publish" class="status true">Publish</span>
          <span v-else class="status false">Hidden</span>
        </td>
        <td><span @click="changeComment(comment)" class="link">Change Status</span></td>
        <td><span @click="deleteComment(comment.id)" class="link">Delete</span></td>
      </tr>
      </tbody>
    </commentTable>
  </no-ssr>
</template>

<script>
  import axios from 'axios'
  import commentTable from '@/components/Admin/CommentTable'

  export default {
    name: 'index',
    layout: 'admin',
    components: {commentTable},
    data() {
      return {
        comments: []
      }
    },
    mounted() {
      this.loadComments()
    },
    methods: {
      loadComments() {
        axios.get('https://blog-4e585-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json')
          .then(({data}) => {
            let commentsArray = []
            Object.keys(data).forEach(key => {
              const comment = data[key]
              commentsArray.push({...comment, id: key})
            })
            this.comments = commentsArray
          })
      },
      changeComment(comment) {
        comment.publish = !comment.publish
        axios.put(`https://blog-4e585-default-rtdb.asia-southeast1.firebasedatabase.app/comments/${comment.id}.json`, comment)
      },
      deleteComment(id) {
        axios.delete(`https://blog-4e585-default-rtdb.asia-southeast1.firebasedatabase.app/comments/${id}.json`)
          .then(({data}) => this.loadComments())
      }
    }
  }
</script>

<style scoped>

</style>
