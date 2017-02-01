# linked list
# find the kth to last node
# write function that takes integer k
# and the head _node of a linked list and returns
# teh kth to the last node in the list.

list = (a, b, c, d, e, f)



def find_kth_el(k, head_node)
  most_recent_k_nodes = [];
  parent = head_node
  until parent.next == nil
    most_recent_k_nodes << parent
    if most_recent_k_nodes.length > k
      most_recent_k_nodes.unshift
    end
    parent = parent.next
  end
  return most_recent_k_nodes[0]
end

def hi(str)
  puts str
end
