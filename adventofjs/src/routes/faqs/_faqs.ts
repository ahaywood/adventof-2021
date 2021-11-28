// reference: https://githubmemory.com/repo/pngwn/MDsveX/issues/294

export type Faq = {
  question: string;
};

const modules = import.meta.globEager("$content/content/faqs/*.md");

export const faqs: Faq[] = Object.entries(modules).map(([filepath, module]) => {
  const { metadata } = module;
  const { html } = module.default.render();
  return {
    html,
    ...metadata,
  };
});