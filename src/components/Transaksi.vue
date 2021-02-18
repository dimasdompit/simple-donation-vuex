<template>
  <div class="table-responsive">
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <td>#</td>
          <td>Donatur</td>
          <td>Jenis Bantuan</td>
          <td>Jumlah</td>
        </tr>
      </thead>
      <tbody>
        <!-- LOOPING LIST ARRAY DARI listTransaksi -->
        <tr v-for="(row, index) in listTransaksi" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ row.donatur }}</td>
          <td>{{ row.bantuan }}</td>
          <td>{{ row.jumlah }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Transaksi',
  computed: {
    // MENGGUNAKAN HELPER mapstate UNTUK MEMANGGIL MODULE transaksi
    ...mapState('transaksi', {
      // DIMANA DATA YANG AKAN DIAMBIL ADALAH STATE listTransaksi
      listTransaksi: (state) => state.listTransaksi
    })
  }
}
</script>

<style>
</style>
