const Commands = require("../Commands");

class Homepage {

    commands = new Commands();
    weatherTimeline = "//div[@class='scroll-container']";


    async timeline(){
        await this.commands
        await browser.pause(2000);
    }


}





module.exports = Homepage;