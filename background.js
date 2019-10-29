browser.contextMenus.create({
    id: "markdown",
    title: "Markdown",
    contexts: ["all"]
});

browser.contextMenus.create({
    id: "confluence-wiki",
    title: "Confluence wiki",
    contexts: ["all"]
});

browser.contextMenus.create({
    id: "title-url",
    title: "Title and URL",
    contexts: ["all"]
});

browser.contextMenus.create({
    id: "url",
    title: "Only URL",
    contexts: ["all"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
        case "markdown":
            navigator.clipboard.writeText(`[${tab.title}](${tab.url})`);
            break;
        case "confluence-wiki":
            navigator.clipboard.writeText(`[${tab.title}|${tab.url}]`);
            break;
        case "title-url":
            navigator.clipboard.writeText(`${tab.title} - ${tab.url}`);
            break;
        case "url":
            navigator.clipboard.writeText(`${tab.url}`);
            break;
    }
});
