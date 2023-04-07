import React from 'react';

export default function Layout(props) {
    return(
        <main className="layout">
            {props.children}
        </main>
    )
}