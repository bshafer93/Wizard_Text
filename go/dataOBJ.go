package wizServer

import (
	"net"
	"bufio"
	"strings"
	"fmt"
)

type IncomingMSG struct{
	net.Conn
}
type Spell struct {
	IncomingMSG
	name string
	power int
	cost int
}

type MSG interface {
	deduceType() string
	contents() string
}

func (d *IncomingMSG) deduceType() string{

	msg, _ := bufio.NewReader(d).ReadString('\n')
	stringedMsg := string(msg)
	switch {
	case strings.HasPrefix(stringedMsg, "MIncoming"):
		fmt.Println("It's before noon")
	default:
		fmt.Println("It's after noon")
	}

}




