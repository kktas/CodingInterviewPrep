class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }

    addEdge(node1, node2) {
        if (!this.adjacentList[node1].includes(node2)) {
            this.adjacentList[node1].push(node2);
        }
        if (!this.adjacentList[node2].includes(node1)) {
            this.adjacentList[node2].push(node1);
        }
    }

    showConnections() {
        console.log("Connections:")
        for (const [node, connections] of Object.entries(this.adjacentList)) {
            console.log(`${node}: ${connections.join(', ')}`)
        }
    }
}


const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');

myGraph.addEdge('0', '1');
myGraph.addEdge('0', '2');
myGraph.addEdge('0', '3');
myGraph.addEdge('0', '4');

myGraph.addEdge('1', '2');
myGraph.addEdge('1', '3');
myGraph.addEdge('1', '4');


myGraph.showConnections();
