const fs = require('fs');
const assert = require('assert');

assert.ok(fs.existsSync('index.html'), 'index.html must exist');
assert.ok(fs.existsSync('src/app.js'), 'app.js must exist');
assert.ok(fs.existsSync('src/style.css'), 'style.css must exist');

const html = fs.readFileSync('index.html', 'utf8');
const js = fs.readFileSync('src/app.js', 'utf8');

assert.ok(html.includes('todo-form'), 'To-do form should exist');
assert.ok(html.includes('todo-list'), 'To-do list should exist');
assert.ok(js.includes('localStorage'), 'App should use localStorage');

console.log('All tests passed.');
