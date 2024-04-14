import { RenderResult } from "@testing-library/react";
import { Repository } from "./index";
import renderWithTheme from "../../../utils/test.utils";

test("renders repository information correctly", () => {
  const mockRepo = {
    id: 1,
    name: "Test Repository",
    description: "This is a test repository",
    html_url: "https://github.com/test/test-repo",
    language: "JavaScript",
    forks: 10,
    stargazers_count: 20,
  };

  const { getByText } = renderWithTheme(<Repository repo={mockRepo} />);


  const findIconText = (
    iconName: string,
    count: number,
    getByText: RenderResult["getByText"]
  ) => {
    return getByText((content, element) => {
      let textContent = "";

      const concatTextFromChildren = (el: Element | null) => {
        if (!el) return;
        const children = el.childNodes;
        children.forEach((child) => {
          if (child.nodeType === Node.TEXT_NODE) {
            textContent += child.textContent || "";
          } else if (child.nodeType === Node.ELEMENT_NODE) {
            concatTextFromChildren(child as Element);
          }
        });
      };

      concatTextFromChildren(element);

      const regex = new RegExp(`${iconName}.*${count}`);
      return regex.test(textContent);
    });
  };
});
