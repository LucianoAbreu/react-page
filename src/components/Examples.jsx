import { useState } from "react";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";

export default function Examples() {
  const [tabContent, setTabContent] = useState("");

  function handleSelect(selectedButton) {
    setTabContent(selectedButton);
  }

  // The selected topic of examples is displayed here
  let selectedTopic = <p>Please select a topic.</p>;

  if (tabContent !== "") {
    selectedTopic = (
      <div id="tab-content">
        <h3>{EXAMPLES[tabContent].title}</h3>
        <p>{EXAMPLES[tabContent].description}</p>
        <pre>
          <code>{EXAMPLES[tabContent].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={tabContent === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={tabContent === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={tabContent === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={tabContent === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {selectedTopic}
    </section>
  );
}
