let currentDayEl = $("#currentDay");

let containerEl = $(".container");

let today = moment().format("dddd, MMMM Do");

let currentTime = moment().format("h a");

let hour = moment().format("HH");

currentDayEl.append(today);

for(let i = 5; i < 24; i++){
    let block = $('<div>');
    let hourblock = i;
    block.addClass('row');

    let timeslot = $('<div>');
    timeslot.addClass('time-block, col-1');
    let timedisplay = $('<p>');
    timedisplay.addClass('hour');
    if(i == 12){
        timedisplay.text(i + " PM");
    } else if (i > 12){
        j = i - 12;
       timedisplay.text(j + " PM");
    } else {
        timedisplay.text(i + " AM");        
    }
    
    timedisplay.appendTo(timeslot);

    timeslot.appendTo(block);

    let agenda = $('<textarea>');
    agenda.addClass('description, col-10');
    agenda.appendTo(block);

    let savebutton = $('<button>');
    savebutton.addClass('btn, btn-block, saveBtn').text('  SAVE  ');
    savebutton.appendTo(block);

    block.appendTo(containerEl);
}


