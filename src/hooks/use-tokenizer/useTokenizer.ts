export const useTokenizer = () => {
  function tokenizer(token: string) {
    if (token.split('-').length - 1 >= 1) {
      token = token.substring(1);
      return token;
    }
    return token;
  }

  return { tokenizer } as const;
};
