//challenge question from Mr. Charlie Yabes
/* Help me to answer. 😭
As a future athlete you just started your practice for an upcoming event. Given that on the first day you run x miles, and by the event you must be able to run y miles.
Calculate the number of days required for you to finally reach the required distance for the event, if you increases your distance each day by 10% from the previous day.
Print one integer representing the number of days to reach the required distance. */
document.getElementById("fsub").onclick = function () {
    var getx = document.getElementById("sk").valueAsNumber;
    var gety = document.getElementById("rk").valueAsNumber;
    document.getElementById("rh").innerHTML = checkThisss(getx, gety);
    // console.log(checkThisss(getx, gety));
    /*  console.log(getx + gety);
    console.log(gety); */
};

function checkThisss(startDayKM, eventRequiredKM) {
    let x = startDayKM; //5
    let y = eventRequiredKM; //20
    const iR = 0.1;
    let daysFinished = 0;
    let kmFinished = 0;
    let kmExcess = 0;
    let currentValue = 0;
    let recordPerday = [];
    let recordPerdayCount = x;

    if (x >= y) {
        kmExcess = x - y;
        return `You already ran what is required with an excess of ${kmExcess.toPrecision(
            3
        )} kilometer/s. You pass!`;
    } else {
        if (x <= 0) {
            return "You haven't moved an inch!";
        } else {
            if (y <= 0) {
                return "How much running do you need? please specify";
            } else {
                while (kmFinished < y) {
                    kmFinished = kmFinished + x;
                    currentValue = x;
                    x = x + x * iR;
                    daysFinished++;
                    kmExcess = kmFinished - y;
                }

                /*  console.log(x);
                console.log(kmFinished);
                console.log(currentValue);
                console.log(kmExcess);
                for (j = 0; j <= 5; j++) {
                    console.log((x = x + x * iR));
                } */

                if (kmExcess >= 7) {
                    daysFinished--;
                    kmExcess = y - (kmFinished - currentValue);
                    kmFinished = kmFinished - currentValue;

                    for (let q = 0; q < daysFinished; q++) {
                        recordPerday[q] = `Day ${
                            q + 1
                        } = ${recordPerdayCount.toPrecision(3)}<br>`;
                        recordPerdayCount =
                            recordPerdayCount + recordPerdayCount * iR;
                    }
                    /* console.log(recordPerday); */
                    return `You will finish in approx ${daysFinished} day/s and run ${kmFinished.toPrecision(
                        4
                    )} km/s with a short of ${kmExcess.toPrecision(
                        3
                    )} kilometer/s.<br><br>This is your record per day:<br>${recordPerday.join(
                        ""
                    )}`;
                } else {
                    for (let p = 0; p < daysFinished; p++) {
                        recordPerday[p] = `Day ${
                            p + 1
                        } = ${recordPerdayCount.toPrecision(3)}<br>`;
                        recordPerdayCount =
                            recordPerdayCount + recordPerdayCount * iR;
                    }
                    /* console.log(recordPerday); */
                    return `You will finish in approx ${daysFinished} day/s and run ${kmFinished.toPrecision(
                        4
                    )} km/s with an excess of ${kmExcess.toPrecision(
                        3
                    )} kilometer/s.<br><br>This is your record per day:<br> ${recordPerday.join(
                        ""
                    )}`;
                }
            }
        }
    }
} //function end

let age = Number(window.prompt("how old are you is?"));

console.log((age += 1));
