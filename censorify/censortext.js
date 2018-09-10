var censoredWords = ["sad", "bad" ,"mad"];
var customCensoredWords= [];

function censor(inStr) {
	for(idx in censoredWord){
		inStr =inStr.replace(censoredWord[idx], "****");
	}
	for (idx in customCensoredWords){
		inStr = inStr.replace(customCensoredWords[idx], "****");
	}
	return inStr;
}
function addCensoredWords(word){
	customCensoredWords.push(word);
}
function getCensoredWords(){
	return censoredWord.concat(customCensoredWords);
}
exports.censor = censor;
exports.addCensoredWords = addCensoredWords;
exports.getCensoredWords = getCensoredWords;