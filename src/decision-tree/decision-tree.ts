import { NodeType } from './node-types';

export interface DecisionTreeNode {
  type: NodeType;
  [key: string]: any;
}
