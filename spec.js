const expect = require('chai').expect;
const Node = require('../../practice_probs/5-binary_search_trees');



describe('BST', function() {
  
  describe('Node Class', function() {
    /**
     * new Node is a function that returns an object, also known as a node.
     * The object has three properties, one of which is a value passed into the function.
     * The other two properties are named left and right, and they refer to other nodes.
     * Left and right start out as null.
     */
    it('returns an object', function() {
      expect(new Node()).toEqual(jasmine.any(Object));
    });

    it('contains as a property the value passed into the function', function() {
      expect(new Node('foo').val).toEqual('foo');
    });

    it('has right and left properties set to null', function() {
      expect(new Node().left).toEqual(null);
      expect(new Node().right).toEqual(null);
    });
  });

  describe('Node.prototype.insert', function() {
    var root;
    beforeEach(function() {
      root = new Node(50);
    });
    it('assigns numbers less than the root value to the left', function() {
      insert(1, root)
      expect(root.left.val).toEqual(1);
    });

    it('assigns numbers greater than the root value to the right', function() {
      insert(85, root)
      expect(root.right.val).toEqual(85);
    });

    it('does not insert duplicate values into the tree', function() {
      insert(50, root);
      expect(root.left).toEqual(null);
      expect(root.right).toEqual(null);
    });

    it('handles multiple numbers correctly', function() {

      insert(25, root);
      insert(12, root);
      insert(1, root);
      insert(15, root);

      insert(55, root);
      insert(52, root);
      insert(53, root);
      insert(75, root);

      expect(root.left.left.left.val).toEqual(1);
      expect(root.left.val).toEqual(25);
      expect(root.right.val).toEqual(55);
      expect(root.left.left.right.val).toEqual(15);
      expect(root.right.left.val).toEqual(52);
      expect(root.right.right.val).toEqual(75);
      expect(root.right.left.right.val).toEqual(53);
      expect(root.left.left.val).toEqual(12);

    });
  });

  describe('Node.prototype.contains', function() {
    var root;
    beforeEach(function() {
      root = new Node(50);
      insert(25, root);
      insert(12, root);
      insert(1, root);
      insert(15, root);

      insert(55, root);
      insert(52, root);
      insert(53, root);
      insert(75, root);
    });

    it('finds values that are present', function() {
      expect(contains(75, root)).toEqual(true);
      expect(contains(52, root)).toEqual(true);
      expect(contains(12, root)).toEqual(true);
    });

    it('correctly reports values that are not present', function() {
      expect(contains(111, root)).toEqual(false);
      expect(contains(-1, root)).toEqual(false);
      expect(contains(-9, root)).toEqual(false);
      expect(contains(7, root)).toEqual(false);
      expect(contains(20, root)).toEqual(false);
    });
  });

  describe('Node.prototype.treeForEach', function() {
    var root;
    beforeEach(function() {
      root = new Node(50);
      insert(25, root);
      insert(12, root);
      insert(1, root);
      insert(15, root);

      insert(55, root);
      insert(52, root);
      insert(53, root);
      insert(75, root);
    });

    it('calls the passed function the correct number of times', function() {
      var count = 0;
      function counter() { count++; }
      treeForEach(root, counter);
      expect(count).toEqual(9);
    });
  });

  describe('Node.prototype.countNodes', function() {
    var root;
    beforeEach(function() {
      root = new Node(50);
      insert(25, root);
      insert(12, root);
      insert(1, root);
      insert(15, root);

      insert(55, root);
      insert(52, root);
      insert(53, root);
      insert(75, root);
    });

    it('returns the correct number of nodes', function() {
      expect(countNodes(root)).toEqual(9);
      expect(countNodes(new Node())).toEqual(1);
    });
  });

  describe('Node.prototype.averageVal', function() {
    var root;
    beforeEach(function() {
      root = new Node(50);
      insert(25, root);
      insert(12, root);
      insert(1, root);
      insert(15, root);

      insert(55, root);
      insert(52, root);
      insert(53, root);
      insert(75, root);
    });
    it('averages correctly', function() {
      expect(averageVal(root)).toBeCloseTo(37.5);
    });

  });

});
    