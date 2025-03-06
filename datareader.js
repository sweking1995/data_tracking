class DataReader {
    constructor(filePath) {
        this.filePath = filePath;
    }

    async readFile() {
        try {
            const response = await fetch(this.filePath);
            const data = await response.text();
            return this.parseCSV(data);
        } catch (error) {
            console.error('Error reading file:', error);
        }
    }

    parseCSV(data) {
        const lines = data.split('\n');
        const headers = lines[0].split(',');

        let parsedData = [];

        // for loop
        for(let i=0; i < lines.length; i++) {
            const values = lines[i].split(',');
            console.log(values[2]);
            parsedData.push(values);
        } 

        return parsedData;
    }
}

