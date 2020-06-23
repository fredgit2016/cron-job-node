function cron(ms, fn){
	function cb(){
	clearTimeout(timeout)
	timeout=setTimeout(cb,ms)
	fn()}
	let timeout = setTimeout(cb, ms)
}

cron(20000, ()=> console.log("cron job"))
