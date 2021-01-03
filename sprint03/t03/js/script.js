const obj = {
    words: 'newspapers newspapers   books magazines',
};

const toArray = str => {
    return str.trim().split(/\s+/g).filter(word => word);
}

const fromArray = arr => {
    return arr.join(' ');
}

const unique = arr => {
    let uniqueWords = [];

    arr.forEach(word => {

        if (!uniqueWords.includes(word)) {
            uniqueWords.push(word);
        }
    });

    return uniqueWords;
};

const addWords = (obj, wrds) => {

    const allWords = toArray(obj.words).concat(toArray(wrds));
    const uniqueArr = unique(allWords);

    obj.words = fromArray(uniqueArr);
};

const removeWords = (obj, wrds) => {

    const objArr = toArray(obj.words);
    const wrdsArr = toArray(wrds);

    const removed = objArr.filter(word => !wrdsArr.includes(word));

    obj.words = fromArray(removed);
};

const changeWords = (obj, oldWrds, newWrds) => {

    removeWords(obj, oldWrds);
    addWords(obj, newWrds);
};


// console.log(obj);

// addWords(obj, 'radio newspapers    ');
// console.log(obj);

// removeWords(obj, 'newspapers  radio  ');
// console.log(obj);

// changeWords(obj, 'books radio  magazines', 'tv internet');
// console.log(obj);