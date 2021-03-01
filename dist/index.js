let frameCount = 0;
let fps, fpsInterval, startTime, now, then, elapsed; ;
let incImg = 1;
let firstImage = '00001'
let width = 500;
let height = 400;
let imgString = `assets/frames/s_000${firstImage}.jpg`;
// console.log(imgString);
let textElem = document.getElementById('putText');
// let  resizeBtn = document.getElementById('resize');
let font = '30px'
let fillStyle = 'red';


startAnimating(10);
function startAnimating(fps) { 
    fpsInterval = 1000 / fps; 
    then = Date.now(); 
    startTime = then; 
    console.log(startTime); 
    animate(); 
} 

function animate() { 
    // request another frame 

    requestAnimationFrame(animate); 

    // calc elapsed time since the last loop 

    now = Date.now(); 
    elapsed = now - then; 

    // if enough time has elapsed, draw the next frame 

    if (elapsed > fpsInterval) { 
        then = now - (elapsed % fpsInterval); 

    // draw animating objects here... 
        createVideo();
//     // below code is used for testing, whether 
//    // the frame is animating at the specified fps 

//         var sinceStart = now - startTime; 
//         var currentFps =  
// Math.round((1000 / (sinceStart / ++frameCount)) * 100) / 100; 
//         $results.text("Elapsed time= "  
//          + Math.round((sinceStart / 1000) * 100) / 100  
//          + " secs @ " + currentFps + " fps."); 
    } 
} 

function createVideo() {
    const img = new Image();
    img.src = imgString;
    img.onload = () => {
        const canvas = document.createElement('canvas');
        let resultArea = document.getElementById('resultArea');
        resultArea.innerHTML = '';
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext('2d');
        context.drawImage(img, 0, 0);
        resultArea.appendChild(canvas);
        context.font = `bold ${font} Times New Roman`;
        context.textAlign = 'center';
        context.fillStyle = fillStyle;
        context.fillText(textElem.value, img.width/2, img.height/2);
        if (incImg >= 11272) {
            incImg = 1;
            let stringNum = '' + incImg;
            if (stringNum.length < 5) {
                while (stringNum.length <= 4) {
                    stringNum = '0'+stringNum;
                }
            }
            imgString = `assets/frames/s_000${stringNum}.jpg`;
            // testImg.src = imgString;
        } else {
            incImg += 1;
            let stringNum = '' + incImg;
            if(stringNum.length < 5){
                while (stringNum.length <= 4) {
                    stringNum = '0'+stringNum;
                }
            }
            imgString = `assets/frames/s_000${stringNum}.jpg`;
            // testImg.src = imgString;
            // console.log(incImg);
        }
        // console.log(imgString);
        // requestAnimationFrame(createVideo)
    }
}

// resizeBtn.addEventListener('click', () => {
//     height = 700;
// });
