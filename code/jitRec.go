package main

import (
	"bufio"
	"fmt"
	"log"
	"net"
)

func main() {
	// Listen on TCP port 2000 on all interfaces.
	l, err := net.Listen("tcp", ":7474")
	if err != nil {
		log.Fatal(err)
	}
	for {
		// Wait for a connection.
		conn, err := l.Accept()
		if err != nil {
			log.Fatal(err)
		}
		// Handle the connection in a new goroutine.
		// The loop then returns to accepting, so that
		// multiple connections may be served concurrently.

		// Echo all incoming data.

		done := false
		for !done {
			status, err := bufio.NewReader(conn).ReadString('\n')
			if err != nil {
				done = true
			} else {
				fmt.Println(status)
			}

		}

		conn.Close()

	}
}