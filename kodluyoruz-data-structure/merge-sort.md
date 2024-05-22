### Merge Sort Aşamaları
Verilen dizi: [16, 21, 11, 8, 12, 22]

Merge Sort algoritmasına göre dizinin sıralanma aşamaları:

1. **Başlangıç:** [16, 21, 11, 8, 12, 22]

2. **Diziyi Parçalama (Splitting the Array):**
   - [16, 21, 11, 8, 12, 22] -> [16, 21, 11] ve [8, 12, 22]
   - [16, 21, 11] -> [16] ve [21, 11]
   - [21, 11] -> [21] ve [11]
   - [8, 12, 22] -> [8] ve [12, 22]
   - [12, 22] -> [12] ve [22]

3. **Birleştirme (Merging):**

**1. İlk parçalara ayırma:**
   - [16, 21, 11, 8, 12, 22]
   - [16, 21, 11] ve [8, 12, 22]

**2. Daha küçük parçalara ayırma:**
   - [16, 21, 11] -> [16] ve [21, 11]
   - [21, 11] -> [21] ve [11]

**3. Küçük parçaları birleştirme:**
   - [21] ve [11] -> [11, 21]

**4. Daha küçük parçalara ayırma:**
   - [8, 12, 22] -> [8] ve [12, 22]
   - [12, 22] -> [12] ve [22]

**5. Küçük parçaları birleştirme:**
   - [12] ve [22] -> [12, 22]

**6. Parçaları sıralı birleştirme:**
   - [16] ve [11, 21] -> [11, 16, 21]
   - [8] ve [12, 22] -> [8, 12, 22]

**7. Son birleştirme:**
   - [11, 16, 21] ve [8, 12, 22] -> [8, 11, 12, 16, 21, 22]

Sonuç olarak, dizinin sıralanmış hali: [8, 11, 12, 16, 21, 22]

### Big-O Gösterimi
Merge Sort'un zaman karmaşıklığı:

- **En kötü durum (Worst Case):** O(n log n)
- **Ortalama durum (Average Case):** O(n log n)
- **En iyi durum (Best Case):** O(n log n)
