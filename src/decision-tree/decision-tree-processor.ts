import { DecisionTreeNode } from './decision-tree';
import actions from '../actions/actions';
import { NodeType } from './node-types';

export default class DecisionTreeProcessor {
  root: DecisionTreeNode;

  constructor(treeData: any) {
    this.root = this.deserialize(treeData);
  }

  deserialize(treeData: any): DecisionTreeNode {
    const deserializeNode = (nodeData: any): DecisionTreeNode => {
      const node: DecisionTreeNode = { type: nodeData.type };
      switch (nodeData.type) {
        case NodeType.Condition:
          node.condition = nodeData.condition;
          node.trueAction = deserializeNode(nodeData.trueAction);
          node.falseAction = deserializeNode(nodeData.falseAction);
          break;
        case NodeType.Action:
          node.actionType = nodeData.actionType;
          node.parameters = nodeData.parameters;
          break;
        case NodeType.Loop:
          node.iterations = nodeData.iterations;
          node.subtree = deserializeNode(nodeData.subtree);
          break;
        case NodeType.DoNothing:
          break;
      }
      return node;
    };

    return deserializeNode(treeData);
  }

  execute(): void {
    this.processNode(this.root);
  }

  processNode(node: DecisionTreeNode): void {
    switch (node.type) {
      case NodeType.Condition:
        const conditionResult = eval(node.condition);
        if (conditionResult) {
          this.processNode(node.trueAction);
        } else {
          this.processNode(node.falseAction);
        }
        break;
      case NodeType.Action:
        const action = actions[node.actionType];
        if (action) {
          action.execute(...node.parameters);
        } else {
          console.error(`Unknown action type: ${node.actionType}`);
        }
        break;
      case NodeType.Loop:
        for (let i = 0; i < node.iterations; i++) {
          this.processNode(node.subtree);
        }
        break;
      case NodeType.DoNothing:
        break;
    }
  }
}

