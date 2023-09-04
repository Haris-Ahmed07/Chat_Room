var stompClient = null

function connect() {

	let sockect = new SockJS("/server1")

	stompClient = Stomp.over(sockect)

	stompClient.connect({}, function(frame) {


		console.log("Connected : " + frame)

		$('#name-form').addClass('d-none')
		$('#chat-room').removeClass('d-none')


		// subscribe 
		stompClient.subscribe("/topic/return-to", function(response) {

			showMessage(JSON.parse(response.body))


		})



	})
}

function showMessage(message) {

	$("#message-container-table").append('<tr><td style="display: flex; align-items: center;"><h3><i class="fa-solid fa-user fa-2xs"></i></h3><b>' + '&nbsp;&nbsp;' + message.name + ' : </b>' + '&nbsp;&nbsp;' + message.content + '</td></tr>');

}




$(document).ready(e => {

	$('#login-btn').click(() => {

		let name = $('#name-value').val()

		if (name == "") {
			name = "Anonymous"
		}

		localStorage.setItem("name", name)

		$("#name-value").val("")
		$("#name-title").html(`Welcome, <b>${name} </b>`)


		connect()
	})

	$('#send-btn').click(() => {

		let jsonOb = {
			name: localStorage.getItem("name"),
			content: $("#message-value").val()
		}

		stompClient.send("/app/message", {}, JSON.stringify(jsonOb))

		$("#message-value").val('')

	})

	$("#logout-btn").click(() => {

		localStorage.removeItem("name")

		if (stompClient != null) {
			stompClient.disconnect()
			$("#name-form").removeClass('d-none')
			$("#chat-room").addClass('d-none')
		}



	})


})