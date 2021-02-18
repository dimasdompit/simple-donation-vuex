<template>
  <div>
    <div class="form-group">
      <label for="">Donatur</label>
      <select
        class="form-control"
        @change="$emit('select-donatur', $event.target.value)"
      >
        <option value="">Pilih Donatur</option>
        <option
          v-for="donatur in listDonatur"
          :key="donatur.id"
          :value="donatur.name"
        >
          {{ donatur.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Donatur',
  computed: {
    // MEMBUAT COMPUTED PROPERTY DENGAN NAMA listDonatur()
    listDonatur () {
      // DATA DIAMBIL DARI STATE MODULE donatur
      return this.$store.state.donatur.listDonatur
    }
  }
}
</script>
