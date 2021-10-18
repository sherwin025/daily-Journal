

export const JournalForm = () => {
    return `<h2>Daily Journal</h2>
    <form class="date">
        <fieldset>
            <label for="entryDate">Date of Entry:</label>
            <input type="date" name="entryDate" class="newEntry__date">
        </fieldset>
    </form>
    <form class="concept">
        <fieldset>
            <label for="conceptsCovered">Concepts Covered:</label>
            <input type="input" name="conceptsCovered" class="newEntry__concepts">
        </fieldset>
    </form>
    <form class="journlEntry">
        <fieldset>
            <label for="journalEntry">Journal Entry:</label>
            <input type="textarea" name="journalEntry" class="newEntry__journal" wrap="physical">
        </fieldset>
    </form>
    <form class="mood">
        <fieldset>
            <label for="mood">Mood for the day:</label>
            <select name="moods" class="moods">
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="confused">confused</option>
                <option value="good">Good</option>
                <option value="angry">Angry</option>
                <option value="annoyed">Annoyed</option>
                <option value="blah">Blah</option>
            </select>
        </fieldset>
    </form>
    <button class="record">Record Journal Entry</button>`
}