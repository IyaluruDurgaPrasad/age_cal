function year(){
			var date=new Date()
			var year=document.getElementById("year").value
			var year1=date.getFullYear()

			var date1=document.getElementById("day").value
			var date2=date.getDate()

			var month=document.getElementById("month").value
			var month1=date.getMonth()

			y=parseInt(year1)-parseInt(year)
			m=parseInt(month1)-parseInt(month)
			d1=parseInt(date2)-parseInt(date1)
			d=Math.abs(d1)

			return `${y} years ${m} months ${d}days`
		}
		function get(){
			result=year()
			document.getElementById("result").style.visibility="visible"
			document.getElementById("result").style.background="pink"
			document.getElementById("result").style.color="black"
			document.getElementById("result").innerText=`Your age is ${result}`
		}