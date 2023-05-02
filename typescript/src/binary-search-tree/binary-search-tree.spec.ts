import { describe, expect, it } from 'vitest';
import { BinarySearchTree } from './binary-search-tree';

const generateEmptyTree = () => new BinarySearchTree<number>();

const generateNonEmptyTree = () => {
  const tree = new BinarySearchTree<number>();
  tree.insert(3);
  tree.insert(1);
  tree.insert(5);
  tree.insert(2);
  tree.insert(4);
  return tree;
};

describe('BinarySearchTree', () => {
  it('should traverse', () => {
    const tree = generateNonEmptyTree();
    expect(tree.traverse('in')).toEqual([1, 2, 3, 4, 5]);
    expect(tree.traverse('pre')).toEqual([3, 1, 2, 5, 4]);
    expect(tree.traverse('post')).toEqual([2, 1, 4, 5, 3]);
  });

  it('should insert', () => {
    const tree = generateEmptyTree();

    tree.insert(3);
    expect(tree.size).toBe(1);
    expect(tree.traverse('in')).toEqual([3]);

    tree.insert(1);
    expect(tree.size).toBe(2);
    expect(tree.traverse('in')).toEqual([1, 3]);

    tree.insert(5);
    expect(tree.size).toBe(3);
    expect(tree.traverse('in')).toEqual([1, 3, 5]);

    tree.insert(2);
    expect(tree.size).toBe(4);
    expect(tree.traverse('in')).toEqual([1, 2, 3, 5]);

    tree.insert(4);
    expect(tree.size).toBe(5);
    expect(tree.traverse('in')).toEqual([1, 2, 3, 4, 5]);
  });
});