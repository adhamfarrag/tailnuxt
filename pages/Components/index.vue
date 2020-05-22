<template>
  <div class="min-h-screen font-sans bg-gray-400">
    
    <div class="flex items-center items-end justify-between pt-8 pb-6 mx-auto border-b-2 border-gray-600 w-custom" >
      <div class="text-2xl text-blue-400">Change Plan</div>
      <div>
        <a href class="text-blue-600 no-underline hover:underline">Cancel your plan</a>
      </div>
    </div>

    <div class="flex flex-row items-center justify-center mx-auto w-custom">
    <SelectablePlan plan-name="Hobby" plan-gigs="1" plan-dollars="5" v-model="activePlan" />
    <SelectablePlan plan-name="Growth" plan-gigs="5" plan-dollars="10" v-model="activePlan" />
    <SelectablePlan plan-name="Business" plan-gigs="10" plan-dollars="15" v-model="activePlan" />
    <SelectablePlan plan-name="Enterprise" plan-gigs="20" plan-dollars="20" v-model="activePlan" />
    </div>

  </div>
</template>

<script>
import SelectablePlan from '~/components/SelectablePlan.vue';
export default {
  head: {
    title: 'Tailwind CSS Examples'
  },
   data() {
    return {
      picked: 'Two',
      activePlan: '',
    }
  },
  components: {
      SelectablePlan
  }
};
</script>
