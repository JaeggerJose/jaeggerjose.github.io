function drawTree(height) {
for (var i = 0; i < height; i++) {
    // 2n+1 stars per row i.e. 1, 3, 5, 7, ...
    var stars = '*'.repeat(2 * i + 1);
    var spacesBefore = ' '.repeat(height - i - 1);
    console.log(spacesBefore + stars);
}
}
function drawTreeBottom(n) {
for(let j=0;j<n/2;j++) {
    var space_bottom = ' '.repeat(n/2+1);
    var star_bottom = '*'.repeat(n/2);
    console.log(space_bottom+star_bottom+'\n');
}
}

function print_tree(n) {
    drawTree(n);
    drawTreeBottom(n);
}

function clickbutton(){
    var tree = 10;
    print_tree(10);
};

function post_request() {
    var books = [{"id": "1", "name": "Herry potter", "year": 2009},{"id": "2", "name": "Herry potter2", "year": 22009}];
    var books_json = JSON.stringify(books);
    console.log(books_json);
}
