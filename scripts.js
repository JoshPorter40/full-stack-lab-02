var friends = ["Sandy", "Cory", "Chris", "Terry", "Ariana"];

for (i = 0; i < friends.length; i++) {
    for (lines = 99; lines >= 2; lines--) {
    console.log(lines + " lines of code in the file, " + lines +
    " lines of code; " + friends[i] + " strikes one out, " + 
    "clears it all out, " + (lines-1) + " lines of code in the file");
} 
    console.log("1 line of code in the file, 1 line of code; " + friends[i] + 
    " strikes one out, clears it all out, no more lines of code in the file")
    console.log(" ");
}