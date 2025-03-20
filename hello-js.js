(async () => {
  const snippets = await fetch(
    "https://raw.githubusercontent.com/NodeJSDude/javascript-snippets/main/snippets.js"
  ).then((response) => response.json());
  // Loop through the snippets and update the DevTools snippets
  for (const snippet of snippets) {
    // Check if the snippet exists in the DevTools
    let existingSnippet = DevTools.getSnippet(snippet.name);
    if (existingSnippet) {
      // Update the snippet
      DevTools.updateSnippet(snippet.name, snippet.content);
    } else {
      // Create a new snippet
      DevTools.createSnippet(snippet.name, snippet.content);
    }
  }
})();
