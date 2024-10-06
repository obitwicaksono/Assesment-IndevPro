import test from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('two positive numbers', () => {
    const result = sum(2, 3);
    assert.strictEqual(result, 5);
});