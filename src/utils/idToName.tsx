const idToName = (
  ids: Array<number>,
  idList: Array<{ id: number; name: string }>
) => {
  const nameList = ids.map((id) => {
    const matchedObject = idList.find((item) => item.id === id);
    return matchedObject ? matchedObject.name : null;
  });
  return nameList;
};

export default idToName;
