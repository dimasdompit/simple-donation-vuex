const transaksi = {
  namespaced: true,
  state: {
    // DEFAULT DATA TRANSAKSI YANG AKAN DITAMPILKAN
    // PADA COMPONENT TRANSAKSI.VUE
    listTransaksi: [
      { id: 'TRX1P1', donatur: 'Dimas Mokodompit', bantuan: 'Gempa Lombok', jumlah: 20000000 },
      { id: 'TRX1P2', donatur: 'Farhana Isabella', bantuan: 'Banjir Bandang', jumlah: 5000000 },
      { id: 'TRX1P3', donatur: 'Khadafi Lazuardi', bantuan: 'Beasiswa Pendidikan', jumlah: 3000000 }
    ]
  },
  mutations: {
    // MENGUBAH STATE DENGAN
    ADD_DONASI: (state, payload) => {
      // MENAMBAHKAN DATA BARU KEDALAM ARRAY MENGGUNAKAN PUSH()
      state.listTransaksi.push(payload)
    }
  },
  actions: {
    save_donasi ({ commit, rootState }, payload) {
      // rootState BERARTI MENGAKSES STATE YANG TIDAK BERADA DALAM MODULES
      // DALAM HAL INI STATE isLoading YANG ADA DI DALAM FILE store.js
      rootState.isLoading = true
      setTimeout(() => {
        // MENGINSTRUKSIKAN PADA MUTATIONS TERKAIT UNTUK MENJALANKAN INSTRUKSINYA
        commit('ADD_DONASI', payload)
        // STATE isLoading DI MATIKAN KEMBALI
        rootState.isLoading = false
      }, 1500)
    }
  }
}

export default transaksi
