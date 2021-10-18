import { DailyJournal } from "./DailyJournal.js"
import { JournalForm } from "./JournalForm.js"
// render previous entries 
const entryList = document.querySelector(".previousEntry")
const render = () => {
    entryList.innerHTML = DailyJournal()
}

// render html for journal input 
const newEntry = document.querySelector(".newEntry")
const renderJournal = () => {
    newEntry.innerHTML = JournalForm()
}

render()
renderJournal()