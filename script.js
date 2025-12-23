var dataBarang = [];
if (localStorage.getItem("wishlist_akbar")) {
    dataBarang = JSON.parse(localStorage.getItem("wishlist_akbar"));
    tampilkanLayar();
}

//CREATE
function tambah() {
    var input = document.getElementById("inputan");
    var isiTeks = input.value;
    if (isiTeks == "") {
        alert("Isi nama barang!");
    } else {
        dataBarang.push(isiTeks);
        simpan();
        tampilkanLayar();
        input.value = "";
    }
}

//READ
function tampilkanLayar() {
    var listHTML = document.getElementById("tempat_list");
    listHTML.innerHTML = "";
    for (var i = 0; i < dataBarang.length; i++) {
        var barang = dataBarang[i];
        var tombolEdit = "<button class='tombol-edit' onclick='edit(" + i + ")'>Edit</button>";
        var tombolHapus = "<button class='tombol-hapus' onclick='hapus(" + i + ")'>X</button>";
        var tampilan = "<li>" + barang + " " + tombolEdit + " " + tombolHapus + "</li>";
        listHTML.innerHTML = listHTML.innerHTML + tampilan;
    }
}

//UPDATE
function edit(urutan) {
    var dataLama = dataBarang[urutan];
    var dataBaru = prompt("Ganti nama:", dataLama);
    if (dataBaru != null && dataBaru != "") {
        dataBarang[urutan] = dataBaru;
        simpan();
        tampilkanLayar();
    }
}

//DELETE
function hapus(urutan) {
    var yakin = confirm("Hapus barang?");
    if (yakin == true) {
        dataBarang.splice(urutan, 1);
        simpan();
        tampilkanLayar();
    }
}

function simpan() {
    var dataTeks = JSON.stringify(dataBarang);
    localStorage.setItem("wishlist_akbar", dataTeks);
}