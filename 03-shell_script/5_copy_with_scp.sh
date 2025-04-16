#!/bin/bash

copy_with_scp() {
    src="$1"
    user="$2"
    ip="$3"
    scp -r "$src" "$user@$ip:~/"
}

copy_with_scp "$1" "$2" "$3"