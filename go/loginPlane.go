package main

import (
	"fmt"
	"net"
	"os"
	"bufio"
	"strings"
)

const (
	CONN_HOST = "107.170.196.189"
	CONN_PORT = "3333"
	CONN_TYPE = "tcp"
)

func main() {
	// Listen for incoming connections.
	l, err := net.Listen(CONN_TYPE, CONN_HOST+":"+CONN_PORT)
	if err != nil {
		fmt.Println("Error listening:", err.Error())
		os.Exit(1)
	}
	// Close the listener when the application closes.
	defer l.Close()
	fmt.Println("Listening on " + CONN_HOST + ":" + CONN_PORT)
	for {
		// Listen for an incoming connection.
		conn, err := l.Accept()
		if err != nil {
			fmt.Println("Error accepting: ", err.Error())
			os.Exit(1)
		}
		// Handle connections in a new goroutine.
		go handleRequest(conn)
	}
}

// Handles incoming requests.
func handleRequest(conn net.Conn) {

	for {
		msg, _ := bufio.NewReader(conn).ReadString('\n')

		fmt.Print("Message Received:", string(msg))

		newmessage := strings.ToUpper(msg)

		conn.Write([]byte(newmessage + "\n"))
	}

}