import linkedList from '/Node';

var rotateRight = function (head, k) {
  if (head == null || k == 0) return head;

  let newTail = head
  let tail = head
  let len = 1

  // get curr tail and length
  while (tail.next) {
    tail = tail.next
    len++
  }

  // link curr tail to head
  tail.next = head

  // get new tail node
  for (let i = 1; i < len - (k % len); ++i) {
    newTail = newTail.next  
  }

  const ret = newTail.next
  // change to new tail
  newTail.next = null
  return ret
};

rotateRight(linkedList, 3)