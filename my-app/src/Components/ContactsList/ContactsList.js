import React from "react";

function ContactsList ({contacts}) {

        return (
            <ul>
                {contacts.map(({name, number}) => (
                    <li>
                        <p>{name}: {number}</p>
                    </li>
                ))}
            </ul>
        )
}

export default ContactsList;