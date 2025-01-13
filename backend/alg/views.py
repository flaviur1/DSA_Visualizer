import json
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from queue import Queue


def bubble_sort_steps(request):
    steps = []
    try:

        data = json.loads(request.body)
        arr = data.get("array")
        tree = data.get("tree")

        step_nr = 1
        iteration_nr = 1

        for i in range(len(arr)):
            swapped = False
            steps.append(
                {"iteration": iteration_nr, "step": step_nr, "text": 'Set the "swapped" variable to False for this iteration.',
                 "arr": arr.copy(), "changeAnim": False, "indexA": None, "indexB": None, "animType": None})
            step_nr += 1
            for j in range(0, len(arr)-i-1):
                steps.append(
                    {"iteration": iteration_nr, "step": step_nr, "text": "Check if the current value is bigger than the next.",
                     "arr": arr.copy(), "changeAnim": True, "indexA": j, "indexB": j+1, "animType": "check", "result": arr[j] > arr[j+1]})
                step_nr += 1
                if arr[j] > arr[j+1]:
                    steps.append(
                        {"iteration": iteration_nr, "step": step_nr, "text": "Switch the positions of the values.",
                         "arr": arr.copy(), "changeAnim": True, "indexA": j, "indexB": j+1, "animType": "switch"})
                    step_nr += 1
                    aux = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = aux
                    swapped = True
                else:
                    steps.append(
                        {"iteration": iteration_nr, "step": step_nr, "text": "Do not switch the positions of the values.",
                         "arr": arr.copy(), "changeAnim": False, "indexA": None, "indexB": None, "animType": "failed"})
                    step_nr += 1

            iteration_nr += 1
            if (swapped == False):
                break

        # def bubbleSort(arr):
        #     for i in range(len(arr)):
        #         swapped = False
        #         for j in range(0, len(arr)-i-1):
        #             if arr[j] > arr[j+1]:
        #                 aux = arr[j]
        #                 arr[j] = arr[j+1]
        #                 arr[j+1] = aux
        #                 swapped = True
        #         if (swapped == False):
        #             break
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

    # we sent an array of dictionaries so we have to turn safe off
    return JsonResponse(steps, safe=False)
    # we don't need serializers, because the data we send is already in a json format, and it doesn't need extra
    # verification or modifications after we send it


def bfs_steps(request):
    try:
        data = json.loads(request.body)
        arr = data.get("array")
        tree = data.get("tree")

        steps = []
        visited = [False] * len(tree)
        q = Queue()

        root = tree.index(-1)
        q.put(root)
        visited[root] = True
        steps.append({"step": len(steps) + 1, "text": f"Mark node {root} as visited",
                      "indexA": root, "indexB": None, "animType": "selected"})

        while not q.empty():
            current = q.get()
            children = [i for i in range(len(tree)) if tree[i] == current]

            for child in children:
                if not visited[child]:
                    q.put(child)
                    visited[child] = True
                    steps.append({"step": len(steps) + 1, "text": f"Mark node {child} as visited",
                                  "indexA": child, "indexB": current, "animType": "selected"})

        return JsonResponse(steps, safe=False)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
