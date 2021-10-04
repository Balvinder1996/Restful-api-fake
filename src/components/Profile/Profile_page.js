import './Profile.scss'
import { useEffect, useState } from 'react'
import img from '../Assets/images/profile_img.jpg'
const Profile = () => {
    const [name, setname] = useState("");
    const [user_name, set_user_name] = useState("");
    // const [name,setname]=useState("")
    useEffect(() => {
        let name = sessionStorage.getItem("name")
        let username = sessionStorage.getItem("username");
        let password = sessionStorage.getItem("password");
        setname(name);
        set_user_name(username)
    }, [])
    return (
        <>
            <section className="section_profile">
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-6">
                            <div class="card pb-30 px-50 pt-50 pb-50 card_shadow">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div class="text-centered"> <img src={img} width="100" height="100" class="rounded-circle" /> </div>
                                        
                                    </div>
                                    <div className="col-md-6">
                                    <div className="d-flex justify-content-between">
                                            <h4>Username</h4>
                                            <h5>{user_name}</h5>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <h4>Name</h4>
                                            <h5>{user_name}</h5>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <h4>Address</h4>
                                            <h5>Not added yet</h5>
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="mt-30 text-centered">
                                            <i class="fa fa-facebook social_icons_facebook mx-20" aria-hidden="true"></i>
                                            <i class="fa fa-twitter social_icons mx-20" aria-hidden="true"></i>
                                            <i class="fa fa-google social_icons mx-20" aria-hidden="true"></i>
                                            <i class="fa fa-cog social_icons mx-20" aria-hidden="true"></i>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Profile