chrome.contextMenus.create({
    id: "markdown",
    title: "Markdown",
    contexts: ["all"]
});

chrome.contextMenus.create({
    id: "confluence-wiki",
    title: "Confluence wiki",
    contexts: ["all"]
});

chrome.contextMenus.create({
    id: "title-url",
    title: "Title and URL",
    contexts: ["all"]
});

chrome.contextMenus.create({
    id: "url",
    title: "Only URL",
    contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    switch (info.menuItemId) {
        case "markdown":
            copy(`[${tab.title}](${tab.url})`);
            break;
        case "confluence-wiki":
            copy(`[${tab.title}|${tab.url}]`);
            break;
        case "title-url":
            copy(`${tab.title} - ${tab.url}`);
            break;
        case "url":
            copy(`${tab.url}`);
            break;
    }
});

function copy(str) {
    const ta = document.createElement('textarea');
    ta.value = str;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
}