const expect = require('chai').expect;
const beforeEach = require('mocha').beforeEach;
const Node = require('../../practice_probs/5-binary_search_trees');

describe('#contains', function() {
  

  beforeEach(function() {
    node = new Node(50);
    node.insert(25);
    node.insert(12);
    node.insert(1);
    node.insert(15);

    node.insert(55);
    node.insert(52);
    node.insert(53);
    node.insert(75);
  });

  it('finds values that are present', function() {

    expect( node.contains(75) ).to.equal(true);
    expect( node.contains(52) ).to.equal(true);
    expect( node.contains(12) ).to.equal(true);
  });

  it('correctly reports values that are not present', function() {

    expect( node.contains(111) ).to.equal(false);
    expect( node.contains(-1) ).to.equal(false);
    expect( node.contains(-9) ).to.equal(false);
    expect( node.contains(7) ).to.equal(false);
    expect( node.contains(20) ).to.equal(false);
  });

});

  