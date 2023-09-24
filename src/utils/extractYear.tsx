const extractYear = (date: string | undefined) => {
  if (date) {
    const dateArray = date?.split("-");
    return dateArray[0];
  }
};
export default extractYear;
