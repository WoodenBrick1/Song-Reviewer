
function Settings(props) {

    function toggleDarkMode() {
        props.setDarkMode(prevState => !prevState);
    }
    return <button onClick={toggleDarkMode}>Toggle Dark mode</button>
}

export default Settings;