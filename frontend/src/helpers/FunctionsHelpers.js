export default class FunctionHelpers {
    get_random_int(max) {
        return Math.floor(Math.random() * max);
    }

    // credit: https://stackoverflow.com/a/2450976/9206621
    // uses the Knuth shuffle method by Fisher-Yates
    shuffle(array) {
        var currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
      
}

