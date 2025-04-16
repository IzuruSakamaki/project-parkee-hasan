
# Authors
Mohammad Ifaizul Hasan

# Project
Software Engineer Settlement Test
- Data Structure
- Garbage Collection
- Shell Script
- Production Issue
- Data Scripting
- Parking Application

# Answer
## Data Structure

## Garbage Collection
#### Question 1
Saat method dipanggil, aplikasi akan mengalokasikan memori untuk variabel lokal: **freqMap**, **count**, **num**, dan **complement**.
- **freqMap** adalah objek HashMap, yang dialokasikan di **heap** (karena objek).
- Variabel **num**, **count**, **complement** adalah tipe primitif dan disimpan di **stack frame** method.

Java secara otomatis mengelola objek di heap menggunakan **Garbage Collector (GC)**. Objek yang tidak memiliki referensi aktif akan dianggap *eligible for garbage collection*.

#### Question 2
Setelah method selesai dieksekusi, **stack frame**-nya akan dihapus. Variabel lokal (**freqMap**, **count**, **complement**) akan hilang dari stack.

Jika tidak ada referensi lagi ke **freqMap**, maka objek HashMap akan menjadi kandidat untuk dihapus oleh GC. Jadi tidak ada kebocoran memori, karena semua variabel lokal adalah scoped di dalam method saja.

#### Question 3
Tidak ada potensi kebocoran memori dalam kode.
- HashMap hanya digunakan di dalam method, dan tidak disimpan secara global.
- Tidak ada objek yang mereferensikan dirinya sendiri atau dua objek yang saling mereferensikan dan tidak digunakan lagi.
- Setelah method selesai, semua objek akan dilepas dari scope dan bisa dikumpulkan oleh GC jika tidak direferensikan dari tempat lain.

## Shell Script

## Production Issue
#### Identifikasi Isu
- Mengonfirmasi isu dengan melakukan pengecekan log, monitoring tools, atau alert.
- Mengumpulkan informasi seperti timestamp, message, dan service yang terdampak.
#### Komunikasi
- Mengabari lead mengenai temuan tersebut.
- Meneruskan informasi ke tim terkait (support, DevOps, engineer) melalui channel komunikasi yang dipakai.
- Jika diperlukan membuat tiket dan dokumentasi untuk mempermudah perbaikan.
- Memberikan update status tentang PIC dan estimasi waktu perbaikan.
#### Mitigasi Sementara
- Jika dimungkinkan, rollback versi, scale up sementara, atau switch ke backup system.
- Melakukan hotfix sementara untuk menambal kerentanan yang terjadi.
#### Perbaikan Permanen
- Melakukan **Root Cause Analysis (RCA)**

## Data Scripting
## Parking Application