import "../../styles/Pages/Profile.css"

function Profile (props) {
    return (
    <div id="profile-box">

        <section className="basicInfo">
           <h1>{props.username}</h1>
        </section>
        
        <section className="numReviews">
            <p>Number of reviews:</p>
            <p class="numDisplay">{props.numOfReviews}</p>
        </section>

        <section className="latest">
            <p>Latest Review:</p>
        </section>
    </div>)
}

export default Profile;