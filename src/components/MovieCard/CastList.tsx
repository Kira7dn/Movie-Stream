import { Typography } from "@mui/material";
import CastItem from "./CastItem";
type Props = {
  list: string[];
  title: string;
};
// Write unit test code for CastList component.

const CastList = ({ list, title }: Props) => {
  return (
    <Typography variant="h4">
      {list.reduce(
        (components: JSX.Element[], person, index) => {
          const separator = (
            <span key={title + index + "span"}>
              {index !== list.length - 1 ? ", " : ""}
            </span>
          );
          return components.concat(
            <CastItem key={title + index} name={person} />,
            separator
          );
        },
        [
          <span key={title + "span"} style={{ color: "#A9A9A9" }}>
            {title}:{" "}
          </span>,
        ]
      )}
    </Typography>
  );
};

export default CastList;
