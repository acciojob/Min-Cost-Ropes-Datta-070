function mincost(arr)
{ 
//write your code here
// return the min cost
  const pq = new MinPriorityQueue();

    // Insert all ropes into the priority queue
    arr.forEach(rope => pq.enqueue(rope));

    let totalCost = 0;

    // Merge the two shortest ropes until only one rope remains
    while (pq.size() > 1) {
        // Extract the two shortest ropes
        const rope1 = pq.dequeue().element;
        const rope2 = pq.dequeue().element;

        // Calculate the cost of merging these two ropes
        const cost = rope1 + rope2;

        // Add the cost to the total cost
        totalCost += cost;

        // Insert the merged rope back into the priority queue
        pq.enqueue(cost);
    }

    return totalCost;
}

module.exports=mincost;
