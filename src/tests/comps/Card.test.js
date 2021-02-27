import { render, screen, fireEvent } from "@testing-library/react";
import Card from "../../comps/Card";

test("if the readCircle disapears after clicking the link", () => {
  render(
    <Card
      link={"https://www.sekiro.com/"}
      avatar={""}
      site={"https://www.darksouls.com"}
      date={new Date()}
      title={"You died"}
      description={""}
      read={false}
    />
  );
  const link = screen.getByText("You died").closest("a");
  const readCirdle = screen.getByLabelText("not-read");
  expect(link).toHaveAttribute("href", "https://www.sekiro.com/");
  fireEvent.click(link);
  expect(readCirdle).not.toBeInTheDocument();
});
