import "../../styles/Pages/Settings.css"

function Settings(props) {

    function submitSettings(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const darkSetting = formData.get("darkMode");
        const newName = formData.get("name");

        props.setDarkMode(darkSetting ? true : false);

        if (newName == "")
            return;
        else
            props.setUsername(newName);
    }   
    return (
    <form id="settings-container" onSubmit={submitSettings} className={`${props.darkMode ? "dark-mode" : ""}`}>
        <section>
            <label htmlFor="name">Username</label>
            <input id="name" type="text" name="name" placeholder={props.username}></input>
        </section>
        <section>
            <label htmlFor="dark">Dark Mode</label>
            <input id="dark"type="checkbox" name="darkMode" defaultChecked={props.darkMode}></input>
        </section>
        <button type="submit" className="saveSettings">Save</button>
    </form>
)
}

export default Settings;