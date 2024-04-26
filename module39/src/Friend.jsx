export default function Friend(fri){
console.log(fri.friend.name)
const {name,email}=fri;

    return(
        <div className="box">
            <h4>Name: {fri.friend.name}</h4>
            <p>Email: {fri.friend.email}</p>
        </div>
    )
}