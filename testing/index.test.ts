import { describe, it, expect, vi, beforeEach } from "vitest";
import { throttle } from "../dist/throttle";
import { showResults } from "../dist/index";

beforeEach(() => {
  document.body.innerHTML = `
    <div id="width"></div>
    <div id="height"></div>
    <div id="contador"></div>
  `;
});

describe("throttle function", () => {
  it("should throttle the function", () => {
    const fn = vi.fn();
    const throttledFn = throttle(fn, 500);

    throttledFn();
    throttledFn();
    throttledFn();

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should fire the function after the wait time of 500ms", () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const throttledFn = throttle(fn, 500);

    throttledFn();
    throttledFn();
    vi.advanceTimersByTime(500);
    throttledFn();

    expect(fn).toHaveBeenCalledTimes(2);
  });
});

describe("showResults", () => {
  it("should show results in DOM elements with window width and height, and add a counter of how many times the function is fired", () => {
    global.window = Object.create(window);
    Object.defineProperty(window, "innerWidth", { value: 1024 });
    Object.defineProperty(window, "innerHeight", { value: 768 });

    showResults();

    const widthPage = document.getElementById("width");
    const heightPage = document.getElementById("height");
    const contadorPage = document.getElementById("contador");

    expect(widthPage?.innerHTML).toBe("Width: 1024");
    expect(heightPage?.innerHTML).toBe("Height: 768");
    expect(contadorPage?.innerHTML).toBe("Contador: 1");
  });
});