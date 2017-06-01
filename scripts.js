var friends = ["Sandy", "Cory", "Chris", "Terry", "Ariana"];

for (var i = 0; i < friends.length; i++) {
    for (var lines = 99; lines > 0; lines--) {
      
     if (lines > 2){
          console.log(lines + " lines of code in the file, " + lines +
            " lines of code; " + friends[i] + " strikes one out, " + 
            "clears it all out, " + (lines-1) + " lines of code in the file");
        } else if(lines === 2){
              console.log(lines + " lines of code in the file, " + lines +
                " lines of code; " + friends[i] + " strikes one out, " + 
                 "clears it all out, " + (lines-1) + " lines of code in the file");
        } else {
             console.log(lines + " line of code in the file, " + lines +
                " line of code; " + friends[i] + " strikes one out, " + 
                "clears it all out, " + (lines) + " no more lines of code left in the file");
            console.log(" ");

        }
    }
}