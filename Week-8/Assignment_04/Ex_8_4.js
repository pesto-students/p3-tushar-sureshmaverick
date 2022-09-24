//function to add edges in the graph.
function addEdge(adj,u,v) {
    //pushing edges in undirected graph
    adj[u].push(v);
    adj[v].push(u);
}
//function to check whether it has valid path or not.
function validEdges(n, edges, source, destination) {
    //if user enters sources = destination. then output will always be true.
    if(source === destination){
        return true;
    }
    //function to get neighbours in graph
    function getNeighbors(index){
        const result = [];
        // nodes could be connected in both directions
        for (const [a, b] of edges) {
            if(a===index){
                result.push(b)
            }
            if(b === index){
                result.push(a)
            }
        }
        return result;
    }

    function bfs(start) {
        // queue the first item
        const queue = [start];
        // keep track of the visited nodes
        const visited = new Set();
        // add current node
        visited.add(start);
        while(queue.length > 0){
            const node = queue.shift();
            // we found a path
            if(node === destination){
                return true;
            }
            // build the graph on the fly
            for (neighbor of getNeighbors(node)) {
                // skip visited node
                if(visited.has(neighbor)) {
                    continue;
                }
                // enqueue the node and mark it as visited
                queue.push(neighbor);
                visited.add(neighbor)
            }
        }
        // if we make it here there was no path
        return false
    }
    // start from source
    return bfs(source);
};

let n = 6;
let source = 0;
let destination = 5;

let v = 6;
//creating a dynamic array
let adj = [];
//creating v no. of vertices.
for (let i = 0; i < v; i++) {
    adj.push([]);
}
//adding edges in graph

addEdge(adj,0,1);
addEdge(adj,0,2);
addEdge(adj,3,5);
addEdge(adj,5,4);
addEdge(adj,4,3);

//function call
let output = validEdges(6,adj,0,5);
console.log(output);

//Time Complexity:O(V+E).V=>vertices, E=>edges
//Space Complexity:O(V)



