import * as Tone from "https://cdn.skypack.dev/tone"

document.getElementById("go-button").onclick = play
function play() {
    // document.getElementById("checkbox1").value;
    let check_boxes = [
        document.getElementById("checkbox1").checked,
        document.getElementById("checkbox2").checked,
        document.getElementById("checkbox3").checked,
        document.getElementById("checkbox4").checked,
        document.getElementById("checkbox5").checked,
        document.getElementById("checkbox6").checked,
        document.getElementById("checkbox7").checked,
        document.getElementById("checkbox8").checked
        ]
function count_checks(arr) {
    let counter = 0
    for (let i=0; i< arr.length; i++) {
        if (arr[i] === true) {
            counter++
        }
    }
    return counter

}
    let number_checked = count_checks(check_boxes)
    let notes
    let duration
    if (number_checked===8|| number_checked===4 || number_checked===1) {
        notes = ["C3", "E3", "G3", "C4", "D4", "E4", "G4", "A4"]
    }
    if (number_checked===7 || number_checked===2) {
        notes = ["C3", "Eb3", "G3", "C4", "D4", "Eb4", "G4", "A4"]
    }
    if (number_checked===6 || number_checked===3) {
        notes = ["C3", "F3", "Ab3", "C4", "Eb4", "F4", "Ab4", "Bb4"]
    }
    if (number_checked === 5) {
        notes = ["C3", "Eb3", "G3", "C4", "D4", "Eb4", "G4", "A4"]
    }
    if (number_checked === 0) {
        notes = ["C3", "Eb3", "G3", "C4", "D4", "Eb4", "G4", "A4"]
    }
    if (number_checked==0 || number_checked==1 || number_checked==2) {
      duration = "8n"
    }
    if (number_checked==3 || number_checked==4 || number_checked==5) {
      duration = "4n"
    }
    if (number_checked==6 || number_checked==7 || number_checked==8) {
      duration = "2n"
    }

    let notes_to_play = []
    for (let i=0; i<check_boxes.length;i++) {
        if (check_boxes[i]) {
            notes_to_play.push(notes[i])
        }
    }
    // alert(notes_to_play)
    const synth = new Tone.PolySynth().toDestination();
    // const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(notes_to_play, duration)
  // for (let i=0; i<notes_to_play.length;i++) {
    //     synth.triggerAttackRelease(notes_to_play[i], "8n")
    // }

}