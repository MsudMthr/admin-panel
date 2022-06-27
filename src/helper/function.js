const slugSplitter = (slug) => {
  const slugArr = slug.split("-");
  return slugArr;
};

const joinTitle = (title) => {
  const titleArray = title.split(" ");
  const joinedTitle = titleArray.join("-");
  return joinedTitle;
};

export { slugSplitter, joinTitle };
