// This script contains functions running all things related to what will happen after a life ends.

import misc from "./misc.js";

export default class deadLife {
    // Function 1: Activates when user clicks on a previous life in the past lives tab
    static pastFn(lifeNo) {
        const pastLife = misc.getData().preserved[lifeNo - 1] ?? null;
        if (pastLife && pastLife.status === 2) {
            misc.display("pastLives2_overlay", "block");
            $("#pastLives2_h1").html(pastLife.name.first + " " + pastLife.name.last + "'s diary");
            $("#pastLives2_p").html(pastLife.diary.toString());
        }
    }

    // Function 2: Activates when a user wants to end a life without preserving it
    static endLife() {
        window.location.href = "home.html";
    }
}
