
const display = document.getElementById("display");

// Menambahkan angka atau operator
function tambah(nilai) {
    display.value += nilai;
}

// Menghapus semua angka
function hapusSemua() {
    display.value = "";
}

// Menghapus satu karakter
function hapusSatu() {
    display.value = display.value.slice(0, -1);
}

// Menghitung hasil
function hitung() {
    try {
        if (display.value === "") {
            return;
        }

        if (!/^[0-9+\-*/. ]+$/.test(display.value)) {
            throw new Error("Input tidak valid");
        }

        const hasil = Function(
            '"use strict"; return (' + display.value + ')'
        )();

        if (!Number.isFinite(hasil)) {
            throw new Error("Perhitungan tidak valid");
        }

        display.value = hasil;
    } catch {
        display.value = "Error";
    }
}
