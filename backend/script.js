function ReplaceAllReadmeCheckBox() {
    var listItems = document.getElementsByTagName("li");
    var i;
    for (i = 0; i < listItems.length; i++) {
        listItems[i].innerHTML = listItems[i].innerHTML.replace("[ ]", '🔳');
        listItems[i].innerHTML = listItems[i].innerHTML.replace("[X]", '☑️');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ReplaceAllReadmeCheckBox()
});