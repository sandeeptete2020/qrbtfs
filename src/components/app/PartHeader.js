import React from "react";
import '../Qrcode.css';
import InputText from "../../containers/app/InputText";
import QrbtfLogo from "../svg/QrbtfLogo";

const PartHeader = () => (
    <div className="Qr-Centered">
        <div>
            <h1 className="Qr-title">Tropley</h1>
        </div>
        <p className="Qr-subtitle">Parametric QR Code Generator{/* <sup className="Gray">测试版</sup>*/}</p>
        <InputText/>
    </div>
)

export default PartHeader
