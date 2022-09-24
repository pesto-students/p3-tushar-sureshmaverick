//program to print all paths from a source to target.
let v;
let adjList;
//a directed graph using adjacency list representation
function Graph(vertices) {
    //initialise vertex count
    v = vertices;
    //initialise adjacency list
    AdjList();
}
//function to initialise adjacency list
function AdjList() {
    adjList = new Array(v);
    //loop from 0 to no. of vertices-1;
    for(let i = 0; i < v; i++) {
        adjList[i] = [];
    }
}
//add edge from u to v
function addEdge(u, v){
    //add v to u's list.
    adjList[u].push(v);
}
//Prints all paths from source to destination.
function printAllPaths(s,d){
    //creating an array for storing visit information of vertices.
    let isVisited = new Array(v);
    //marking visit status as false for nodes.
    for(let i = 0; i < v; i++){
        isVisited[i] = false;
    }
    let pathList = [];
    // add source to path
    pathList.push(s);
    // Call recursive function
    printAllPathsUtil(s,d,isVisited,pathList);
}
// A recursive function to print all paths from 'u' to 'd'. isVisited keeps track of vertices in current path.
function printAllPathsUtil(u,d,isVisited,local) {
    if (u == d) {
        // local stores actual vertices in the current path
        console.log("[" + local + "]");
        // if match found then no need to traverse more till depth
        return;
    }
    // Mark the current node
    isVisited[u] = true;
    //Recur for all the vertices adjacent to current vertex
    for (let i = 0; i < adjList[u].length; i++) {
        if (!isVisited[adjList[u][i]]) {
            //store current node in path
            local.push(adjList[u][i]);
            printAllPathsUtil(adjList[u][i], d,
                isVisited, local);
                //remove current node in path[]
            local.splice(local.indexOf(adjList[u][i]),1);
        }
    }
    //Mark the current node
    isVisited[u] = false;
}
Graph(4);
addEdge(0,1);
addEdge(0,2);
addEdge(0,3);
addEdge(2,0);
addEdge(2,1);
addEdge(1,3);
//source
let s = 2;
//destination
let d = 3;
//calling print function to get output.
printAllPaths(s, d);



//Time Complexity: O(V^V), V=>Vertex
//Space Complexity: O(V^V), V=>Vertex

