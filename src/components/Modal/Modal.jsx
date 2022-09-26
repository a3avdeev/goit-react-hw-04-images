import React from "react";

export const Modal = ({data}) => {
    return <div >
        <div >
            <img src={data.largeImageURL} alt={data.tags} />
        </div>
    </div>
}