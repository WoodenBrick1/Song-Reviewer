import "../../styles/Pages/Settings.css"

function Settings(props) {

    function submitSettings(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const darkSetting = formData.get("darkMode");

        props.setDarkMode(darkSetting ? true : false);
    }
    return (
    <form id="settings-container" onSubmit={submitSettings} className={`${props.darkMode ? "dark-mode" : ""}`}>
        <section>
            <label htmlFor="dark">Dark Mode</label>
            <input id="dark"type="checkbox" name="darkMode"></input>
        </section>
        <button type="submit" className="saveSettings">Save</button>
    </form>
)
}

export default Settings;