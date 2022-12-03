<template>
  <ul>
    <ResourceItem
      v-for="resourceItem in storedResources"
      :key="resourceItem.id"
      :id="resourceItem.id"
      :title='resourceItem.title'
      :description='resourceItem.description'
      :link='resourceItem.link'
    />
  </ul>
</template>

<script>
import ResourceItem from './ResourceItem';

export default {
  inject: ['storedResources'],
  components: {
    ResourceItem
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  margin: auto;
  padding: 0;
  max-width: 40rem;
}
</style>
