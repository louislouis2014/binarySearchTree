const expect = require('chai').expect;
const Node = require('../../practice_probs/5-binary_search_trees');

describe('#Node.insert', function() {
  // var root;
  // beforeEach(function() {
  //   let node = new Node(50);
  //   console.log(node);
  // $(find test/BST-tests -name '*.js')
  // });
  
  it('assigns numbers less than the node value to the left', function() {
    let node = new Node(50);
    node.insert(1);
    expect( node.left.val ).to.equal(1);
  });

  it('assigns numbers greater than the node value to the right', function() {
    let node = new Node(50);
    node.insert(85);
    expect( node.right.val ).to.equal(85);
  });

  it('does not BST.insert duplicate values into the tree', function() {
    let node = new Node(50);
    node.insert(50);
    expect( node.left ).to.equal(null);
    expect( node.right).to.equal(null);
  });

  it('handles multiple numbers correctly', function() {
    
    let node = new Node(50);

    node.insert(25);
    node.insert(12);
    node.insert(1);
    node.insert(15);

    node.insert(55);
    node.insert(52);
    node.insert(53);
    node.insert(75);

    expect( node.left.left.left.val ).to.equal(1);
    expect( node.left.val ).to.equal(25);
    expect( node.right.val ).to.equal(55);
    expect( node.left.left.right.val ).to.equal(15);
    expect( node.right.left.val ).to.equal(52);
    expect( node.right.right.val ).to.equal(75);
    expect( node.right.left.right.val ).to.equal(53);
    expect( node.left.left.val ).to.equal(12);

  });
});