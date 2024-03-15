
// Query 7
// Return the number of users born in each month as a new collection
// named countbymonth that has the following schema
//
// MOB: xxx
// borncount: xxx
// 
// You need to use aggregate for an acceptable solution.
// You will likely find it useful to use the following 
// elements in the aggregate pipeline:
// $group
// $sort
// $addFields: to add a column called MOB
// $project: you may need it to remove _id created by group (another
// _id may get added back in when the output table is created. That is OK.)
// $out: to output the result to the new collection.
//


function users_born_by_month(dbname) {
	db.db.getSiblingDB(dbname);
	
	// Enter your solution below 

}

