function cekKhodam(event) {
    event.preventDefault();
    let nama = $('#search').val();
    if (nama === '') {
        alert('Masukkan nama terlebih dahulu!');
    } else {
        let status = [
            'isi',
            'kosong',
        ];
        const randomStatus = Math.floor(Math.random() * status.length);
        let resultText = '';
        if (randomStatus === 0) {
            let khodam = [
                'ambatukam',
                'rusdi',
                'lumpur lapindo',
                'amir knalpot',
                'nardi',
                'ambatukam skin epic',
                'ambatukam rare',
                'rehan watsap',
                'abdi radiator',
                'info kicau mania',
                'peduli apa gweh',
                'mamang culun',
                'bos sepatu kets',
                'joko maling',
                'budi lempung',
                'tini teplon',
                'bengkel kotor',
                'yanto motor',
                'doni krupuk',
                'jajang knalpot',
                'gogo oli',
                'andi sosis',
                'manto lampu merah',
                'risa pecel',
                'okky genjer',
                'susi sambel',
                'hendi bubur',
                'yusuf batok',
                'iko nasi goreng',
                'tina kasur sobek',
                'jaya balon',
                'kiki odol super',
                'mega jamu',
                'roni raket',
                'ena hantu',
                'andi jari-jari',
                'rio pisang',
                'dina kulkas rusak',
                'yani betadine',
                'bina semangka',
                'rudi jengkol',
                'dodi sandal jepit',
                'rina parfum',
                'tari jamur',
                'ricky setrika',
                'cinta petasan',
                'aji sendal',
                'darma pentol',
                'ida kerupuk',
                'wati petir',
                'andi pesing',
                'raja gerobak',
                'ferry es batu',
                'beni bakpao',
                'ena knalpot rusak',
                'yosi terong',
                'anto mie',
                'andi megnet',
                'riki kebaya',
                'jimi kunci',
                'joko panci',
                'sami mobil',
                'boni pisang goreng',
                'ferry mesin',
                'aldi bor',
                'sinta peci',
                'adi soto',
                'andi putri',
                'yana dandang',
                'fajar lampu',
                'wanda raja',
                'titi garam',
                'andi robot',
                'juna kompor',
                'bobby odol',
                'ini celana',
                'lisa pantun',
                'boy kursi',
                'haris mie instan',
                'ali blender',
                'donny duster',
                'joni setrikaan',
                'emil payung',
                'yuda pemadam',
                'samsul keranjang',
                'irwan radiator',
                'cici sirup',
                'kiki sandal',
                'nina hula',
                'zaki jari-jari',
                'santi kasur',
                'doni panci',
                'eko sarung',
                'rini termos',
                'budi meja',
                'wandi genteng',
                'jojo jok mobil',
                'andi mesin cuci'
            ];
            
            const random = Math.floor(Math.random() * khodam.length);
            resultText = `${nama.toUpperCase()} - LU DAPET : ${khodam[random]}`;
        } else {
            resultText = `${nama.toUpperCase()} - LU GA JOMOKS`;
        }
        window.location.href = `anotherpage.html?result=${encodeURIComponent(resultText)}`;
    }
}

$(document).ready(function () {
    $('#btn-search').click(cekKhodam);
});
