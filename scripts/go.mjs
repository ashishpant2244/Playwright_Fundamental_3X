import { execSync } from 'node:child_process';

const message = process.argv.slice(2).join(' ').trim() || 'chore: update tests and docs';

const run = (command) => execSync(command, { stdio: 'inherit' });

run('git add -A');
run(`git commit -m ${JSON.stringify(message)}`);
run('git push');
