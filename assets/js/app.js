const defaultWater = {
  status: 'Tersedia',
  desc: 'Pasokan air mencukupi untuk penyiraman dan kegiatan praktikum.',
  updated: 'Diperbarui 26 Oktober 2026, 07.30 WIB'
};

const defaultSubmissions = [
  {
    id: 'KJG-2026-024',
    submittedDate: '26 Okt 2026',
    visitDayDate: 'Kamis, 29 Okt 2026',
    visitDateFull: '29 Oktober 2026',
    time: '13.00–15.00 WIB',
    status: 'Menunggu',
    notePublic: 'Menunggu peninjauan jadwal dan ketersediaan pendamping.',
    noteAdmin: 'Dipilih untuk ditinjau',
    pic: 'Nadia Putri',
    instansi: 'Produksi Tanaman Hortikultura',
    email: 'nadia.contoh@example.com',
    wa: '08xx xxxx xxxx',
    peserta: '24 orang',
    tujuan: 'Praktikum pembibitan hortikultura: pengenalan media tanam dan penyemaian. Memerlukan pendampingan pengelola di area pembibitan.'
  },
  {
    id: 'KJG-2026-019',
    submittedDate: '16 Okt 2026',
    visitDayDate: 'Rabu, 21 Okt 2026',
    visitDateFull: '21 Oktober 2026',
    time: '09.00–11.00 WIB',
    status: 'Disetujui',
    notePublic: 'Disetujui 19 Okt 2026.',
    noteAdmin: 'Disetujui 19 Okt 2026',
    pic: 'Nadia Putri',
    instansi: 'Produksi Tanaman Hortikultura',
    email: 'nadia.contoh@example.com',
    wa: '08xx xxxx xxxx',
    peserta: '20 orang',
    tujuan: 'Kunjungan edukasi budidaya tanaman hortikultura.'
  },
  {
    id: 'KJG-2026-015',
    submittedDate: '12 Okt 2026',
    visitDayDate: 'Kamis, 15 Okt 2026',
    visitDateFull: '15 Oktober 2026',
    time: '08.00–10.00 WIB',
    status: 'Ditolak',
    notePublic: 'Jadwal berbenturan dengan perawatan area. Silakan pilih tanggal lain.',
    noteAdmin: 'Berbenturan dengan perawatan area',
    pic: 'Nadia Putri',
    instansi: 'Produksi Tanaman Hortikultura',
    email: 'nadia.contoh@example.com',
    wa: '08xx xxxx xxxx',
    peserta: '24 orang',
    tujuan: 'Praktikum lapangan pengenalan varietas.'
  }
];

if (!localStorage.getItem('polije_water')) {
  localStorage.setItem('polije_water', JSON.stringify(defaultWater));
}
if (!localStorage.getItem('polije_submissions')) {
  localStorage.setItem('polije_submissions', JSON.stringify(defaultSubmissions));
}

function toggleNotifPopover(e) {
  e.stopPropagation();
  const pop = document.getElementById('notifPopover');
  if (pop) pop.classList.toggle('show');
}

document.addEventListener('click', () => {
  const pop = document.getElementById('notifPopover');
  if (pop) pop.classList.remove('show');
});