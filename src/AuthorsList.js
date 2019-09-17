
import React from "react";
import AuthorCard from "./AuthorCard"


function AuthorsList(props) {
    const list = props.authors.map(a => {
        return <AuthorCard author={a} key={a.first_name} />
    });
    return (
        <div className="content col-10">
            <div className="authors">
                <h3>Authors</h3>
                <div className="row">
                    {list}
                </div>
            </div>
        </div>
    )
}

export default AuthorsList