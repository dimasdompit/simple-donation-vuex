<template>
  <div id="app">
    <div class="container" style="padding-top: 20px">
      <div class="row">
        <!-- Donasi Section -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Form Donasi</h3>
            </div>
            <div class="card-body">
              <Donatur @select-donatur="selectedDonatur" />
              <Clients @select-bantuan="selectedBantuan" />
              <!-- Form Input Donasi -->
              <div class="form-group">
                <label for="">Jumlah Donasi (Rp)</label>
                <input type="number" v-model="jumlah" class="form-control" />
              </div>
              <div class="form-group">
                <button
                  class="btn btn-primary btn-sm"
                  @click="submitDonasi"
                  :disabled="isLoading"
                >
                  {{ isLoading ? "Loading..." : "Donasi" }}
                </button>
              </div>
              <!-- End of Form Input Donasi -->
            </div>
          </div>
        </div>
        <!-- End of Donasi Section -->

        <!-- Total Donasi Section -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Donasi Terkumpul</h3>
            </div>
            <div class="card-body">
              <Transaksi />
            </div>
          </div>
        </div>
        <!-- End of Total Donasi Section -->
      </div>
    </div>
  </div>
</template>

<script>
import Donatur from './components/Donatur.vue'
import Clients from './components/Clients.vue'
import Transaksi from './components/Transaksi.vue'

export default {
  name: 'App',
  components: {
    Donatur,
    Clients,
    Transaksi
  },
  data () {
    return {
      donatur: '',
      clients: '',
      jumlah: 0
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  },
  methods: {
    // HANDLE EMIT DARI COMPONENT DONATUR
    selectedDonatur (val) {
      this.donatur = val
    },
    // HANDLE EMIT DARI COMPONENT CLIENTS
    selectedBantuan (val) {
      this.clients = val
    },
    submitDonasi () {
      // dispatch BERARTI MEMANGGIL FUNGSI YANG ADA DI ACTION
      // DIMANA FUNGSI TERSEBUT BERNAMA save_donasi
      // DAN BERADA DIDALAM MODULE transaksi
      // JADI CARA MEMANGGILNYA ADALAH namamodule/namafungsi
      this.$store.dispatch('transaksi/save_donasi', {
        id: Math.random().toString(36).substring(7),
        donatur: this.donatur,
        bantuan: this.clients,
        jumlah: this.jumlah
      })
    }
  }
}
</script>
