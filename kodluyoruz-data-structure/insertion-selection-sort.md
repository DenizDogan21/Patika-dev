### Insertion Sort Aşamaları
Verilen dizi: [22, 27, 16, 2, 18, 6]

Insertion Sort algoritmasına göre dizinin sıralanma aşamaları:

- **Başlangıç:** [22, 27, 16, 2, 18, 6]
- **1. Adım:** İlk iki eleman zaten sıralıdır: [22, 27, 16, 2, 18, 6]
- **2. Adım:** 16, 27'den küçük olduğundan 22 ve 27'nin önüne gelir: [16, 22, 27, 2, 18, 6]
- **3. Adım:** 2, 16'dan küçük olduğundan en başa gelir: [2, 16, 22, 27, 18, 6]
- **4. Adım:** 18, 22'den küçük olduğundan 22 ve 27'nin önüne gelir: [2, 16, 18, 22, 27, 6]
- **5. Adım:** 6, 16'dan küçük olduğundan en baştan ikinci sıraya gelir: [2, 6, 16, 18, 22, 27]

### Big-O Gösterimi
Insertion Sort'un zaman karmaşıklığı:

- **En kötü durum (Worst Case):** O(n^2) - dizinin ters sıralı olduğu durum.
- **Ortalama durum (Average Case):** O(n^2)
- **En iyi durum (Best Case):** O(n) - dizi zaten sıralı ise.

### Time Complexity için 18 Sayısının Durumu
Dizi sıralandıktan sonra: [2, 6, 16, 18, 22, 27]

18 sayısı ortada yer aldığı için **Average Case** kapsamına girer.

### Selection Sort Aşamaları
Verilen dizi: [7, 3, 5, 8, 2, 9, 4, 15, 6]

Selection Sort algoritmasına göre ilk 4 adım:

- **Başlangıç:** [7, 3, 5, 8, 2, 9, 4, 15, 6]
  - En küçük eleman 2, ilk eleman ile yer değiştirir: [2, 3, 5, 8, 7, 9, 4, 15, 6]

- **2. Adım:** [2, 3, 5, 8, 7, 9, 4, 15, 6]
  - Kalan kısımda en küçük eleman zaten ikinci sırada (3): [2, 3, 5, 8, 7, 9, 4, 15, 6]

- **3. Adım:** [2, 3, 5, 8, 7, 9, 4, 15, 6]
  - Kalan kısımda en küçük eleman 4, üçüncü eleman (5) ile yer değiştirir: [2, 3, 4, 8, 7, 9, 5, 15, 6]

- **4. Adım:** [2, 3, 4, 8, 7, 9, 5, 15, 6]
  - Kalan kısımda en küçük eleman 5, dördüncü eleman (8) ile yer değiştirir: [2, 3, 4, 5, 7, 9, 8, 15, 6]
