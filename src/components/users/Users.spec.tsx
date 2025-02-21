import { render, screen } from "@testing-library/react";
import Users from "./Users";

describe("User", () => {
  test("renders heading", async () => {
    render(<Users />);
    expect(screen.getByRole("heading", { name: "Users" })).toBeInTheDocument();
  });

  test("renders a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(2);
  });

  test("renders specific user names", async () => {
    render(<Users />);
    expect(screen.getByText("name 1")).toBeInTheDocument();
    expect(screen.getByText("name 2")).toBeInTheDocument();
  });

  test("renders correct HTML structure", async () => {
    render(<Users />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  test("does not render unexpected elements", async () => {
    render(<Users />);
    const unexpectedElement = screen.queryByText("unexpected");
    expect(unexpectedElement).not.toBeInTheDocument();
  });
});
