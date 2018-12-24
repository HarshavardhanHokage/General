function convertHTML(str) {
    // &colon;&rpar;

    let entitiesMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    }

    let regEx = /[&<>"']/gi;

    let replaceFunc = function(match) {
        return entitiesMap[match];
    }

    return str.replace(regEx, replaceFunc);
  }
  
  convertHTML("Dolce & < > \" ' Gabbana");