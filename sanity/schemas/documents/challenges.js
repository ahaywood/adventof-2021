export default {
  name: 'challenges',
  title: 'Challenges',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'date', title: 'Date Released', type: 'date' },
    { name: 'brief', title: 'Brief', type: 'array', of: [{ type: 'block' }] },
    { name: 'gettingStarted', title: 'Getting Started', type: 'array', of: [{ type: 'block' }] },
    { name: 'ideas', title: 'Ideas', type: 'array', of: [{ type: 'block' }] },
  ]
};