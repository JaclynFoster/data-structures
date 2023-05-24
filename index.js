class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
    setNext(item) {
        this.next = item
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    getLast() {
        let lastNode = this.head
        if (lastNode) {
            while(lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }
    addNewItem(data, previous) {
        let item = new Node(data)
        item.setNext(previous.next)
        previous.setNext(item)
    }
}

let nodeA = new Node('A')
let nodeB = new Node('B')
nodeA.setNext(nodeB)

let list = new LinkedList(nodeA)

let nodeC = new Node('C')
nodeB.setNext(nodeC)
console.log(list.getLast())

list.addNewItem('C', list.getLast())

console.log(list)