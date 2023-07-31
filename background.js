// Listen for changes in the URL of any tab.
browser.webNavigation.onCommitted.addListener((details) => {
  let url = details.url;
  if (url.endsWith('.pdf')) {  // Check if URL ends with .pdf
    // Inject CSS
    browser.tabs.insertCSS(details.tabId, {file: 'styles.css'}).then(() => {})
    .catch(error => {
      console.log(`Error: ${error}`);
    });
  }
});
