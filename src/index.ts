import DecisionTreeProcessor from './decision-tree/decision-tree-processor';
import { NodeType } from './decision-tree/node-types';
import { readFile } from 'fs';

const loadDecisionTree = async (filePath: string) => {
  try {
    const data = await new Promise<string>((resolve, reject) => {
      readFile(filePath, 'utf8', (err: any, data: string | PromiseLike<string>) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading decision tree:', error);
    throw error;
  }
};

const runDecisionTree = async (filePath: string) => {
  const treeData = await loadDecisionTree(filePath);
  const decisionTree = new DecisionTreeProcessor(treeData);
  decisionTree.execute();
};

const main = async () => {
  await Promise.all([
    runDecisionTree('./christmas-tree.json'),
    runDecisionTree('./email-sms-tree.json'),
    runDecisionTree('./optional-emails-tree.json')
  ]);
};

main();