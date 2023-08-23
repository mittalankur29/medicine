import React from "react";

export default function whatsapp() {
    return (
        <>
            <div className="animate-bounce fixed bottom-30 w-24 h-auto z-50 opacity-90">
                <a className="deskweb01 hidden md:block" href="https://web.whatsapp.com/send?phone=+1213-948-2161&amp;text=Hi, Please share your query and our team will connect with you soon!!Thanks" target="_blank">
                    <img 
                    alt=""
                    src="/img/whatsapp.gif"
                    className=""
                    />
                </a>
                <a className="deskweb01 md:hidden" href="https://api.whatsapp.com/send?phone=+1213-948-2161&text=Hi, Please share your query and our team will connect with you soon!!Thanks" target="_blank">
                    <img 
                    alt=""
                    src="/img/whatsapp.gif"
                    className=""
                    />
                </a>
            </div>
        </>
    );
}  