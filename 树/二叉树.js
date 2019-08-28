

    function BST() {
        this.root = null;
        this.insert = insert;
    }


    //定义一个节点
    function Node(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
        this.show = () => { return this.data };
    }

    //插入新节点
    function insert(data) {
        let node = new Node(data, null, null);
        if (this.root == null) {
            this.root = node;
            return;
        }

        let current = this.root;
        let parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = node;
                    break;
                }
            }
            else {
                current = current.right;
                if (current == null) {
                    parent.right = node;
                    break;
                }
            }
        }


    }

    //前序遍历(根左右) 第一个节点是根节点
    function frontSearch(node) {
        if (node !== null) {
            console.log(node.show());
            frontSearch(node.left);
            frontSearch(node.right);
        }
    }

    //中序遍历(左根右) 第一个节点为最小节点 最后一个节点为最大节点
    function midSearch(node) {
        if (node !== null) {
            midSearch(node.left);
            console.log(node.show());
            midSearch(node.right);
        }
    }

    //后序遍历(左右根) 最后一个节点为根节点
    function backSearch(node) {
        if (node !== null) {
            backSearch(node.left);
            backSearch(node.right);
            console.log(node.show());
        }
    }


    //查找最小节点
    function getMin(bst) {
        if (bst.root == null) return;
        let current = bst.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    //查找最大节点
    function getMax(bst) {
        if (bst.root == null) return;
        let current = bst.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    //查找目标节点
    function find(target, bst) {
        if (bst.root == null) return;
        let current = bst.root;
        while (current !== null) {
            if (target == current.data) {
                return true;
            } else if (target < current.data) {
                current = current.left;
            } else if (target > current.data) {
                current = current.right;
            }
        }
        return -1;

    }






    let bst = new BST();
    bst.insert(10);
    bst.insert(2);
    bst.insert(1);
    bst.insert(3);
    bst.insert(12);
    bst.insert(13);
    bst.insert(11);

    frontSearch(bst.root);
    midSearch(bst.root);
    backSearch(bst.root);

    console.log(getMin(bst));
    console.log(getMax(bst));
    console.log(find(13, bst));
