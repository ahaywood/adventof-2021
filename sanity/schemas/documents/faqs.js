export default {
  name: 'faqs',
  title: 'FAQs',
  type: 'document',
  fields: [
    { name: 'question', title: 'Question', type: 'string' },
    { name: 'answer', title: 'Answer', type: 'array', of: [{ type: 'block' }] },
    { name: 'order', title: 'Order', type: 'number' },
  ]
};