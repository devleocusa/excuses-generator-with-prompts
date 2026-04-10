const who = [
  "My dog",
  "The neighbor",
  "A random guy on the street",
  "My little cousin"
];

const action = [
  "ate my homework",
  "stole my keys",
  "crashed into my mailbox",
  "set off the fire alarm"
];

const what = [
  "my laptop",
  "the project I was working on",
  "the entire stack of documents",
  "the only copy of the report"
];

const when = [
  "today",
  "yesterday",
  "this morning",
  "last night",
  "earlier this afternoon",
  "a few minutes ago"
];

const randomWho = who[Math.floor(Math.random() * who.length)];
const randomAction = action[Math.floor(Math.random() * action.length)];
const randomWhat = what[Math.floor(Math.random() * what.length)];
const randomWhen = when[Math.floor(Math.random() * when.length)];

const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;

console.log(excuse);
