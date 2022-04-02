/** Terminology
Node (or Vertex)
  - basic unit
Edge (or Arc)
  - connects two nodes
Adjacent
  - two nodes are “adjacent” if they share an edge
Weight (optional)
  - each edge can have a weight (ex: price, or distance)

Adjacency List
  - for node, a list of every node it is directly connected to
Adjacency Matrix
  - a matrix of every pair of nodes, with a 1 if that pair is connected (otherwise 0)
 */

class PersonNode {
  constructor(name, adjacent = new Set()) {
    // Create a person node with friends adjacent
    this.name = name;
    this.adjacent = adjacent; // shares an edge with
  }
}

class FriendGraph {
  // Graph holding people and their friendships.
  constructor() {
    this.nodes = new Set();
  }

  // Add a person to our graph
  addPerson(node) {
    this.nodes.add(node);
  }

  // Adds multiple people via array utilizing above method
  addPeople(peopleList) {
    for (let node of peopleList) {
      this.addPerson(node);
    }
  }

  // Sets 2 people as friends, adjacent to each other
  setFriends(person1, person2) {
    person1.adjacent.add(person2);
    person2.adjacent.add(person1);
  }

  // Explores connections from person 1 to person 2
  // go to all closest neighbors and work your way outwards
  areConnectedBFS(person1, person2) {
    let toVisitQueue = [person1];
    // We want to make sure we only visit each vertex once
    let seen = new Set(toVisitQueue);

    // While there's something left to visit
    while (toVisitQueue.length) {
      // takes the first thing on the queue as current person
      let currPerson = toVisitQueue.shift();
      console.log("BFS VISITING:", currPerson.name);

      // return true once they're the same
      if (currPerson === person2) return true;

      // else, loop through adjacent nodes of currPerson
      for (let neighbor of currPerson.adjacent) {
        // if it hasn't been seen yet,
        if (!seen.has(neighbor)) {
          // push the neighbor into the queue
          toVisitQueue.push(neighbor);
          // add the neighbor to seen
          seen.add(neighbor);
        }
        // else, neighbor is ignored if it has been seen
      }
    }
    return false;
  }

  /**
  friends.areConnectedBFS(homer, lisa)
      BFS VISITING: homer simpson
      BFS VISITING: marge simpson
      BFS VISITING: lisa simpson
      < true
   */

  // Explores connections from person 1 to person 2
  // continue on a path until it’s exhausted
  areConnectedDFS(person1, person2) {
    let toVisitStack = [person1];
    // We want to make sure we only visit each vertex once
    let seen = new Set(toVisitStack);

    while (toVisitStack.length) {
      console.log(toVisitStack.map((node) => node.name));

      // takes the latest thing on the stack as current person
      let currPerson = toVisitStack.pop();
      console.log("DFS VISITING:", currPerson.name);

      // return true once they're the same
      if (currPerson === person2) return true;

      // else, loop through adjacent nodes of currPerson
      for (let neighbor of currPerson.adjacent) {
        // if it hasn't been seen yet,
        if (!seen.has(neighbor)) {
          // push the neighbor into the queue
          toVisitStack.push(neighbor);
          // add the neighbor to seen
          seen.add(neighbor);
        }
        // else, neighbor is ignored if it has been seen
      }
    }
    return false;
  }

  /** Example
      friends.areConnectedDFS(homer, marge)
      > ['homer simpson']

      DFS VISITING: homer simpson
      > (3) ['marge simpson', 'lisa simpson', 'maggie simpson']

      DFS VISITING: maggie simpson (maggie is latest node, gets put into seen once searched)
      > (2) ['marge simpson', 'lisa simpson']

      DFS VISITING: lisa simpson
      > (2) ['marge simpson', 'grampa simpson']

      DFS VISITING: grampa simpson
      > ['marge simpson']

      DFS VISITING: marge simpson

      < true
 */

  /***************************************** */

  areConnectedRecursive(person1, person2, seen = new Set([person1])) {
    // if person1/recursive neighbor is the same as person2, it's true
    if (person1 === person2) return true;
    // else, loop through adjacent nodes of currPerson
    for (let neighbor of person1.adjacent) {
      // if neighbor has not been seen..
      if (!seen.has(neighbor)) {
        // add them to seen
        seen.add(neighbor);

        // call this recursively with neighbor as person1 instead, repeat until true. else, false
        if (this.areConnectedRecursive(neighbor, person2, seen)) {
          return true;
        }
      }
    }
    return false;
  }
}

// Create person nodes
const homer = new PersonNode("homer simpson");
const marge = new PersonNode("marge simpson");
const maggie = new PersonNode("maggie simpson");
const lisa = new PersonNode("lisa simpson");
const grampa = new PersonNode("grampa simpson");

// homer.adjacent.add(marge)
// marge.adjacent.add(homer)

const friends = new FriendGraph();

// Adds multiple people to friends with a Set of nodes
friends.addPeople([homer, marge, maggie, lisa, grampa]);

// Set adjacencies/friends. Creates edges with one another.
friends.setFriends(homer, marge);
friends.setFriends(homer, lisa);
friends.setFriends(homer, maggie);
friends.setFriends(marge, maggie);
friends.setFriends(maggie, lisa);
friends.setFriends(lisa, grampa);

const moe = new PersonNode("moe");
const barney = new PersonNode("barney");
const lenny = new PersonNode("lenny");

friends.addPeople([moe, barney, lenny]);
friends.setFriends(moe, barney);
friends.setFriends(barney, lenny);

// friends.areConnected(marge, moe)
