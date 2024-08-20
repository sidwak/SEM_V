from rmp import graphy
from rmp import straight_line
from queue import PriorityQueue

start = 'Arad'
des = 'Bucharest'
result = ''

def get_fn(citystart):
    cities = citystart.split(',')
    hn=gn=0
    for ctr in range(0, len(cities)-1):
        gn=gn+graphy[cities[ctr]][cities[ctr+1]]
    hn=straight_line[cities[len(cities)-1]]
    return (hn+gn)

def expand(cityq):
    global result
    tot, citystr, thiscity = cityq.get()
    if thiscity == des:
        result = citystr + "::" + str(tot)
        return 
    for cty in graphy[thiscity]:
        cityq.put((get_fn(citystr+","+cty),citystr+","+cty,cty))
    expand(cityq)

cityq = PriorityQueue()
thiscity = start
cityq.put((get_fn(start),start,thiscity))
expand(cityq)
print("This A* path with total is: ")
print(result)