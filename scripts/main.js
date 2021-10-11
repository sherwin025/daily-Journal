import { DailyJournal } from "./DailyJournal.js"

const entryList = document.querySelector(".previousEntry")

const render = () => {
    entryList.innerHTML = DailyJournal()
}

render()