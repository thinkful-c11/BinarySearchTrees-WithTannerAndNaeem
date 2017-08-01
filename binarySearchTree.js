class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key === null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      if (this.left === null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right === null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  _replaceWith(node) {
        if (this.parent) {
           if (this === this.parent.left) {
               this.parent.left = node
           }
            else if ( this === this.parent.right) {
                this.parent.right = node
            }
            
            if (node) {
                node.parent = this.parent
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else{
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }
}
