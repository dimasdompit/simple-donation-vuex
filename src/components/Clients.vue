<template>
  <div>
    <div class="form-group">
      <label for="">Jenis Bantuan</label>
      <select
        class="form-control"
        @change="$emit('select-bantuan', $event.target.value)"
      >
        <option value="">Pilih Bantuan</option>
        <option v-for="row in listBantuan" :key="row.id" :value="row.name">
          {{ row.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clients',
  computed: {
    listBantuan () {
      return this.$store.state.clients.listBantuan
    }
  }
}
</script>

<style>
</style>
