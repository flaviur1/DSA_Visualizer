arr = [3, 4, 5, 1, 0, 15, 2]


def bubbleSort(arr):
    for i in range(len(arr)):
        swapped = False
        for j in range(0, len(arr)-i-1):
            if arr[j] > arr[j+1]:
                aux = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = aux
                swapped = True
        if (swapped == False):
            break


bubbleSort(arr)
print(arr)
