export const useCleanAnswer = () => {
  function cleanAnswer(answer: any) {
    if (answer.split('-').length - 1 > 1) {
      return answer.substring(1);
    }
    return answer;
  }

  return { cleanAnswer } as const;
};
