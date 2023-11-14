import { PrizeFont } from "@/components/fonts";
import { expect, suite, test } from "vitest";
import { render } from "@testing-library/react";

suite("PrizeFont", () => {
  test("Renders snapshot", () => {
    expect(<PrizeFont amount="10,000" />).toMatchSnapshot();
  });

  test("Renders default currency sign", () => {
    const rendered = render(<PrizeFont amount="10,000" />);
    const content = rendered.getByLabelText("content").innerHTML;
    expect(content).toContain("S/");
  });
});
