<template>
  <commentTable :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']">
    <tbody slot="tbody">
      <tr v-for="comment of comments" :key="comment.name">
        <td><span>{{ comment.name }}</span></td>
        <td><span>{{ comment.text }}</span></td>
        <td>
          <span v-if="comment.status" class="status true">Publish</span>
          <span v-else class="status false">Hidden</span>
        </td>
        <td><span @click="changeComment(comment.id)" class="link">Change Status</span></td>
        <td><span @click="deleteComment(comment.id)" class="link">Delete</span></td>
      </tr>
    </tbody>
  </commentTable>
</template>

<script>
  import commentTable from '@/components/Admin/CommentTable'

  export default {
    name: 'index',
    layout: 'admin',
    components: {commentTable},
    data() {
      return {
        comments: [
          {id: 1, name: 'Alex', text: 'Lorem ipsum dolor sit amet, consectetur', status: true},
          {id: 2, name: 'Charlie', text: 'Lorem ipsum dolor sit amet, consectetur', status: false}
        ]
      }
    },
    methods: {
      changeComment(id) {
        console.log(`Change comment id - ${id}`)
      },
      deleteComment(id) {
        console.log(`Delete comment id - ${id}`)
      }
    }
  }
</script>

<style scoped>

</style>
