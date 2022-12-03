<template>
  <BaseCard>
    <BaseButton
      @click="setActiveTab('StoredResources')"
      :mode="activeTab === 'StoredResources' ? '': 'flat'"
    >
      Stored Resources
    </BaseButton>
    <BaseButton
      @click="setActiveTab('ResourceForm')"
      :mode="activeTab === 'ResourceForm' ? '': 'flat'"
    >
      Add Resource
    </BaseButton>

    <keep-alive>
     <component :is="activeTab" />
    </keep-alive>
  </BaseCard>
</template>

<script>
  import StoredResources from '@/components/learning-resources/StoredResources';
  import ResourceForm from '@/components/learning-resources/ResourceForm';

export default {
  components: {
    StoredResources,
    ResourceForm
  },
  data() {
    return {
      activeTab: 'StoredResources',
      storedResources: [
        {
          id: 'jgt85',
          title: 'Official Guide',
          description: 'The official Vue documentation',
          link: 'https://vuejs.org'
        },
        {
          id: '4l2sJ',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.com'
        },
      ]
    }
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab
    },
    addNewResource(title, description, link) {
      const newResource = {
        id: Math.round(Math.random() * 9999),
        title,
        description,
        link,
      }
      this.storedResources.unshift(newResource);
      this.activeTab = 'StoredResources';
    },
    removeResourceById(id) {
      const resourceIndex = this.storedResources.find(resource => resource.id === id);
      this.storedResources.splice(resourceIndex, 1)
    },
  },

  provide() {
    return {
      storedResources: this.storedResources,
      addNewResource: this.addNewResource,
      removeResourceById: this.removeResourceById
    }
  },
};
</script>
<style scoped>

</style>
