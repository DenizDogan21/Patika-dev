### Binary Search Tree Aşamaları
Verilen dizi: [7, 5, 1, 8, 3, 6, 0, 9, 4, 2]

1. **Root 7'dir.**
   - BST: 
     ```
     7
     ```

2. **5, root'un soluna yerleştirilir.**
   - BST: 
     ```
       7
      /
     5
     ```

3. **1, 5'in soluna yerleştirilir.**
   - BST: 
     ```
       7
      /
     5
    /
   1
     ```

4. **8, root'un sağına yerleştirilir.**
   - BST: 
     ```
       7
      / \
     5   8
    /
   1
     ```

5. **3, 1'in sağına yerleştirilir.**
   - BST: 
     ```
       7
      / \
     5   8
    /
   1
    \
     3
     ```

6. **6, 5'in sağına yerleştirilir.**
   - BST: 
     ```
       7
      / \
     5   8
    / \
   1   6
    \
     3
     ```

7. **0, 1'in soluna yerleştirilir.**
   - BST: 
     ```
       7
      / \
     5   8
    / \
   1   6
  / \
 0   3
     ```

8. **9, 8'in sağına yerleştirilir.**
   - BST: 
     ```
       7
      / \
     5   8
    / \   \
   1   6   9
  / \
 0   3
     ```

9. **4, 3'ün sağına yerleştirilir.**
   - BST: 
     ```
       7
      / \
     5   8
    / \   \
   1   6   9
  / \
 0   3
      \
       4
     ```

10. **2, 3'ün soluna yerleştirilir.**
    - BST: 
     ```
       7
      / \
     5   8
    / \   \
   1   6   9
  / \
 0   3
    / \
   2   4
     ```
