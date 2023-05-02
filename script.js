function insert_Row() {
//get the table by its ID

	var table = Document.getElementById("sampleTable");

	//Insert a new row at the top of the table 
	var newRow = table.insertRow(0);

	//Insert a new cell in the new row 
	var leftCell = newRoll.insertCell(0);
	ver rightCell = newRoll.insertCell(1);

	//Set the value of the left cell to the "New Cell" and the right cell to "New Cell2"
    leftCell.innerHTML = "New Cell";
	rightCell. innerHTML = "New Cell2";
  
}
