const useTitleOneController = (props: any) => {
  const {subTitle, FieldTitle} = props;
  const ChecktextStyle = (): string => {
    if (subTitle) {
      return 'subTitle';
    }
    if (FieldTitle) {
      return 'FieldTitle';
    }
    return 'TextOne';
  };

  return {
    ChecktextStyle,
  };
};

export default useTitleOneController;
