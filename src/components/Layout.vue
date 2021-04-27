<template>
  <div class='layout'>
    <Rooms :rooms='allRooms' class='layout__sidebar'></Rooms>
    <ChatLayout class='layout__chat'></ChatLayout>
  </div>
</template>

<script>
import Rooms from '@/components/Rooms.vue'
import ChatLayout from '@/components/ChatLayout.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Rooms,
    ChatLayout,
  },
  computed: {
    ...mapGetters([
      'allRooms',
    ]),
  },
  methods: {
    ...mapActions([ 'fetchRooms' ]),
  },
  mounted() {
    this.fetchRooms()
  },
}
</script>

<style scoped lang="scss">
.layout {
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-rows: 768px 1fr;
  height: 100%;
  &__sidebar {
    grid-row: 1 / -1;
  }
  &__chat {

  }
}


</style>
