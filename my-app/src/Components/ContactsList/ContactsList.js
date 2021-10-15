import React from "react";

function ContactsList ({contacts}) {

        return (
            <ul>
                {contacts.map(contact => (
                    <li>
                        <p>{contact}</p>
                    </li>
                ))}
            </ul>
        )
}

export default ContactsList;