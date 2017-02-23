var getAnchors = document.getElementsByTagName('a');
for (var i = 0; i < getAnchors.length; i++) {
    getAnchors[i].addEventListener('click', function(event) {
        event.preventDefault();
    });
}
