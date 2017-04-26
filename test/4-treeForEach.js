/*
describe('treeForEach', function() {
    var node;
    beforeEach(function() {
      node = makeNode(50);
      node.insert(25);
      node.insert(12);
      node.insert(1);
      node.insert(15);

      node.insert(55);
      node.insert(52);
      node.insert(53);
      node.insert(75);
    });

    it('calls the passed function the correct number of times', function() {
      var count = 0;
      function counter() { count++; }
      treeForEach(node, counter);
      expect(count).toEqual(9);
    });
  });

  describe('countNodes', function() {
    var node;
    beforeEach(function() {
      node = makeNode(50);
      node.insert(25);
      node.insert(12);
      node.insert(1);
      node.insert(15);

      node.insert(55);
      node.insert(52);
      node.insert(53);
      node.insert(75);
    });

    it('returns the correct number of nodes', function() {
      expect(countNodes(node)).toEqual(9);
      expect(countNodes(makeNode())).toEqual(1);
    });
  });

  describe('averageVal', function() {
    var node;
    beforeEach(function() {
      node = makeNode(50);
      node.insert(25);
      node.insert(12);
      node.insert(1);
      node.insert(15);

      node.insert(55);
      node.insert(52);
      node.insert(53);
      node.insert(75);
    });
    it('averages correctly', function() {
      expect(averageVal(node)).toBeCloseTo(37.5);
    });

  });

});
    
*/