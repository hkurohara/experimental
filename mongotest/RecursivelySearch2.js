function find_recursive2(doc, comparator) {
    if (comparator(doc)) {
	return true;
    }
    for (var attr in doc) {
        if (doc[attr] !== null && typeof (doc[attr]) == "object") {
            if (doc[attr] instanceof Array) {
                for (var i = 0; i < doc[attr].length; i++) {
                    var result = find_recursive2(doc[attr][i], comparator);
                    if (result) {
                        return result
                    }
                }
            } else {
                var result = find_recursive2(doc[attr], comparator);
                if (result) {
                    return result
                }
            }
        }
    }
}
/* Usage example :
// define your comparison funcion as you like.
var f = function(srcdoc) { if (srcdoc["join_type"] == "INNER") return true; else return false }
// then pass the function as comparator argument.

db['sqltext_parsed_test'].find().forEach( function( doc){
 if(find_recursive(doc,f)){
 printjson(doc.statement.sql)
 print("-------------------------")
 }
});
*/

