import { Node, LinkedList } from './LinkedList.js'

const a = new Node(10)
const b = new Node(20)
const c = new Node(30)
const d = new Node(40)
a.next = b
b.next = c
c.next = d

const list = new LinkedList()

list.push_back("new-york")
list.push_back("delhi")
list.push_back("jakarta")
list.push_back("buenos aires")

console.log("Linked List: ", list)
console.log("Size: ", list.size())
console.log("Is Empty: ", list.empty())
console.log("Value at index 1: ", list.value_at(4))
console.log("push_front: ", list.push_front(10))
console.log("pop_front: ", list.pop_front())
console.log("pop_back: ", list.pop_back())
console.log("front: ", list.front())
console.log("back: ", list.back())
console.log("insert: ",list.insert(0, 20))
console.log("print: ", list.print())
console.log("reverse: ", list.reverse())
console.log("print: ", list.print())
console.log("remove_value", list.remove_value("delhi"))

// const printValues = (head) => {
//     let current = head;
//     let values = [];
//
//     while (current) {
//         values.push(current.value)
//         current = current.next
//     }
//
//     return values;
//
// }
//
// const sumValues = (head) => {
//     let current = head;
//     let sum = 0;
//
//     while (current) {
//         sum = sum + current.value;
//         current = current.next
//     }
//
//     return sum
// }
//
// const findValue = (head, value) => {
//     let current = head
//
//     while (current) {
//         if (current.value === value) return true
//
//         current = current.next;
//
//     }
//
//     return false;
// }
//
// const getNodeValue = (head, index) => {
//     let current = head;
//     let count = 0;
//
//     while (current) {
//         if (count === index) return current.value;
//         current = current.next;
//         count += 1;
//     }
//
//     return null;
// }
//
// const reverseList = (head) => {
//     let prev = null
//     let current = head
//
//     while (current) {
//         const next = current.next
//         current.next = prev
//         prev = current
//         current = next
//     }
//
//     return prev
// }
//
// console.log(printValues(linkedlist.head))
// console.log(sumValues(linkedlist.head))
// console.log(findValue(linkedlist.head, 100))
// console.log(getNodeValue(linkedlist.head, 0))
// console.log(reverseList(linkedlist.head))

