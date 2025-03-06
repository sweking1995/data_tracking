let data;
let dataIndex = 1;

function setup() {
    createCanvas(400, 400);

    // Usage example
    const dataReader = new DataReader('data.csv');
    dataReader.readFile().then(parsedData => {
        //console.log(parsedData);
        data = parsedData;
    });


}

function keyPressed() {
    // console.log(keyCode);
    // arrow left
    if (keyCode === 37) {
        dataIndex--;
        if (dataIndex < 1) {
            dataIndex = data.length - 1;
        }
    }
    // arrow right
    if (keyCode === 39) {
        dataIndex++;
        if (dataIndex >= data.length) {
            dataIndex = 1;
        }
    }
}

function draw() {
    background(220);
    stroke(0,0,255);


    let shots = data[dataIndex][4];
    let goals = data[dataIndex][5];
    let saves = data[dataIndex][6];

    let radiusShots = shots * 2;
    circle(200, 150, radiusShots);

    let radiusGoals = goals * 2;
    circle(200, 150, radiusGoals);

    let radiusSaves = saves * 2;
    line(200, 150, 200, 150 + radiusSaves);

    // fontSize
    textSize(26);
    text(data[dataIndex][2], 100, 50);
}