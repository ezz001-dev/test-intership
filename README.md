jawaban Internship Test

=== Test no 1 ===

running react js app

- clone this project
- npm install
- npm start

=== Test no 2 ===

function hitungGaji(jamKerja, tarifPerJam) {
let totalGaji;
let jamLembur
let gajiLembur
let gajiPokok

    if (jamKerja > 40) {
        // Hitung lembur
        jamLembur = jamKerja - 40;
        gajiLembur = jamLembur * (1.5 * tarifPerJam);
        gajiPokok = 40 * tarifPerJam;
        totalGaji = gajiPokok + gajiLembur;
    } else {
        // Jika tidak ada lembur
        jamLembur = 0;
        gajiLembur = jamLembur * (1.5 * tarifPerJam);
        gajiPokok = 40 * tarifPerJam;
        totalGaji = jamKerja * tarifPerJam;
    }

    return {
      jamLembur ,
      gajiLembur,
      gajiPokok,
      totalGaji,
    };

}

function main() {
const jamKerja = parseFloat(prompt("Masukkan jumlah jam kerja:"));
const tarifPerJam = parseFloat(prompt("Masukkan tarif per jam:"));

    if (isNaN(jamKerja) || isNaN(tarifPerJam)) {
        console.log("Masukkan angka yang valid!");
    } else {
        const gaji = hitungGaji(jamKerja, tarifPerJam);
        console.log(`Jam Lembur :  ${gaji.jamLembur.toFixed(2)}`);
        console.log(`Gaji Pokok : Rp ${gaji.gajiPokok.toFixed(2)}`);
        console.log(`Gaji Lembur : Rp ${gaji.gajiLembur.toFixed(2)}`);
        console.log(`Total gaji : Rp ${gaji.totalGaji.toFixed(2)}`);
    }

}

// run main func
main();

=== Test no 3 ===
