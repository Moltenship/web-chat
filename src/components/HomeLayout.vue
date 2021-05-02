<template>
  <div class='layout'>
    <RoomList :rooms='allRooms' class='layout__sidebar'></RoomList>
    <ChatLayout class='layout__chat'></ChatLayout>
  </div>
</template>

<script>
import RoomList from '@/components/RoomList.vue'
import ChatLayout from '@/components/ChatLayout.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    RoomList,
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
  grid-template-rows: 1fr 1fr;
  height: 100%;
  &__sidebar {
    grid-row: 1 / -1;
  }
  &__chat {
    grid-row: 1fr;
  }
}


</style>
