import React from "react";
function New() {
    return (
        <div>
            <h1>New Pokemon Page</h1>
            <form action ="/pokemon" method="POST">
                Name: <input type="text" name="name" /> <br />

                <input type ="submit" value="create pokemon" /> <br />
            </form>
        </div>
    )
}

module.exports = New