export const useCheckOperator = () => {
  function checkOperator(token: string) {
    switch (token[0]) {
      case '+':
        return token;

      case '-':
        if (token.split('-').length - 1 > 1) {
          return token.substring(1);
        }
        return token;

      case '/':
        return token.substring(1);

      case '*':
        return token.substring(1);

      default:
        return token;
    }
  }

  return { checkOperator } as const;
};
