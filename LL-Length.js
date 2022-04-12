function length(head) {
    let len = 0;
    while (head != null) {
      len++;
      head = head.next;
    }
    return len;
  }

  function Node(data, next = null) {
    this.data = data;
    this.next = next;
  }