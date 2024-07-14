from collections import defaultdict
class Graph:
    def __init__(self):
        self.graph = defaultdict(list)
    def addEdge(self, fromNode, toNode):
        self.graph[fromNode].append(toNode)
    def doBFS(self, fromNode):
        visited = set()
        stack = list()
        stack.append(fromNode)
        visited.add(fromNode)
        print("Visited: ")
        while (len(stack) > 0):
            currentNode = stack[0]
            stack.pop(0)
            """ if currentNode in visited:
                continue """
            """ visited.add(currentNode) """
            print(currentNode,end= "-")
            for friendNode in self.graph[currentNode]:
                if friendNode not in visited:
                    visited.add(friendNode)
                    stack.append(friendNode)

graph = Graph()
graph.addEdge('a','b') #just reverse add in addEgde function rather doing this
graph.addEdge('b','a')
graph.addEdge('a','c')
graph.addEdge('c','a')
graph.addEdge('c','f')
graph.addEdge('f','c')
graph.addEdge('b','d')
graph.addEdge('d','b')
graph.addEdge('b','e')
graph.addEdge('e','b')
graph.addEdge('e','f')
graph.addEdge('f','e')
print("Doing BFS from node 'A':")
graph.doBFS('a')