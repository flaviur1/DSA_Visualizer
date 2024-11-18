arr = [3, 4, 5, 3, 1, 0, 15, 2]


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


print(arr)


steps = []
iteration_nr = 1
step_nr = 1

for i in range(len(arr)):
    swapped = False
    steps.append(
        {"iteration": iteration_nr, "step": step_nr, "text": 'Set the "swapped" variable to False for this iteration.'})
    step_nr += 1
    for j in range(0, len(arr)-i-1):
        steps.append(
            {"iteration": iteration_nr, "step": step_nr, "text": "Check if the current value is bigger than the next."})
        step_nr += 1
        if arr[j] > arr[j+1]:
            steps.append(
                {"iteration": iteration_nr, "step": step_nr, "text": "Switch the positions of the values."})
            step_nr += 1
            aux = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = aux
            swapped = True
        else:
            steps.append(
                {"iteration": iteration_nr, "step": step_nr, "text": "Do not switch the positions of the values."})
            step_nr += 1

    iteration_nr += 1
    if (swapped == False):
        break

print(arr)

for i in steps:
    lis = list(i.values())
    print("iteration: " + str(lis[0]) + "   step: " +
          str(lis[1]) + "     " + str(lis[2]))
