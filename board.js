function isOdd(num) { return num % 2;}

for (var i=0; i<8; i++) {
    if (isOdd(i)) {
        console.log('# # # # ');
    } else {
        console.log(' # # # #');
    }
}