let fs = require('fs'),
PNG = require('pngjs').PNG;

fs.createReadStream('./Luke6/mush.png')
    .pipe(new PNG({
    }))
    .on('parsed', function() {
        let imgArray = new Array();
        imgArray.push(this.data[0], this.data[1], this.data[2], this.data[3]);
        for (let y = 4; y < (this.width * this.height*4); y += 4) {
            let a, b, c;
            a = this.data[y] ^ this.data[y-4];
            b = this.data[y+1] ^ this.data[y-3];
            c = this.data[y+2] ^ this.data[y-2];
            imgArray.push(a, b, c, 255);
        }
        for (let y = 0; y < (this.width * this.height*4); y++) {
            this.data[y] = imgArray[y];
        }
        this.pack().pipe(fs.createWriteStream('./Luke6/originalImg.png'));
    });