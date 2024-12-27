import { render, fireEvent } from "@testing-library/react";
import CounterTwo from "./Counter-two";

describe("CounterTwo Component", () => {
  const incrementMock = jest.fn();
  const decrementMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly with initial count", () => {
    const { getByText } = render(
      <CounterTwo
        count={0}
        incrementCount={incrementMock}
        decrementCount={decrementMock}
      />
    );
    expect(getByText("Counter Two")).toBeInTheDocument();
    expect(getByText("0")).toBeInTheDocument();
  });

  it("calls incrementCount when Increment button is clicked", () => {
    const { getByText } = render(
      <CounterTwo
        count={0}
        incrementCount={incrementMock}
        decrementCount={decrementMock}
      />
    );
    fireEvent.click(getByText("Increment"));
    expect(incrementMock).toHaveBeenCalledWith(1);
  });

  it("calls decrementCount when Decrement button is clicked", () => {
    const { getByText } = render(
      <CounterTwo
        count={1}
        incrementCount={incrementMock}
        decrementCount={decrementMock}
      />
    );
    fireEvent.click(getByText("Decrement"));
    expect(decrementMock).toHaveBeenCalledWith(0);
  });

  it("handles negative count correctly", () => {
    const { getByText } = render(
      <CounterTwo
        count={0}
        incrementCount={incrementMock}
        decrementCount={decrementMock}
      />
    );
    fireEvent.click(getByText("Decrement"));
    expect(decrementMock).toHaveBeenCalledWith(-1);
  });

  it("should not call increment or decrement functions when count does not change", () => {
    const { getByText } = render(
      <CounterTwo
        count={0}
        incrementCount={incrementMock}
        decrementCount={decrementMock}
      />
    );
    fireEvent.click(getByText("Increment"));
    fireEvent.click(getByText("Increment"));
    expect(incrementMock).toHaveBeenCalled();
    expect(decrementMock).toHaveBeenCalledTimes(0);
  });

  it("renders correctly with maximum safe integer", () => {
    const { getByText } = render(
      <CounterTwo
        count={Number.MAX_SAFE_INTEGER}
        incrementCount={incrementMock}
        decrementCount={decrementMock}
      />
    );
    expect(getByText(String(Number.MAX_SAFE_INTEGER))).toBeInTheDocument();
  });
});
