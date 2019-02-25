//callBacks

const elements = [ "earth", "wind", "fire", "water"];



const forEach = (list, callback) => {
for(i=0;i<elements.length; i++) {
    callback(list[i], i);
 }
};

forEach(elements, function(item, index) {
    console.log(item, index);
});