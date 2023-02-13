const wrapper =document.getElementById('bubble-wrapper');


const animateBubble = x =>{
	const bubble =document.createElement("div");

	bubble.className ="bubble";

	bubble.style.left ='${x}px';

	wrapper.appendchild(bubble);

	setTimeout(()=> wrapper.removechild(bubble), 2000);


}
window.onmousemove = e => animateBubble(e.clientx);