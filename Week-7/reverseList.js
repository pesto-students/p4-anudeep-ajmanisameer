var reverseList = function (head) {
  let prev = null
  let next = null
  while (head !== null) {
    // saving next
    next = head.next
    // reverse
    head.next = prev
    // move prev and head
    prev = head
    head = next

  };
  return prev
}