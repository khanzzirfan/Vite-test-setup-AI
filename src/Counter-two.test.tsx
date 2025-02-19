import { render, screen } from "@testing-library/react";
import CounterTwo from "@/components/counter-two/Counter-two";
import user from "@testing-library/user-event";

describe("Counter-two", () => {
  test("should call function on button click", async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();

    render(
      <CounterTwo
        count={0}
        incrementCount={incrementHandler}
        decrementCount={decrementHandler}
      />
    );
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    const decrementButton = screen.getByRole("button", {
      name: "Decrement",
    });

    await user.click(incrementButton);
    await user.click(decrementButton);

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });

  test("should display the initial count", () => {
    render(
      <CounterTwo
        count={5}
        incrementCount={() => {}}
        decrementCount={() => {}}
      />
    );
    const countDisplay = screen.getByText("5");
    expect(countDisplay).toBeInTheDocument();
  });

  test("should update the count correctly on button click", async () => {
    user.setup();
    let count = 0;
    const incrementHandler = jest.fn((value) => { count = value; });
    const decrementHandler = jest.fn((value) => { count = value; });

    render(
      <CounterTwo
        count={count}
        incrementCount={incrementHandler}
        decrementCount={decrementHandler}
      />
    );
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    const decrementButton = screen.getByRole("button", {
      name: "Decrement",
    });

    await user.click(incrementButton);
    expect(incrementHandler).toHaveBeenCalledWith(1);

    await user.click(decrementButton);
    expect(decrementHandler).toHaveBeenCalledWith(-1);
  });
});
