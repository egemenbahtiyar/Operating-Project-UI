//Big table inputs
const inputElements = document.getElementsByClassName("form-control");
//Solaris table inputs
const solarisInputElements = document.getElementsByClassName("solaris-input");
//Queue table inputs
const inputQueueElements = document.getElementsByClassName("queueValues");

const saveButton = document.getElementById("save");
const solarisSaveButton = document.getElementById("solarisCalculate");

saveButton.addEventListener("click", function () {
    const inputValues = [];
    for (let i = 0; i < inputElements.length; i++) {
        inputValues.push(inputElements[i].value);
    }
    constQueueInputValues = [];
    for (let i = 0; i < inputQueueElements.length; i++) {
        constQueueInputValues.push(inputQueueElements[i].value);
    }
    //Index of my empty string
    const numberOfProcess = inputValues.indexOf("") / 2;

    //Trim null values
    var nonNullInputValues = inputValues.filter((value) => value !== "");

    //Return output
    var elmnt = new Array();
    var firstRowData = ["p", "bt", "at"];
    elmnt.push(firstRowData);
    for (let z = 0; z < numberOfProcess; z += 1) {
        let string = "p" + (z + 1);
        let array = [
            string,
            nonNullInputValues[z * 2],
            nonNullInputValues[z * 2 + 1],
        ];
        elmnt.push(array);
    }

    //Get radio button value
    var radioValue = document.querySelector(
        'input[name="flexRadioDefault"]:checked'
    ).value;
    console.log(constQueueInputValues);

    console.log(elmnt);

    //Convert to CSV PART
    const csvString = elmnt.map((row) => row.join(",")).join("\n");

    const link = document.createElement("a");
    link.href = `data:text/csv;charset=utf-8,${encodeURI(csvString)}`;
    link.download = "data.csv";

    document.body.appendChild(link);
    link.click();
});

solarisSaveButton.addEventListener("click", function () {
    const inputValues = [];
    for (let i = 0; i < solarisInputElements.length; i++) {
        inputValues.push(solarisInputElements[i].value);
    }
    //Index of my empty string
    const numberOfProcess = inputValues.length / 4;

    //Trim null values
    var nonNullInputValues = inputValues.filter((value) => value !== "");

    //Return output
    var elmnt = new Array();
    var firstRowData = ["p", "pr", "tq", "tqe", "rfs"];
    elmnt.push(firstRowData);
    for (let z = 0; z < numberOfProcess; z += 1) {
        let array = [
            "p" + (z + 1),
            nonNullInputValues[z * 4],
            nonNullInputValues[z * 4 + 1],
            nonNullInputValues[z * 4 + 2],
            nonNullInputValues[z * 4 + 3],
        ];
        elmnt.push(array);
    }

    console.log(elmnt);

    //Convert to CSV PART
    const csvString = elmnt.map((row) => row.join(",")).join("\n");

    const link = document.createElement("a");
    link.href = `data:text/csv;charset=utf-8,${encodeURI(csvString)}`;
    link.download = "datasolaris.csv";

    document.body.appendChild(link);
    link.click();
});
