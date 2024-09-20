import{useState,useRef}from"react";
import saveAs from "file-saver";

function Qrcode()
{
	const rUrl=useRef();
	const [url,setUrl]=useState("");
	const [qrcode,setQrcode]=useState("");
	const hUrl=(event)=>{setUrl(event.target.value); }
	
	const gqr=(event)=>{
		event.preventDefault();
		let res="http://api.qrserver.com/v1/create-qr-code/?data="+url;
		setQrcode(res);
	}
	const dw=(event)=>{
		event.preventDefault();
		saveAs(qrcode,"download");
		alert("downloaded");
	}
	
	return(
		<>
		<center>
			<h1>Qr code Generator</h1>
			<form onSubmit={gqr}>
			<input type="text" placeholder="enter url"
				ref={rUrl} onChange={hUrl} value={url}/>
				<br/><br/>
				<input type="submit" value="Generate QR"/>
				</form>
				<br/>	
				<img src={qrcode}/>
				
				<form onSubmit={dw}>
					<input type="submit" value="Download QR"/>
					<br/>	
				</form>
			</center>
		</>
	);
}

export default Qrcode;
